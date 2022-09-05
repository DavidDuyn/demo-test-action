export class ReniecRequest {
  sip_id: number;
  sip_params: ReniecParamsRequest;
}

export class ReniecParamsRequest {
  sip_host: string;
  sip_port: number;
  sip_authenticator?: string;
  sip_data: ReniecDataQueryRequest | ReniecDataConnectRequest;
}

export class ReniecDataQueryRequest {
  sip_user: string;
  sip_document: string;
  sip_subQueryType: string;
}

export class ReniecDataConnectRequest {
  sip_k1: string;
}
