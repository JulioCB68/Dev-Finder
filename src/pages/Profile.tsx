import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { ProfileCard } from "@/components/ProfileCard";
import { getGithubProfile } from "@/services/githubProfile";

export function Profile() {
  const router = useRouter();
  const { name } = router.query;

  const { data } = useQuery(
    ["profile", name],
    () => getGithubProfile(String(name)),
    {
      enabled: !!name,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="flex h-screen items-center justify-center bg-primary text-textPrimary">
      <div className="my-04 mx-auto max-w-4xl px-12">
        {data && <ProfileCard user={data} />}
        {!data && <ProfileCard user={data!} />}
      </div>
    </div>
  );
}
