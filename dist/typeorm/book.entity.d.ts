import { AuthorEntity } from './author.entity';
import { PublisherEntity } from './publisher.entity';
export declare class BookEntity {
    id: number;
    isbn: number;
    name: string;
    year: number;
    category: string;
    photoUrl: string;
    authorId: number;
    author: AuthorEntity;
    publisherId: number;
    publisher: PublisherEntity;
}
