import { EntityRepository, Like, Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';

@EntityRepository(Shop)
export class ShopsRepository extends Repository<Shop> {
  /**
   *
   * @param search
   */
  async findWithSearch(search: string) {
    const shops = await this.createQueryBuilder('shops')
      .innerJoinAndSelect('shops.tags', 'tags')
      .where('tags.title LIKE :title', { title: `%${search}%` })
      .getMany();

    return shops ? shops : [];
  }
}
