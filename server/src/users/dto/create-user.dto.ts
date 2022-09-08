import { IsEmail, IsNumber, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @Matches(/^[a-z ,.'-]+$/i)
  name: string;

  @IsNumber()
  tel: number;
}
