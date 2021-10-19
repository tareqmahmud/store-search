import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsRepository } from './shops.repository';
import { TagsRepository } from '../tags/tags.repository';
import { AlgoliaModule } from 'nestjs-algoliasearch';
import { Shop } from './entities/shop.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShopsRepository, TagsRepository]),
    AlgoliaModule.forFeature([
      {
        name: Shop,
        options: {
          searchableAttributes: ['tags'],
        },
      },
    ]),
  ],
  controllers: [ShopsController],
  providers: [ShopsService],
  exports: [TypeOrmModule],
})
export class ShopsModule {}
