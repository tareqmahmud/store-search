import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ShopsRepository } from './shops.repository';
import { TagsRepository } from '../tags/tags.repository';

@Injectable()
export class ShopsService {
  constructor(
    private tagsRepository: TagsRepository,
    private shopsRepository: ShopsRepository,
  ) {}

  async create(createShopDto: CreateShopDto) {
    // Fetch all the tags
    const tags = await this.tagsRepository.findWithFilters({
      titles: createShopDto.tags,
    });

    // Create new shop
    const newShop = this.shopsRepository.create({
      name: createShopDto.name,
      email: createShopDto.email,
      phone: createShopDto.phone,
      address: createShopDto.address,
      tags,
    });

    // Save the shop
    await this.shopsRepository.save(newShop);

    return {
      data: newShop,
    };
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
