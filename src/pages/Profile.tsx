import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { GithubUserData } from "@/types/GithubUser";
import { getGithubProfile } from "@/services/githubProfile";
import { Header } from "@/components/Header";
import { ProfileCard } from "@/components/ProfileCard";

export function Profile() {
  const router = useRouter();
  const { name } = router.query;

  const { data, isLoading } = useQuery<GithubUserData>(
    ["profile", name],
    () => getGithubProfile(String(name)),
    {
      enabled: !!name,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return (
      <div className="items-center justify-center">
        <Header />
        <div className="h-screen bg-gray dark:bg-primary">
          <div className="my-04 mx-auto max-w-4xl px-12">
            <div className="flex h-screen items-center justify-center text-textBlack dark:text-textPrimary">
              {data && <ProfileCard user={data} />}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="items-center justify-center">
      <Header />
      <div className="h-screen bg-gray dark:bg-primary">
        <div className="my-04 mx-auto max-w-4xl px-12">
          <div className="flex h-screen items-center justify-center text-textBlack dark:text-textPrimary">
            {data && <ProfileCard user={data} />}
          </div>
        </div>
      </div>
    </div>
  );
}
