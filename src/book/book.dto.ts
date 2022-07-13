import { IsNotEmpty, IsUrl } from 'class-validator';

export class BookDto {
  @IsNotEmpty()
  isbn: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsUrl()
  photoUrl: string;

  @IsNotEmpty()
  authorId: number;

  @IsNotEmpty()
  publisherId: number;
}
