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
  }, [getLocalStorage]);

  const { data } = useQuery(
    ["githubToken", code],
    () => getGithubToken(String(code)),
    {
      enabled: !!code && !user, // !user evita a chamada na API se o valor de user já existir
      onSuccess: (response) => setLocalStorage("user", response),
    }
  );

  return (
    <div>
      {user ? (
        <div>
          <p>Username: {user.login}</p>
          <p>Name: {user.name}</p>
          <Image src={user.avatar_url} alt="Avatar" width={150} height={150} />
        </div>
      ) : (
        data && (
          <div>
            <p>Username: {data.login}</p>
            <p>Name: {data.name}</p>
            <Image
              src={data.avatar_url}
              alt="Avatar"
              width={150}
              height={150}
            />
          </div>
        )
      )}
    </div>
  );
}
