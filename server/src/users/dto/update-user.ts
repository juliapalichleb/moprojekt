import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
