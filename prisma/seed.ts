import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@gmail.com",
      image: "http://github.com/vitoropereira.png",
    },
  });

  const pool = await prisma.pool.create({
    data: {
      title: "Example Pool",
      code: "BOL123",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-02T15:31:30.737Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-03T15:31:30.737Z",
      firstTeamCountryCode: "FR",
      secondTeamCountryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-04T15:31:30.737Z",
      firstTeamCountryCode: "DE",
      secondTeamCountryCode: "FR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-03T15:31:30.737Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 1,
          secondTeamPoints: 2,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
  await prisma.game.create({
    data: {
      date: "2022-11-04T15:31:30.737Z",
      firstTeamCountryCode: "GE",
      secondTeamCountryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
  await prisma.game.create({
    data: {
      date: "2022-11-05T15:31:30.737Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "GE",

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pool.id,
              },
            },
          },
        },
      },
    },
  });
}

main();
