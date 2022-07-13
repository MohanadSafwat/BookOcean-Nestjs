import { PublisherDto } from './publisher.dto';
import { PublisherService } from './publisher.service';
export declare class PublisherController {
    private publisherService;
    constructor(publisherService: PublisherService);
    getAllPublishers(): Promise<import("../typeorm").PublisherEntity[]>;
    getPublisherById(publisherId: number): Promise<import("../typeorm").PublisherEntity>;
    createPublisher(publisherDto: PublisherDto): Promise<import("../typeorm").PublisherEntity>;
}
