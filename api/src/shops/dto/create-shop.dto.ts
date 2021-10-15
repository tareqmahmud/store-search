import { IsArray, IsEmail, IsString, MaxLength } from 'class-validator';

export class CreateShopDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  address: string;

  @IsArray()
  tags: string[];
}
