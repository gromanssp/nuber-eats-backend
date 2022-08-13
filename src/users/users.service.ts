import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-acount.dto';
import { LoginInput } from './dtos/login.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<{ ok: boolean; error?: string }> {
    try {
      const exits = await this.users.findOne({
        select: {
          email: true,
        },
        where: {
          email,
        },
      });
      if (exits) {
        return { ok: false, error: 'There is a user with this email' };
      }
      await this.users.save(this.users.create({ email, password, role }));
      return { ok: true };
    } catch (e) {
      console.error(e);
      return { ok: false, error: 'Couldn´t create account' };
    }
  }

  async login({
    email,
    password,
  }: LoginInput): Promise<{ ok: boolean; error?: string; token?: string }> {
    try {
      const user = await this.users.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return {
          ok: false,
          error: 'User not found',
        };
      }
      const passwordCheck = await user.checkPassword(password);
      if (!passwordCheck) {
        return {
            ok: false,
            error: 'Wrong Password',
        }
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token: 'lalalalala',
      }
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
