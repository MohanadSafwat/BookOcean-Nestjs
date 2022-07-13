import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity()
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  surname: string;

  @Column({
    nullable: false,
    default: '',
  })
  birthdate: string;

  @Column({
    nullable: false,
    default: '',
    name: 'photo_url',
  })
  photoUrl: string;

  @OneToMany(() => BookEntity, (book) => book.author)
  books: BookEntity;
}
