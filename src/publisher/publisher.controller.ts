import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PublisherDto } from './publisher.dto';
import { PublisherService } from './publisher.service';

@Controller('publisher')
export class PublisherController {
  constructor(private publisherService: PublisherService) {}
  @Get()
  getAllPublishers() {
    return this.publisherService.getAllPublishers();
  }

  @Get(':publisherId')
  getPublisherById(@Param('publisherId', ParseIntPipe) publisherId: number) {
    return this.publisherService.getPublisherById(publisherId);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createPublisher(@Body() publisherDto: PublisherDto) {
    return this.publisherService.createPublisher(publisherDto);
  }
}
