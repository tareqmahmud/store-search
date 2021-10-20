import {
  IsArray,
  IsEmail,
  IsString, IsUrl
} from "class-validator";

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

  @IsUrl()
  url: string;

  @IsArray()
  image: any[]

  @IsArray()
  tags: string[];
}
