import { EntityRepository, Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';

@EntityRepository(Shop)
export class ShopsRepository extends Repository<Shop> {}
