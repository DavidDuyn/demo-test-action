import { HttpModule, HttpService } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import configuration from './config/configuration';
import { ReniecController } from './reniec.controller';
import { ReniecService } from './reniec.service';

describe('ReniecService', () => {
  let reniecService: ReniecService;
  const httpServiceMock = { post: jest.fn() };
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [configuration],
        }),
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
      controllers: [ReniecController],
      providers: [ReniecService],
    })
      .overrideProvider(HttpService)
      .useValue(httpServiceMock)
      .compile();

    reniecService = app.get<ReniecService>(ReniecService);
  });

  describe('root', () => {
    it('should return "No Authorized"', async () => {
      jest.spyOn(httpServiceMock, 'post').mockReturnValue(
        of({
          data: {
            sip_error: 'Not Authorized',
            sip_id: 50,
            sip_params: null,
            sip_rc: 401,
          },
        }),
      );
      const response = await reniecService.connect('1234');
      expect(response.sip_rc).toBe(401);
    });
  });

  it('should return "Invalid authenticator', async () => {
    jest.spyOn(httpServiceMock, 'post').mockReturnValue(
      of({
        data: {
          sip_des: 'Invalid authenticator',
          sip_params: null,
          sip_rc: -119,
        },
      }),
    );
    const response = await reniecService.query({
      sip_authenticator: '123',
      sip_document: '123',
      sip_user: '123',
    });
    expect(response.sip_rc).toBe(-119);
  });

  it('should return object authenticator', async () => {
    jest.spyOn(httpServiceMock, 'post').mockReturnValue(
      of({
        data: {
          sip_error: 'Ok',
          sip_id: 50,
          sip_params: {
            sip_authenticator: '159914705............',
            sip_tpk: '',
          },
          sip_rc: 0,
        },
      }),
    );
    const response = await reniecService.connect('999');
    expect(response.sip_rc).toBe(0);
    expect(response.sip_params).toHaveProperty('sip_authenticator');
  });

  it('method query should return sip_rc equal 0', async () => {
    jest.spyOn(httpServiceMock, 'post').mockReturnValue(
      of({
        data: {
          sip_des: 'Ok',
          sip_params: {
            apellidoCasada: '',
            apellidoMaterno: 'SANCHEZ',
            apellidoPaterno: 'RIVADENEYRA',
            blkDireccion: '',
            civilStatus: '2',
            departamentoNacimiento: 'LIMA',
            direccion: 'SAN MARTIN',
            distDomicilio: 'MIRAFLORES',
            distritoNacimiento: 'MIRAFLORES',
            dni: '06654321',
            dptoDomicilio: 'LIMA',
            dver: '8',
            etapaDireccion: '',
            fechaCaducidad: '20211003',
            fechaExpedicion: '20131003',
            fechaInscripcion: '19990616',
            fechaNacimiento: '19740218',
            intDireccion: '192',
            lotDireccion: '',
            mznDireccion: '',
            nombres: 'BRUNO RAFAEL',
            numDireccion: '123',
            paisNacimiento: 'PERU',
            picture: '/9j/4AAQSkZJRgABAgAAAQABAAD.........A/9k=',
            preBlockChalet: '',
            preDireccion: '03',
            preDptoPisoInterior: '01',
            preUrb: '',
            provDomicilio: 'LIMA',
            provinciaNacimiento: 'LIMA',
            sexo: '1',
            urbDireccion: '',
          },
          sip_rc: 0,
        },
      }),
    );
    const response = await reniecService.query({
      sip_authenticator: '159914705............',
      sip_user: '123user',
      sip_document: '06654321',
    });
    expect(response.sip_rc).toEqual(0);
  });
});
