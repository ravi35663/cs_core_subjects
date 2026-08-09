import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')// You can pass string into Controller Decorator
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
