export class ReniecAuthenticatorResponse {
  sip_error: string;
  sip_id: number;
  sip_params: SipParamsAuthenticatorResponse;
  sip_rc: number;
}

export class SipParamsAuthenticatorResponse {
  sip_authenticator: string;
  sip_tpk: string;
}
