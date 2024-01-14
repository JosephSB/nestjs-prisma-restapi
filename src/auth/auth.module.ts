import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersService } from '@app/users/users.service';
import { PrismaService } from '../libs/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [UsersService, PrismaService],
})
export class AuthModule {}
