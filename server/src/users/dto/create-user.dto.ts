import { IsAlpha, IsEmail, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsAlpha('pl-PL')
  name: string;

  @IsNumber()
  tel: number;
}
