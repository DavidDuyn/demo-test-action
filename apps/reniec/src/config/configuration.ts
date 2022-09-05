import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 443,
  baseURL: process.env.URL_BASE || 'https://apiid.appsconfirma.com',
  host: process.env.HOST || 'apiid.appsconfirma.com',
  sip_k1: process.env.SIP_K1,
  sip_user: process.env.SIP_USER,
  sip_document: process.env.SIP_DOCUMENT,
}));
