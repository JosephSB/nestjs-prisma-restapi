import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

const UserDtoSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/gm),
});

export class CreateUserDto extends createZodDto(UserDtoSchema) {}
