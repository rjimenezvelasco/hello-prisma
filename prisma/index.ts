import { Prisma, PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
/*
  await prisma.user.create({

    data: {

      name: 'Jose',

      email: 'jose@prisma.io',

      posts: {

        create: { title: 'Hi Jose' },

      },

      profile: {

        create: { bio: 'I don´t like turtles' },

      },

    },

  })


  const allUsers = await prisma.user.findMany({

    include: {

      posts: true,

      profile: true,

    },

  })

  console.dir(allUsers, { depth: null })
*/
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  })

  console.dir(user, { depth: null })
}



main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
