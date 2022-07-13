import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { BookDto } from './book.dto';

@Injectable()
export class BookService {
  books: string;

  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}
  getAllBooks() {
    return this.bookRepository.find();
  }

  getBookById(bookId: number) {
    return this.bookRepository.findOne({
      where: {
        id: bookId,
      },
      relations: ['publisher', 'author'],
    });
  }

  createBook(bookDto: BookDto) {
    const newBook = this.bookRepository.create(bookDto);
    return this.bookRepository.save(newBook);
  }
}
