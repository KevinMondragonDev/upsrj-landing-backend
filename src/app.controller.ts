import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Auth } from './auth/decorators';
import { ValidRoles } from './auth/interfaces';
import { ApiResponse } from '@nestjs/swagger';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({ status: 201, description: 'Successfully'})
  @ApiResponse({ status: 400, description: 'Bad request due to invalid input' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related issues' })
  @Get()
  @Auth(ValidRoles.user)
  getHello(): string {
    return this.appService.getHello();
  }
}
