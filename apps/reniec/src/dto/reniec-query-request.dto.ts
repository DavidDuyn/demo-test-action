import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class ReniecQueryRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  sip_authenticator: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  sip_user: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  sip_document: string;
}
