import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { z } from "zod";
import { prisma } from "../../../../../../lib/prisma";

export default async function getPools(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req });
  if (!token) {
    return res.status(401).send({ message: "User not authorized." });
  }

  const userId = token.sub;

  const createGuessParams = z.object({
    poolId: z.string(),
    gameId: z.string(),
  });

  const createGuessBody = z.object({
    firstTeamPoints: z.number(),
    secondTeamPoints: z.number(),
  });

  const { poolId, gameId } = createGuessParams.parse(req.query);
  const { firstTeamPoints, secondTeamPoints } = createGuessBody.parse(req.body);

  const participant = await prisma.participant.findUnique({
    where: {
      userId_poolId: {
        poolId,
        userId,
      },
    },
  });

  if (!participant) {
    return res.status(400).send({
      message: "You're note allowed to create a guess inside this pool.",
    });
  }

  const guess = await prisma.guess.findUnique({
    where: {
      participantId_gameId: {
        participantId: participant.id,
        gameId,
      },
    },
  });

  if (guess) {
    return res.status(400).send({
      message: "You already send a guess to this game on this pool.",
    });
  }

  const game = await prisma.game.findUnique({
    where: {
      id: gameId,
    },
  });

  if (!game) {
    return res.status(400).send({
      message: "Game not found.",
    });
  }

  if (game.date < new Date()) {
    return res.status(400).send({
      message: "You can not send guesses after the game date.",
    });
  }

  await prisma.guess.create({
    data: {
      gameId,
      participantId: participant.id,
      firstTeamPoints,
      secondTeamPoints,
    },
  });
  return res.status(201);
}
