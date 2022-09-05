export enum CivilStatus {
  SOLTERO = 'SOLTERO',
  CASADO = 'CASADO',
  VIUDO = 'VIUDO',
  DIVORCIADO = 'DIVORCIADO',
}

export enum Sexo {
  MASCULINO = 'MASCULINO',
  FEMENINO = 'FEMENINO',
}

export enum PrefijoVia {
  AV = 'AV.',
  JR = 'JR.',
  CALLE = 'CALLE',
  PARQUE = 'PARQUE',
  PSJ = 'PSJ.',
  OVALO = 'OVALO',
}

export enum PrefijoBlockChalet {
  BLOCK = 'BLOCK',
  CHALET = 'CHALET',
}

export enum PrefijoDptoPisoInterior {
  DPTO = 'DPTO.',
  EDIF = 'EDIF.',
  INT = 'INT.',
  PISO = 'PISO',
}

export enum PrefijoUrbanizacion {
  URB = 'URB',
  URB_IND = 'URB.IND.',
  URB_POPULAR = 'URB.POPULAR',
  URB_RES = 'URB.RES',
  COND = 'COND.',
  RES = 'RES.',
  ASENT_H = 'ASENT.H.',
  ASOC = 'ASOC.',
  BARRIO = 'BARRIO',
  COOP = 'COOP.',
  U_VECINAL = 'U.VECINAL',
  AGR = 'AGR.',
  AGRP = 'AGRP.',
  ALAM = 'ALAM.',
  ALMTE = 'ALMTE.',
  AMPLC = 'AMPLC.',
  ANEXO = 'ANEXO',
  ARQ = 'ARQ.',
  BALN = 'BALN.',
  CAMP_MINERO = 'CAMP.MINERO',
  CARRETERA = 'CARRETERA',
  CASERIO = 'CASERIO',
  CIUDAD = 'CIUDAD',
  CMDTE = 'CMDTE.',
  COMITE = 'COMITE',
  COMUNIDAD_CAMPESINA = 'COMUNIDAD.CAMPESINA',
  CONJ_HAB = 'CONJ.HAB.',
  CONJ_RES = 'CONJ.RES.',
  CTRLMTE = 'CTRLMTE.',
  CRNL = 'CRNL.',
  CUADRA = 'CUADRA',
  FUNDO = 'FUNDO',
  GALERIA = 'GALERIA',
  GRAL = 'GRAL.',
  GRUPO = 'GRUPO',
  HACIENDA = 'HACIENDA',
  ISLA = 'ISLA',
  MALECON = 'MALECON',
  MRCAL = 'MRCAL.',
  PASEO = 'PASEO',
  PLAZA = 'PLAZA',
  PLAZUELA = 'PLAZUELA',
  ONE_ER = '1ER.',
  PROLONG = 'PROLONG.',
  PUEBLO = 'PUEBLO',
  PUENTE = 'PUENTE',
  SECTOR = 'SECTOR',
  TWO_DO = '2DO.',
  TNTE = 'TNTE',
  U_AGROP = 'U.AGROP.',
  VEREDA = 'VEREDA',
  VILLA = 'VILLA',
  THREE_ER = '3ER.',
  ZONA = 'ZONA',
  KM = 'KM.',
  C_POBLADO = 'C.POBLADO',
  COMUNID_NATIVA = 'COMUNID.NATIVA',
}

export const mapPrefijoBlockChalet = new Map<string, PrefijoBlockChalet>([
  ['01', PrefijoBlockChalet.BLOCK],
  ['02', PrefijoBlockChalet.CHALET],
]);

export const mapSexo = new Map<string, Sexo>([
  ['1', Sexo.MASCULINO],
  ['2', Sexo.FEMENINO],
]);

export const mapCivilStatus = new Map<string, CivilStatus>([
  ['1', CivilStatus.SOLTERO],
  ['2', CivilStatus.CASADO],
  ['3', CivilStatus.VIUDO],
  ['4', CivilStatus.DIVORCIADO],
]);

export const mapPrefijoVia = new Map<string, PrefijoVia>([
  ['01', PrefijoVia.AV],
  ['02', PrefijoVia.JR],
  ['03', PrefijoVia.CALLE],
  ['04', PrefijoVia.PARQUE],
  ['05', PrefijoVia.PSJ],
  ['06', PrefijoVia.OVALO],
]);

