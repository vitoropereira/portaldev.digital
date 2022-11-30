import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function userRouts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const count = await prisma.guess.count();
  return res.status(200).send({ count });
}
