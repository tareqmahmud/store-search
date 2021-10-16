import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopsRepository } from './shops.repository';
import { TagsRepository } from '../tags/tags.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ShopsRepository, TagsRepository])],
  controllers: [ShopsController],
  providers: [ShopsService, ShopsRepository],
  exports: [ShopsRepository],
})
export class ShopsModule {}
