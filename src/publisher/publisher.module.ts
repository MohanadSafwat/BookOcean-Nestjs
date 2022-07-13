import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from 'src/typeorm';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
