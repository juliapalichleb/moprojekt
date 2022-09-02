import { IsAlpha, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsAlpha('pl-PL')
  nameUser: string;

  @IsNumber()
  tel: number;

  @IsString()
  status: string;
}
