import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersService } from '@app/users/users.service';
import { PrismaService } from '../../libs/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import config from '../../config';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: config.JWT_SEED,
      signOptions: { expiresIn: config.JWT_TOKEN_DUR },
    }),
  ],
  controllers: [AuthController],
  providers: [UsersService, PrismaService],
})
export class AuthModule {}
