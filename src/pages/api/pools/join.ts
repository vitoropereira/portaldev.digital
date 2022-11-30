import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export default async function join(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const joinPoolBody = z.object({
    code: z.string(),
  });

  const { code } = joinPoolBody.parse(req.body);

  const token = await getToken({ req });
  if (!token) {
    return res.status(401).send({ message: "User not authorized." });
  }

  const userId = token.sub;

  const pool = await prisma.pool.findUnique({
    where: {
      code,
    },
    include: {
      participants: {
        where: {
          userId,
        },
      },
    },
  });

  if (!pool) {
    return res.status(400).send({
      message: "Pool not found",
    });
  }

  if (pool.participants.length > 0) {
    return res.status(400).send({
      message: "You already join this pool.",
    });
  }

  if (!pool.ownerId) {
    await prisma.pool.update({
      where: {
        id: pool.id,
      },
      data: {
        ownerId: userId,
      },
    });
  }

  await prisma.participant.create({
    data: {
      poolId: pool.id,
      userId: userId,
    },
  });

  return res.status(201).send({ message: "You entered the pool" });
}
