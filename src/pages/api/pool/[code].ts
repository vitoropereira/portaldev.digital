import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

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
    code: z.string(),
  });

  const { code } = getPoolParams.parse(req.query);

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

  return res.status(200).send({ pool });
}
