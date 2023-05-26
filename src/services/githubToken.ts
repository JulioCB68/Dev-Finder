import axios from "axios";

import { GithubUserData } from "@/types/GithubUser";

export const getGithubToken = async (
  token: string
): Promise<GithubUserData> => {
  const response = await axios.get("/api/github-token", {
    params: {
      code: token,
    },
  });
  return response.data;
};
