import { AuthorEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { AuthorDto } from './author.dto';
export declare class AuthorService {
    private readonly authorRepository;
    constructor(authorRepository: Repository<AuthorEntity>);
    getAuthorById(authorId: number): Promise<AuthorEntity>;
    getAllAuthors(): Promise<AuthorEntity[]>;
    createAuthor(authorDto: AuthorDto): Promise<AuthorEntity>;
}
