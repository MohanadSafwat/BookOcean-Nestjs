import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { AuthorDto } from './author.dto';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  getAuthorById(authorId: number) {
    return this.authorRepository.findOne({
      where: {
        id: authorId,
      },
      relations: ['books'],
    });
  }

  getAllAuthors() {
    return this.authorRepository.find();
  }

  createAuthor(authorDto: AuthorDto) {
    const newAuthor = this.authorRepository.create(authorDto);
    return this.authorRepository.save(newAuthor);
  }
}
