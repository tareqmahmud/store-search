import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ShopsRepository } from "./shops.repository";

@Injectable()
export class ShopsService {
  constructor(
    private shopsRepository: ShopsRepository
  ) {}

  async create(createShopDto: CreateShopDto) {
    // Find the tags first
    // const shop = this.tagsRepository.find({ title: createShopDto.tags[0] });
    //
    // await this.shopsRepository.save(shop);

    return "Ok";
  }

  async findAll() {
    const shops = await this.shopsRepository.find();

    return {
      data: shops,
    };
  }

  findOne(id: number) {
    return this.shopsRepository.findOne(id);
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    // return this.shopsRepository.update(id, updateShopDto);
  }

  remove(id: number) {
    return this.shopsRepository.delete(id);
  }
}
