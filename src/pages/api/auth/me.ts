import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { prisma } from "../../../lib/prisma";

export default async function userRouts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = await getToken({ req });
  if (!token) {
    return res.status(401).send({ message: "User not authorized." });
  }
  const userId = token.sub;

  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  return res.status(200).send({ user });
}
