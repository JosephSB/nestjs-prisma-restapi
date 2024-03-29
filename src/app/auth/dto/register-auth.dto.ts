import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class RegisterAuthDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
