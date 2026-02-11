import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding product owners...')

  await prisma.productOwner.createMany({
    data: [
      { name: 'Alice Johnson', email: 'alice@company.com' },
      { name: 'Bob Smith', email: 'bob@company.com' },
      { name: 'Carol Lee', email: 'carol@company.com' },
      { name: 'David Khan', email: 'david@company.com' }
    ],
    skipDuplicates: true
  })

  console.log('Seeding completed.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
