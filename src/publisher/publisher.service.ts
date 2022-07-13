import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublisherEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { PublisherDto } from './publisher.dto';

@Injectable()
export class PublisherService {
  constructor(
    @InjectRepository(PublisherEntity)
    private readonly publisherRpository: Repository<PublisherEntity>,
  ) {}

  getAllPublishers() {
    return this.publisherRpository.find();
  }

  getPublisherById(publisherId: number) {
    return this.publisherRpository.findOne({
      where: { id: publisherId },
      relations: ['books'],
    });
  }

  createPublisher(publisherDto: PublisherDto) {
    const newPublisher = this.publisherRpository.create(publisherDto);
    return this.publisherRpository.save(newPublisher);
  }
}
