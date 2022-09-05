import { ReniecQueryRequest } from 'src/dto/reniec-query-request.dto';

const queryResultsMock = {
  resultUnauthorized: {
    sip_des: 'Invalid authenticator',
    sip_params: null,
    sip_rc: -119,
  },
  resultDocumentInvalid: {
    sip_des: 'Document provided is invalid',
    sip_params: {
      sip_authenticator: null,
      sip_host: null,
      sip_port: null,
    },
    sip_rc: 5114,
  },
  resultUserInvalid: {
    sip_des: 'Invalid MQ response',
    sip_params: {
      sip_authenticator: null,
      sip_host: null,
      sip_port: null,
    },
    sip_rc: -120,
  },
  resultQuery: {
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
};

const connectResultMock = {
  resultUnauthorized: {
    sip_error: 'Not Authorized',
    sip_id: 50,
    sip_params: null,
    sip_rc: 401,
  },

  resultAuthorized: {
    sip_error: 'Ok',
    sip_id: 50,
    sip_params: {
      sip_authenticator: '159914705............',
      sip_tpk: '',
    },
    sip_rc: 0,
  },
};

export const mockReniecService = {
  query: (request: ReniecQueryRequest) => {
    if (request.sip_authenticator === '123')
      return Promise.resolve(queryResultsMock.resultUnauthorized);

    if (request.sip_document === '999')
      return Promise.resolve(queryResultsMock.resultDocumentInvalid);

    if (request.sip_user === '888')
      return Promise.resolve(queryResultsMock.resultUserInvalid);

    return Promise.resolve(queryResultsMock.resultQuery);
  },
  connect: (sip_k1) => {
    if (sip_k1 === '123')
      return Promise.resolve(connectResultMock.resultUnauthorized);
    else return Promise.resolve(connectResultMock.resultAuthorized);
  },
};
