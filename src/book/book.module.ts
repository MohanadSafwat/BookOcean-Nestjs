import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity, BookEntity, PublisherEntity } from 'src/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookEntity, AuthorEntity, PublisherEntity]),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
