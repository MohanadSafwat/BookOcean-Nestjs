import { BookEntity } from './book.entity';
export declare class AuthorEntity {
    id: number;
    name: string;
    surname: string;
    birthdate: string;
    photoUrl: string;
    books: BookEntity;
}
