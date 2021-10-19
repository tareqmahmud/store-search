import {
  BadRequestException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ShopsRepository } from './shops.repository';
import { TagsRepository } from '../tags/tags.repository';
import { InjectIndex } from 'nestjs-algoliasearch';
import { Shop } from './entities/shop.entity';
import { SearchIndex } from 'algoliasearch';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class ShopsService {
  constructor(
    private tagsRepository: TagsRepository,
    private shopsRepository: ShopsRepository,
    private cloudinaryService: CloudinaryService,
    @InjectIndex(Shop)
    private readonly shopIndex: SearchIndex,
  ) {}

  async uploadImage(file: Express.Multer.File) {
    return await this.cloudinaryService.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }

  async create(createShopDto) {
    // Fetch all the tags
    const tags = await this.tagsRepository.findWithFilters({
      tags: createShopDto.tags,
    });

    // Create new shop
    const newShop = this.shopsRepository.create({
      name: createShopDto.name,
      email: createShopDto.email,
      phone: createShopDto.phone,
      address: createShopDto.address,
      image: createShopDto?.image[0]?.response?.secure_url as string,
      tags,
    });

    // Save the shop
    await this.shopsRepository.save(newShop);

    // Save to algolia
    this.shopIndex.saveObjects(
      [
        {
          ...newShop,
        },
      ],
      { autoGenerateObjectIDIfNotExist: true },
    );

    return {
      data: newShop,
    };
  }

  async findAll(query) {
    let shops = [];

    if (
      query?.enableAlgolia !== 'true' &&
      (query?.search === '' || query?.search === 'undefined' || !query?.search)
    ) {
      shops = await this.shopsRepository.find({
        relations: ['tags'],
      });
    } else if (query?.enableAlgolia === 'true') {
      let search = query?.search === 'undefined' ? '' : query?.search;
      return this.shopIndex.search(search);
    } else {
      shops = await this.shopsRepository.findWithSearch(query?.search);
    }

    return {
      data: shops,
    };
  }

  findOne(id: number) {
    return this.shopsRepository.findOne(id, { relations: ['tags'] });
  }

  async update(id: number, updateShopDto: UpdateShopDto) {
    // Fetch all the tags
    const tags = await this.tagsRepository.findWithFilters({
      tags: updateShopDto.tags,
    });

    // Find out the shop
    const shop = await this.shopsRepository.findOne(id);

    // Update the shop
    shop.name = updateShopDto.name;
    shop.email = updateShopDto.email;
    shop.phone = updateShopDto.phone;
    shop.address = updateShopDto.address;
    shop.tags = tags;

    // Save the shop
    await this.shopsRepository.save(shop);

    return {
      data: shop,
    };
  }

  remove(id: number) {
    return this.shopsRepository.delete(id);
  }
}
