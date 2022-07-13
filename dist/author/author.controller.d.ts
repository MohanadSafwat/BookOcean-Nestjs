import { AuthorDto } from './author.dto';
import { AuthorService } from './author.service';
export declare class AuthorController {
    private authorService;
    constructor(authorService: AuthorService);
    getAllAuthors(): Promise<import("../typeorm").AuthorEntity[]>;
    getAuthorById(authorId: number): Promise<import("../typeorm").AuthorEntity>;
    createAuthor(authorDto: AuthorDto): Promise<import("../typeorm").AuthorEntity>;
    upload(file: any): any;
}
