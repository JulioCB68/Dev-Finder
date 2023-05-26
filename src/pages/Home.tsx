import { useEffect } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

import { getGithubToken } from "@/services/githubToken";
import { useLocalStorage } from "@/hooks/useLocalStorage";

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
      enabled: !!code && !user, // !user evita a chamada na API se o valor de user já existir
      onSuccess: (response) => setLocalStorage("user", response),
    }
  );

  return (
    <div className="flex h-screen items-center justify-center bg-primary text-textPrimary">
      {user && (
        <div className="w-3/4 max-w-4xl rounded-md bg-secondary p-8">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                className="mr-10 rounded-full"
                src={user.avatar_url}
                alt="Avatar"
                width={150}
                height={150}
              />
              <div className="flex h-32 flex-col justify-between">
                <p className="text-3xl font-semibold">{user.name}</p>
                <p className="text-sm font-semibold text-blue">@{user.login}</p>
                <p className="text-sm font-semibold text-gray">
                  {user.bio ? user.bio : "This profile has no bio"}
                </p>
              </div>
            </div>
            <div>
              <p>Joined {user.created_at}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="my-8 flex w-[77%] justify-between rounded-md bg-primary p-6">
              <div className="flex-col">
                <p>Repositories</p>
                <p className="text-xl font-semibold">{user.public_repos}</p>
              </div>
              <div className="flex-col">
                <p>Followers</p>
                <p className="text-xl font-semibold">{user.followers}</p>
              </div>
              <div className="flex-col">
                <p>Following</p>
                <p className="text-xl font-semibold">{user.following}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
