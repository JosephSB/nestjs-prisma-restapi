enum UserRoles {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class User {
  id: string;
  username: string;
  email: string;
  roles: UserRoles[];
  status: UserStatus;
}