export const mapPrefijoDptoPisoInterior = new Map<
  string,
  PrefijoDptoPisoInterior
>([
  ['01', PrefijoDptoPisoInterior.DPTO],
  ['02', PrefijoDptoPisoInterior.EDIF],
  ['03', PrefijoDptoPisoInterior.INT],
  ['04', PrefijoDptoPisoInterior.PISO],
]);

export const mapPrefijoUrbanizacion = new Map<string, PrefijoUrbanizacion>([
  ['01', PrefijoUrbanizacion.URB],
  ['02', PrefijoUrbanizacion.URB_IND],
  ['03', PrefijoUrbanizacion.URB_POPULAR],
  ['04', PrefijoUrbanizacion.URB_RES],
  ['05', PrefijoUrbanizacion.COND],
  ['06', PrefijoUrbanizacion.RES],
  ['07', PrefijoUrbanizacion.ASENT_H],
  ['08', PrefijoUrbanizacion.ASOC],
  ['09', PrefijoUrbanizacion.BARRIO],
  ['10', PrefijoUrbanizacion.COOP],
  ['11', PrefijoUrbanizacion.U_VECINAL],
  ['12', PrefijoUrbanizacion.AGR],
  ['13', PrefijoUrbanizacion.AGRP],
  ['14', PrefijoUrbanizacion.ALAM],
  ['15', PrefijoUrbanizacion.ALMTE],
  ['16', PrefijoUrbanizacion.AMPLC],
  ['17', PrefijoUrbanizacion.ANEXO],
  ['18', PrefijoUrbanizacion.ARQ],
  ['19', PrefijoUrbanizacion.BALN],
  ['20', PrefijoUrbanizacion.CAMP_MINERO],
  ['21', PrefijoUrbanizacion.CARRETERA],
  ['22', PrefijoUrbanizacion.CASERIO],
  ['23', PrefijoUrbanizacion.CIUDAD],
  ['24', PrefijoUrbanizacion.CMDTE],
  ['25', PrefijoUrbanizacion.COMITE],
  ['26', PrefijoUrbanizacion.COMUNIDAD_CAMPESINA],
  ['27', PrefijoUrbanizacion.CONJ_HAB],
  ['28', PrefijoUrbanizacion.CONJ_RES],
  ['29', PrefijoUrbanizacion.CTRLMTE],
  ['30', PrefijoUrbanizacion.CRNL],
  ['31', PrefijoUrbanizacion.CUADRA],
  ['32', PrefijoUrbanizacion.FUNDO],
  ['33', PrefijoUrbanizacion.GALERIA],
  ['34', PrefijoUrbanizacion.GRAL],
  ['35', PrefijoUrbanizacion.GRUPO],
  ['36', PrefijoUrbanizacion.HACIENDA],
  ['37', PrefijoUrbanizacion.ISLA],
  ['38', PrefijoUrbanizacion.MALECON],
  ['39', PrefijoUrbanizacion.MRCAL],
  ['40', PrefijoUrbanizacion.PASEO],
  ['41', PrefijoUrbanizacion.PLAZA],
  ['42', PrefijoUrbanizacion.PLAZUELA],
  ['43', PrefijoUrbanizacion.ONE_ER],
  ['44', PrefijoUrbanizacion.PROLONG],
  ['45', PrefijoUrbanizacion.PUEBLO],
  ['46', PrefijoUrbanizacion.PUENTE],
  ['47', PrefijoUrbanizacion.SECTOR],
  ['48', PrefijoUrbanizacion.TWO_DO],
  ['49', PrefijoUrbanizacion.TNTE],
  ['50', PrefijoUrbanizacion.U_AGROP],
  ['51', PrefijoUrbanizacion.VEREDA],
  ['52', PrefijoUrbanizacion.VILLA],
  ['53', PrefijoUrbanizacion.THREE_ER],
  ['54', PrefijoUrbanizacion.ZONA],
  ['55', PrefijoUrbanizacion.KM],
  ['56', PrefijoUrbanizacion.C_POBLADO],
  ['57', PrefijoUrbanizacion.COMUNID_NATIVA],
]);
