import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BookDto } from './book.dto';
import { BookService } from './book.service';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBooks() {
    return this.bookService.getAllBooks();
  }

  @Get(':bookId')
  getBookById(@Param('bookId', ParseIntPipe) bookId: number) {
    return this.bookService.getBookById(bookId);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createBook(@Body() bookDto: BookDto) {
    return this.bookService.createBook(bookDto);
  }

  @Post('uploadPhoto')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './photos/books',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  upload(@UploadedFile() file) {
    return file.path;
  }
}
