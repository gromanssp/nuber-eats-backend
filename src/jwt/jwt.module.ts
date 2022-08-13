import { DynamicModule, Global, Module } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { JwtModuleOptions } from '../../dist/jwt/interfaces/jwt-module.options.interface';

@Module({})
@Global()
export class JwtModule {
  static forRoot(options: JwtModuleOptions): DynamicModule {
    return {
      module: JwtModule,
      exports: [JwtService],
      providers: [
        {
          provide: 'BANANA',
          useValue: options,
        },
        JwtService,
      ],
    };
  }
}
