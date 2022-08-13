import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from '../../dist/jwt/interfaces/jwt-module-options.interface';

@Injectable()
export class JwtService {
  constructor(@Inject('BANANA') private readonly options: JwtModuleOptions) {
    console.log(options);
  }
  hello() {
    console.log('Hello');
  }
}
