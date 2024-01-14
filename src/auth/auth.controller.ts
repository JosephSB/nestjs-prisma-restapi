import { Controller, Get, Post, Body, VERSION_NEUTRAL } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UsersService } from '@app/users/users.service';

@Controller({
  path: 'auth',
  version: VERSION_NEUTRAL,
})
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  login(@Body() loginDto: LoginAuthDto) {
    return loginDto.email;
    //return this.authService.create(loginDto);
  }

  @Post('/register')
  async register(@Body() registerDto: RegisterAuthDto) {
    const newUser = await this.usersService.create({
      email: registerDto.email,
      password: registerDto.password,
      username: registerDto.username,
      status: 'ACTIVE',
      role: 'USER',
    });

    return { ...newUser, password: null };
  }

  @Get('/me')
  findOne() {
    //return this.authService.findOne();
  }
}
