import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/typeorm';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
