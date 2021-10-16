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
    const filterOptions = {
      titles: filterTagsDto?.titles,
    };

    return await this.find({
      ...(filterTagsDto.titles && {
        title: Raw((alias) => `${alias} IN (:...titles)`, {
          titles: filterTagsDto.titles,
        }),
      }),
    });
  }
}
