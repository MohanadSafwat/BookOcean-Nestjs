import { BookEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { BookDto } from './book.dto';
export declare class BookService {
    private readonly bookRepository;
    books: string;
    constructor(bookRepository: Repository<BookEntity>);
    getAllBooks(): Promise<BookEntity[]>;
    getBookById(bookId: number): Promise<BookEntity>;
    createBook(bookDto: BookDto): Promise<BookEntity>;
}
