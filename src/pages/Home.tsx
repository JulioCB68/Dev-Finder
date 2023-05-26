import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";

import { GithubUserData } from "@/types/GithubUser";
import { getGithubToken } from "@/services/githubToken";

export function Home() {
  const router = useRouter();
  const { code } = router.query;

  const { data: user } = useQuery(
    ["githubToken", code],
    () => getGithubToken(String(code)),
    {
      enabled: !!code,
      retry: false,
    }
  );

  return (
    <div>
      {user && (
        <div>
          <p>Username: {user.login}</p>
          <p>Name: {user.name}</p>
          <Image src={user.avatar_url} alt="Avatar" width={150} height={150} />
        </div>
      )}
    </div>
  );
}
