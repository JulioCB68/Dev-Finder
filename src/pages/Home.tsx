import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { marked } from "marked";

import { getGithubReadme, getGithubToken } from "@/services/githubToken";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProfileCard } from "@/components/ProfileCard";
import { Header } from "@/components/Header";

export function Home() {
  const router = useRouter();
  const { code } = router.query;
  const { user, getLocalStorage, setLocalStorage } = useLocalStorage();

  useEffect(() => {
    getLocalStorage();
  }, []);

  const { data } = useQuery(
    ["githubToken", code],
    () => getGithubToken(String(code)),
    {
      enabled: !!code && !user,
      onSuccess: (response) => setLocalStorage("user", response),
    }
  );

  return (
    <div className="items-center justify-center">
      <Header />
      <div className="bg-gray dark:bg-primary">
        <div className="my-04 mx-auto max-w-4xl px-12 py-[7.40rem]">
          <div className="flex items-center justify-center py-20 text-textBlack dark:text-textPrimary">
            {user && <ProfileCard user={user} />}
            {!user && <ProfileCard user={data!} />}
          </div>
        </div>
      </div>
    </div>
  );
}
