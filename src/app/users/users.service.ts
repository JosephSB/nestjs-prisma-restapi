import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../../libs/prisma/prisma.service';
import { BcryptAdapter } from '../../libs/bycript/bycript.adapter';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.prisma.user.create({
      data: {
        username: createUserDto.username,
        email: createUserDto.email,
        password: BcryptAdapter.hash(createUserDto.password),
        roles: {
          create: [{ role: { connect: { name: createUserDto.role } } }],
        },
        status: { connect: { name: createUserDto.status } },
      },
    });

    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findFirst({
      where: { email: email },
      include: { roles: { select: { role: true } }, status: true },
    });

    return user;
  }

  findByUsername(username: string) {
    return `This action returns a #${username} user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
