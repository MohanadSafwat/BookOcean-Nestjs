import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { AuthorDto } from './author.dto';
import { AuthorService } from './author.service';
import { diskStorage } from 'multer';

@Controller('author')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Get()
  getAllAuthors() {
    return this.authorService.getAllAuthors();
  }

  @Get(':authorId')
  getAuthorById(@Param('authorId', ParseIntPipe) authorId: number) {
    return this.authorService.getAuthorById(authorId);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createAuthor(@Body() authorDto: AuthorDto) {
    return this.authorService.createAuthor(authorDto);
  }

  @Post('uploadPhoto')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './photos/authors',
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
    return file;
  }
}
