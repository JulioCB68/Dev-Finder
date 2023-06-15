import axios from "axios";

import { GithubReadme, GithubUserData } from "@/types/GithubUser";

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

export const getGithubReadme = async (name: string) => {
  try {
    const responseGithubReadme = await axios.get(
      `https://api.github.com/repos/${name}/${name}/contents/README.md`
    );
    const responseGithubReadmeData = responseGithubReadme.data;

    const { download_url } = responseGithubReadmeData;

    const responseDownloadUrl = await axios.get(`${download_url}`);

    return responseDownloadUrl.data;
  } catch (error) {
    console.error("Error fetching GitHub README:", error);
    throw error;
  }
};
