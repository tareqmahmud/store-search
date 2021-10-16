import { IsArray, IsOptional } from 'class-validator';

export class FilterTagsDto {
  @IsArray()
  @IsOptional()
  titles: string[];
}
