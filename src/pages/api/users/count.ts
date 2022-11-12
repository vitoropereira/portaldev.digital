import { PrismaClient } from "@prisma/client";
import { FastifyInstance } from "fastify";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

// export function handler() {
//   res.status(200).json({ message: "Hello from Next.js!" });
// }

export default async function userRouts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const count = await prisma.user.count();
  return res.status(200).send({ count });
}
