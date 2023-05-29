import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

import { getGithubToken } from "@/services/githubToken";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Profile } from "@/components/Profile";
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
      enabled: !!code && !user, // !user evita a chamada na API se o valor de user já existir
      onSuccess: (response) => setLocalStorage("user", response),
    }
  );

  return (
    <div className="h-screen items-center justify-center bg-primary text-textPrimary">
      <Header />
      <div className="my-04 mx-auto max-w-4xl px-12">
        {user && <Profile user={user} />}
        {!user && <Profile user={data!} />}
      </div>
    </div>
  );
}
