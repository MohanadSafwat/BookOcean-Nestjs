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
      host: 'ec2-44-206-89-185.compute-1.amazonaws.com',
      port: 5432,
      username: 'uobmcffwrltamp',
      password: '1d5582baaeedf172d4d0bfab9efa0d5cc2e3dd5a9e507326a196c40a477da319',
      database: 'd8di9og098jp0i',
      entities: entities,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
