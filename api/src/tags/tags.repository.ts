import { EntityRepository, Raw, Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';
import { FilterTagsDto } from './dto/filter-tags.dto';

@EntityRepository(Tag)
export class TagsRepository extends Repository<Tag> {
  /**
   * Repository method to get all the tags with filter options
   *
   * @param filterTagsDto
   */
  async findWithFilters(filterTagsDto: FilterTagsDto) {
    const filters = {
      titles: filterTagsDto?.titles,
    };

    return this.find({
      ...(filters.titles && {
        title: Raw((alias) => `${alias} IN (:...titles)`, {
          titles: [...filterTagsDto.titles],
        }),
      }),
    });
  }
}
