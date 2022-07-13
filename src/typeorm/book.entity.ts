import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuthorEntity } from './author.entity';
import { PublisherEntity } from './publisher.entity';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  isbn: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
  })
  year: number;

  @Column({
    nullable: false,
    default: '',
  })
  category: string;

  @Column({
    nullable: false,
    default: '',
    name: 'photo_url',
  })
  photoUrl: string;

  @Column({
    name: 'author_id',
  })
  authorId: number;
  @ManyToOne(() => AuthorEntity, (author) => author.books, { eager: true })
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity;

  @Column({
    name: 'publisher_id',
  })
  publisherId: number;
  @ManyToOne(() => PublisherEntity, (publisher) => publisher.books, {
    eager: true,
  })
  @JoinColumn({ name: 'publisher_id' })
  publisher: PublisherEntity;
}
