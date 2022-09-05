import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as assert from 'assert';
import { before, binding, given, then, when } from 'cucumber-tsflow';
import * as request from 'supertest';
import { ReniecModule } from '../../../src/reniec.module';
import { ReniecService } from '../../../src/reniec.service';
import { Context } from '../support/context';
import { mockReniecService } from '../support/reniec-mock-service';

@binding([Context])
export class StepsDefinitions {
  constructor(protected context: Context) {}

  app: INestApplication;
  response: request.Response;

  @before()
  public async before(): Promise<void> {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ReniecModule],
    })
      .overrideProvider(ReniecService)
      .useValue(mockReniecService)
      .compile();

    this.context.app = moduleFixture.createNestApplication();
    this.context.app.useGlobalPipes(new ValidationPipe());

    await this.context.app.init();
  }

  @given('I post to query with:')
  public async queryRequest(table: { rawTable: [] }) {
    this.context.request = this.context.tableToObject(table);
  }

  @given('I post to connect with:')
  public async connectRequest(table: { rawTable: [] }) {
    this.context.request = this.context.tableToObject(table);
  }

  @when('Call to query {string}')
  async query(url: string) {
    this.context.response = await request(this.context.app.getHttpServer())
      .post(url)
      .send(this.context.request);
  }

  @when('Call to connect {string}')
  async connect(url: string) {
    this.context.response = await request(this.context.app.getHttpServer())
      .post(url)
      .send({ sip_k1: this.context.request.sip_k1 });
  }

  @then('the response status code should be {string}')
  async assertStatus(status: string) {
    assert.strictEqual(this.context.response.status, parseInt(status));
  }

  @then('the sip_rc should be {string}')
  async assertSipRc(sip_rc: string) {
    assert.strictEqual(this.context.response.body.sip_rc, parseInt(sip_rc));
  }

  @then('the response should contain:')
  async assertResponse(table: { rawTable: [] }) {
    const data = this.context.tableToObject(table);
    const isEqual =
      JSON.stringify(this.context.response.body) === JSON.stringify(data);
    assert.strictEqual(isEqual, true);
  }
}
