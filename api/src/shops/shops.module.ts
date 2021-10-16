import { Module } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shop } from './entities/shop.entity';
import { Tag } from "../tags/entities/tag.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Shop, Tag])],
  controllers: [ShopsController],
  providers: [ShopsService],
  exports: [TypeOrmModule]
})
export class ShopsModule {}
