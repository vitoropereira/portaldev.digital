import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { z } from "zod";
import { prisma } from "../../../lib/prisma";

export default async function userRouts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const createUserBody = z.object({
    access_token: z.string(),
  });

  const { access_token } = createUserBody.parse(req.body);

  // const userResponse = await fetch(
  //   "https://www.googleapis.com/oauth2/v2/userinfo",
  //   {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${access_token}`,
  //     },
  //   }
  // );

  // const userData = await userResponse.json();
  // console.log("userData");
  // console.log(userData);
  // const userInfoSchema = z.object({
  //   id: z.string(),
  //   email: z.string().email(),
  //   name: z.string(),
  //   picture: z.string().url(),
  // });

  // const userInfo = userInfoSchema.parse(userData);

  // let user = await prisma.user.findUnique({
  //   where: {
  //     googleId: userInfo.id,
  //   },
  // });

  // if (!user) {
  //   user = await prisma.user.create({
  //     data: {
  //       email: userInfo.email,
  //       name: userInfo.name,
  //       image: userInfo.picture,
  //       googleId: userInfo.id,
  //     },
  //   });
  // }

  // const token = fastify.jwt.sign(
  //   {
  //     name: user.name,
  //     avatar: user.avatarUrl,
  //   },
  //   {
  //     sub: user.id,
  //     expiresIn: "7 days",
  //   }
  // );

  return res.status(200).send({});
}
