import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class ReniecConnectRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  sip_k1: string;
}
