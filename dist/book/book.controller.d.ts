import { BookDto } from './book.dto';
import { BookService } from './book.service';
export declare class BookController {
    private bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<import("../typeorm").BookEntity[]>;
    getBookById(bookId: number): Promise<import("../typeorm").BookEntity>;
    createBook(bookDto: BookDto): Promise<import("../typeorm").BookEntity>;
    upload(file: any): any;
}
