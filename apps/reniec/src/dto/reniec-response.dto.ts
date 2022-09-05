export class ReniecResponse {
  sip_des: string;
  sip_params: ReniecParamsResponse;
  sip_rc: number;
}

export class ReniecParamsResponse {
  apellidoCasada: string;
  apellidoMaterno: string;
  apellidoPaterno: string;
  blkDireccion: string;
  civilStatus: string;
  departamentoNacimiento: string;
  direccion: string;
  distDomicilio: string;
  distritoNacimiento: string;
  dni: string;
  dptoDomicilio: string;
  dver: string;
  etapaDireccion: string;
  fechaCaducidad: Date;
  fechaExpedicion: Date;
  fechaInscripcion: Date;
  fechaNacimiento: Date;
  intDireccion: string;
  lotDireccion: string;
  mznDireccion: string;
  nombres: string;
  numDireccion: string;
  paisNacimiento: string;
  picture: string;
  preBlockChalet: string;
  preDireccion: string;
  preDptoPisoInterior: string;
  preUrb: string;
  provDomicilio: string;
  provinciaNacimiento: string;
  sexo: string;
  urbDireccion: string;
}
