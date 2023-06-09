import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAccessToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;
  const accessTokenResponse = await axios.post(
    "https://github.com/login/oauth/access_token",
    null,
    {
      params: {
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
        code: code,
      },
      headers: {
        Accept: "application/json",
      },
    }
  );

  const { access_token } = accessTokenResponse.data;

  const userResponse = await axios.get("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const user = userResponse.data;
  res.status(200).json(user);
}
