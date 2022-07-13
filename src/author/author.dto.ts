import { IsNotEmpty, IsUrl } from 'class-validator';

export class AuthorDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  surname: string;

  @IsNotEmpty()
  birthdate: string;

  @IsNotEmpty()
  @IsUrl()
  photoUrl: string;
}
