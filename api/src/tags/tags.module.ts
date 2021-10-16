import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsRepository } from './tags.repository';
import { ShopsRepository } from '../shops/shops.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TagsRepository, ShopsRepository])],
  controllers: [TagsController],
  providers: [TagsService, TagsRepository],
  exports: [TagsRepository],
})
export class TagsModule {}
