import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';

@Injectable()
export class ShopsService {
  constructor(
    @InjectRepository(Shop)
    private shopsRepository: Repository<Shop>,
  ) {}

  async create(createShopDto: CreateShopDto) {
    const shop = this.shopsRepository.create(createShopDto);

    await this.shopsRepository.save(shop);

    return shop;
  }

  async findAll() {
    const shops = await this.shopsRepository.find();

    return {
      data: shops
    }
  }

  findOne(id: number) {
    return this.shopsRepository.findOne(id);
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    return this.shopsRepository.update(id, updateShopDto);
  }

  remove(id: number) {
    return this.shopsRepository.delete(id);
  }
}
