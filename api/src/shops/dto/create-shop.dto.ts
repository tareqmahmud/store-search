import {
  IsArray,
  IsEmail,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';
import { Multer } from "multer";

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
  image: any[]

  @IsArray()
  tags: string[];
}
