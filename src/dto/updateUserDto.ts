import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsString()
  nom?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  // @IsOptional()
  // @IsString()
  // @MinLength(8)
  // password?: string;
}
