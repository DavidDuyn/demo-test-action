import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { firstValueFrom, map } from 'rxjs';
import configuration from './config/configuration';
import { SIP_ID_CONNECT, SIP_ID_QUERY } from './constants';
import { ReniecAuthenticatorResponse } from './dto/reniec-auth-response.dto';
import { ReniecQueryRequest } from './dto/reniec-query-request.dto';
import { ReniecRequest } from './dto/reniec-request.dto';
import {
  ReniecParamsResponse,
  ReniecResponse,
} from './dto/reniec-response.dto';
import {
  mapCivilStatus,
  mapPrefijoBlockChalet,
  mapPrefijoDptoPisoInterior,
  mapPrefijoUrbanizacion,
  mapPrefijoVia,
  mapSexo,
} from './enum';

@Injectable()
export class ReniecService {
  private readonly logger = new Logger(ReniecService.name);
  private headerRequest;

  constructor(
    private readonly httpService: HttpService,
    @Inject(configuration.KEY)
    private configService: ConfigType<typeof configuration>,
  ) {
    this.headerRequest = {
      ServicePoint: 'Expect100Continue = false;',
      KeepAlive: false,
      'Content-type': 'application/json',
    };
  }

  async connect(sip_k1: string): Promise<ReniecAuthenticatorResponse> {
    const url = `${this.configService.baseURL}/SendRecieve`;
    const request = this.buildAuthRequest(sip_k1);

    this.logger.debug(`Sending request ${JSON.stringify(request)} to ${url} `);

    const httpResponse = this.httpService.post<ReniecAuthenticatorResponse>(
      url,
      request,
      { headers: this.headerRequest },
    );

    return firstValueFrom(httpResponse.pipe(map((response) => response.data)));
  }

  async query(queryRequest: ReniecQueryRequest): Promise<ReniecResponse> {
    const url = `${this.configService.baseURL}/Query`;
    const request = this.buildQueryRequest(queryRequest);
    this.logger.debug(`Sending request ${JSON.stringify(request)} to ${url} `);

    const httpResponse = this.httpService.post<ReniecResponse>(url, request, {
      headers: this.headerRequest,
    });

    return firstValueFrom(
      httpResponse.pipe(
        map((response) => this.handleQueryResponse(response.data)),
      ),
    );
  }

  private buildAuthRequest(sip_k1: string): ReniecRequest {
    return {
      sip_id: SIP_ID_CONNECT,
      sip_params: {
        sip_host: this.configService.host,
        sip_port: this.configService.port,
        sip_data: {
          sip_k1: sip_k1,
        },
      },
    };
  }

  private buildQueryRequest(request: ReniecQueryRequest): ReniecRequest {
    const { sip_authenticator, sip_user, sip_document } = request;
    return {
      sip_id: SIP_ID_QUERY,
      sip_params: {
        sip_host: this.configService.host,
        sip_port: this.configService.port,
        sip_authenticator: sip_authenticator,
        sip_data: {
          sip_user: sip_user,
          sip_document: sip_document,
          sip_subQueryType: '12',
        },
      },
    };
  }

  private handleQueryResponse(response: ReniecResponse): ReniecResponse {
    if (!!response && response.sip_rc === 0) {
      response.sip_params = this.parseQueryResponse(response.sip_params);
    }
    return response;
  }

  private parseQueryResponse(
    sip_params: ReniecParamsResponse,
  ): ReniecParamsResponse {
    sip_params.civilStatus = mapCivilStatus.get(sip_params.civilStatus);
    sip_params.sexo = mapSexo.get(sip_params.sexo);
    sip_params.preDireccion = mapPrefijoVia.get(sip_params.preDireccion);
    sip_params.preBlockChalet = mapPrefijoBlockChalet.get(
      sip_params.preBlockChalet,
    );
    sip_params.preDptoPisoInterior = mapPrefijoDptoPisoInterior.get(
      sip_params.preDptoPisoInterior,
    );
    sip_params.preUrb = mapPrefijoUrbanizacion.get(sip_params.preUrb);

    return sip_params;
  }
}
