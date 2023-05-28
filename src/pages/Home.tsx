import { useEffect } from "react";
import Image from "next/image";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { MdLocationOn } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";

import { getGithubToken } from "@/services/githubToken";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Profile } from "@/components/Profile";

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
      {user && <Profile user={user} />}
      {!user && <Profile user={data!} />}
    </div>
  );
}
