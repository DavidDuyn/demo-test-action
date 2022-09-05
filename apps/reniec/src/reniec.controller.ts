import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ReniecAuthenticatorResponse } from './dto/reniec-auth-response.dto';
import { ReniecConnectRequest } from './dto/reniec-connect-request.dto';
import { ReniecQueryRequest } from './dto/reniec-query-request.dto';
import { ReniecResponse } from './dto/reniec-response.dto';
import { ReniecService } from './reniec.service';

@ApiTags('reniec')
@Controller('reniec')
export class ReniecController {
  constructor(private readonly reniecService: ReniecService) {}

  @Post('/connect')
  @ApiBody({ type: ReniecConnectRequest })
  async connect(
    @Body() request: ReniecConnectRequest,
  ): Promise<ReniecAuthenticatorResponse> {
    return this.reniecService.connect(request.sip_k1);
  }

  @Post('/query')
  @ApiBody({ type: ReniecQueryRequest })
  async query(@Body() request: ReniecQueryRequest): Promise<ReniecResponse> {
    return this.reniecService.query(request);
  }
}
