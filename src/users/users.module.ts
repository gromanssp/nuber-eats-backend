import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '../jwt/jwt.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
