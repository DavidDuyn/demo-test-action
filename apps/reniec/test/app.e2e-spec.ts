import { INestApplication, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ReniecModule } from '../src/reniec.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let configuration: ConfigService;
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ReniecModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    configuration = moduleFixture.get<ConfigService>(ConfigService);
  });

  it('/connect "Not Authorized" (POST)', () => {
    return request(app.getHttpServer())
      .post('/reniec/connect')
      .send({ sip_k1: '123' })
      .expect({
        sip_error: 'Not Authorized',
        sip_id: 50,
        sip_params: null,
        sip_rc: 401,
      });
  });

  it('/connect "Bad Request" (POST)', () => {
    const response = {
      statusCode: 400,
      message: ['sip_k1 should not be empty'],
      error: 'Bad Request',
    };
    return request(app.getHttpServer())
      .post('/reniec/connect')
      .send({ sip_k1: '' })
      .expect(400)
      .expect(response);
  });

  it('/connect "Authorized" (POST)', () => {
    return request(app.getHttpServer())
      .post('/reniec/connect')
      .send({
        sip_k1: configuration.get<string>('SIP_K1'),
      })
      .expect(201)
      .expect((response: request.Response) => {
        const { sip_rc } = response.body;
        expect(sip_rc).toEqual(0);
      });
  });

  it('/query "sip_user Bad Request" (POST)', () => {
    const response = {
      statusCode: 400,
      message: ['sip_user should not be empty'],
      error: 'Bad Request',
    };
    return request(app.getHttpServer())
      .post('/reniec/query')
      .send({ sip_user: '', sip_authenticator: '123', sip_document: '234234' })
      .expect(400)
      .expect(response);
  });

  it('/query "sip_document Bad Request" (POST)', () => {
    const response = {
      statusCode: 400,
      message: ['sip_document should not be empty'],
      error: 'Bad Request',
    };
    return request(app.getHttpServer())
      .post('/reniec/query')
      .send({ sip_user: '123', sip_authenticator: '123', sip_document: '' })
      .expect(400)
      .expect(response);
  });

  it('/query "sip_authenticator Bad Request" (POST)', () => {
    const response = {
      statusCode: 400,
      message: ['sip_authenticator should not be empty'],
      error: 'Bad Request',
    };
    return request(app.getHttpServer())
      .post('/reniec/query')
      .send({ sip_user: '123', sip_authenticator: '', sip_document: '123' })
      .expect(400)
      .expect(response);
  });

  it('/query (POST)', () => {
    const sip_k1 = configuration.get<string>('SIP_k1');
    const sip_user = configuration.get<string>('SIP_USER');
    const sip_document = configuration.get<string>('SIP_DOCUMENT');

    return request(app.getHttpServer())
      .post('/reniec/connect')
      .send({
        sip_k1: sip_k1,
      })
      .expect(201)
      .expect((response: request.Response) => {
        const { sip_authenticator } = response.body.sip_params;
        request(app.getHttpServer())
          .post('/reniec/query')
          .send({
            sip_user: sip_user,
            sip_authenticator: sip_authenticator,
            sip_document: sip_document,
          })
          .expect(201)
          .expect((response: request.Response) => {
            const { sip_rc } = response.body;
            expect(sip_rc).toEqual(0);
          });
      });
  });
});
