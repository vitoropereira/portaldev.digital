import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { z } from "zod";
import { prisma } from "../../../../lib/prisma";

export default async function getPools(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req });
  if (!token) {
    return res.status(401).send({ message: "User not authorized." });
  }

  const userId = token.sub;

  const getPoolParams = z.object({
    poolId: z.string(),
  });

  const { poolId } = getPoolParams.parse(req.query);

  const games = await prisma.game.findMany({
    orderBy: {
      date: "desc",
    },
    include: {
      guesses: {
        where: {
          participant: {
            userId: userId,
            poolId: poolId,
          },
        },
      },
    },
  });

  return res.status(200).send({
    games: games.map((game) => {
      return {
        ...game,
        guess: game.guesses.length > 0 ? game.guesses[0] : null,
        guesses: undefined,
      };
    }),
  });
}
