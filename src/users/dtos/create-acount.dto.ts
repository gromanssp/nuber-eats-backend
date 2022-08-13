import {
  Field,
  InputType,
  ObjectType,
  PickType,
  OmitType,
} from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { MutationOutput } from '../../common/dtos/output.dto';

@InputType()
export class CreateAccountInput extends PickType(
  User,
  ['email', 'password', 'role'],
  InputType,
) {}

@ObjectType()
export class CreateAccountOutput extends MutationOutput {
  
}
