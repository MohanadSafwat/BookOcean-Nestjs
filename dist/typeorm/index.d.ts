import { AuthorEntity } from './author.entity';
import { BookEntity } from './book.entity';
import { PublisherEntity } from './publisher.entity';
declare const entities: (typeof PublisherEntity | typeof BookEntity)[];
export { AuthorEntity, PublisherEntity, BookEntity };
export default entities;
