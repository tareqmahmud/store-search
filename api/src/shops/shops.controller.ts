import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
  UploadedFile,
  UseInterceptors,
  UseGuards,
  Req
} from '@nestjs/common';
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('shops')
export class ShopsController {
  constructor(private readonly shopsService: ShopsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createShopDto: CreateShopDto, @Req() req) {
    return this.shopsService.create(createShopDto, req.user);
  }

  @Get()
  findAll(@Query() query) {
    return this.shopsService.findAll(query);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.shopsService.uploadImage(file);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const shop = await this.shopsService.findOne(+id);

    if (!shop) {
      throw new NotFoundException('No shop is found!');
    }

    return shop;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
    return this.shopsService.update(+id, updateShopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shopsService.remove(+id);
  }
}
