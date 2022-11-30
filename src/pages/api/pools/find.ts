import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export default async function find(req: NextApiRequest, res: NextApiResponse) {
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
      _count: {
        select: {
          participants: true,
        },
      },
      participants: {
        select: {
          id: true,
          user: {
            select: {
              image: true,
            },
          },
        },
        take: 4,
      },
      owner: {
        select: {
          name: true,
          id: true,
        },
      },
    },
  });

  if (!pool) {
    return res.status(400).send({
      message: "Pool not found",
    });
  }

  return res.status(200).send({ pool });
}
