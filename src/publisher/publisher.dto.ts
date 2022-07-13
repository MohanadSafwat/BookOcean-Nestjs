import { IsNotEmpty } from 'class-validator';

export class PublisherDto {
  @IsNotEmpty()
  name: string;
}
