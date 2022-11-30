import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import ShortUniqueId from "short-unique-id";
import { z } from "zod";
import { getToken } from "next-auth/jwt";

export default async function createPools(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const createPoolBody = z.object({
    title: z.string(),
    description: z.string(),
  });

  const { title, description } = createPoolBody.parse(req.body);

  const generator = new ShortUniqueId({ length: 6 });
  const code = String(generator()).toUpperCase();

  const token = await getToken({ req });
  const ownerId = token.sub;
  const userId = token.sub;

  try {
    await prisma.pool.create({
      data: {
        title,
        code,
        description,
        ownerId,

        participants: {
          create: {
            userId,
          },
        },
      },
    });
  } catch {
    await prisma.pool.create({
      data: {
        title,
        description,
        code,
      },
    });
  }

  return res.status(201).send({ code });
}
