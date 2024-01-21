import {
  Controller,
  Get,
  Post,
  Body,
  VERSION_NEUTRAL,
  BadRequestException,
  UnauthorizedException,
  UseGuards,
  Request,
} from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { UsersService } from '@app/users/users.service';
import { BcryptAdapter } from '../../libs/bycript/bycript.adapter';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';

@Controller({
  path: 'auth',
  version: VERSION_NEUTRAL,
})
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post('/login')
  async login(@Body() loginDto: LoginAuthDto) {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) throw new BadRequestException('Invalid credentials');

    if (!BcryptAdapter.compare(loginDto.password, user.password)) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      id: user.id,
      email: user.email,
      roles: user.roles,
    };
    const token = await this.jwtService.signAsync(payload);

    return {
      message: 'ok',
      token,
    };
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

  @UseGuards(AuthGuard)
  @Get('/me')
  async findOne(@Request() req) {
    const user = await this.usersService.findByEmail(req.user.email);
    return { ...user, password: null };
  }
}
