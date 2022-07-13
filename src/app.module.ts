import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { AuthorModule } from './author/author.module';
import { PublisherModule } from './publisher/publisher.module';

@Module({
  imports: [
    BookModule,
    AuthorModule,
    PublisherModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'techbricksTask',
      entities: entities,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
