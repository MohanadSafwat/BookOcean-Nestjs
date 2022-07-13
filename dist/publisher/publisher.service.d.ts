import { PublisherEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { PublisherDto } from './publisher.dto';
export declare class PublisherService {
    private readonly publisherRpository;
    constructor(publisherRpository: Repository<PublisherEntity>);
    getAllPublishers(): Promise<PublisherEntity[]>;
    getPublisherById(publisherId: number): Promise<PublisherEntity>;
    createPublisher(publisherDto: PublisherDto): Promise<PublisherEntity>;
}
