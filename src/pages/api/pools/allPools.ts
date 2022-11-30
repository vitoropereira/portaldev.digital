import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
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

  let skip = 4;

  const pools = await prisma.pool.findMany({
    skip: skip,
    take: 10,
    orderBy: {
      createdAt: "asc",
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
              name: true,
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

  return res.status(200).send({ pools });
}
