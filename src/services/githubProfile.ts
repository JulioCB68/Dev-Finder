import { GithubUserData } from "@/types/GithubUser";

import { api } from "./api";

export const getGithubProfile = async (
  userName: string
): Promise<GithubUserData> => {
  const response = await api.get(`users/${userName}`);
  return response.data;
};
