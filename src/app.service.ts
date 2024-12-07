import { Injectable } from '@nestjs/common';
import { Auth } from './auth/decorators';
import { ValidRoles } from './auth/interfaces';

@Injectable()
export class AppService {
  @Auth()
  getHello(): string {
    return 'Hello World!';
  }
}
