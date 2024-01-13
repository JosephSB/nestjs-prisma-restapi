import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const ROLES_DEFTAULT = ['USER', 'ADMIN'];
const STATUS_DEFTAULT = ['ACTIVE', 'INACTIVE'];

async function main() {
  for (const status of STATUS_DEFTAULT) {
    await prisma.status.create({ data: { name: status } });
  }

  for (const rol of ROLES_DEFTAULT) {
    await prisma.role.create({ data: { name: rol } });
  }

  console.log('SEED GENERATED');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
