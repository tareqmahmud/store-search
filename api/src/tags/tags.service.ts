import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Tag } from './entities/tag.entity';
import { Raw } from 'typeorm';
import { FilterTagsDto } from './dto/filter-tags.dto';
import { TagsRepository } from './tags.repository';

@Injectable()
export class TagsService {
  constructor(private tagsRepository: TagsRepository) {}

  async create(createTagDto: CreateTagDto) {
    const tag = this.tagsRepository.create({
      title: createTagDto.title,
    });

    await this.tagsRepository.save(tag);

    return {
      data: tag,
    };
  }

  async findAll(filterTagsDto: FilterTagsDto) {
    const tags = await this.tagsRepository.findWithFilters(filterTagsDto);

    return {
      data: tags,
    };
  }

  findOne(id: number) {
    const tag = this.tagsRepository.findOne(id);

    if (!tag) {
      throw new NotFoundError('No tag has been found');
    }

    return tag;
  }

  update(id: number, updateTagDto: UpdateTagDto) {
    return this.tagsRepository.update(id, updateTagDto);
  }

  remove(id: number) {
    return this.tagsRepository.delete(id);
  }
}
