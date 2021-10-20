import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Tag } from '../../tags/entities/tag.entity';
import { JoinTable } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('shops')
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  url: string;

  @Column({ nullable: true })
  image: string;

  // @ManyToOne(() => User, (user) => user.shops)
  // user: User;

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'shops_tags',
    joinColumn: {
      name: 'shops',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tags',
      referencedColumnName: 'id',
    },
  })
  tags: Tag[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
