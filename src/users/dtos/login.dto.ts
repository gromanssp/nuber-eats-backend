import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { MutationOutput } from '../../common/dtos/output.dto';
import { User } from '../entity/user.entity';

@InputType()
export class LoginInput extends PickType(User, [
    "email",
    "password"
], InputType){}

@ObjectType()
export class LoginOutput extends MutationOutput {
    @Field(() => String, {nullable: true})
    token?: string;
}