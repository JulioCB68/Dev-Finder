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

  function formatDate(date: string): string {
    const data = new Date(date);

    const day = String(data.getDate()).padStart(2, "0");
    const month = getMonthNumber(data.getMonth());
    const year = data.getFullYear();

    return `${day} ${month} ${year}`;
  }

  function getMonthNumber(month: number): string {
    const allMonth = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];
    return allMonth[month];
  }

  return (
    <div className="flex h-screen items-center justify-center bg-primary text-textPrimary">
      {user && (
        <div className="flex w-3/4 max-w-4xl rounded-md bg-secondary p-8">
          <div className="w-1/4">
            <Image
              className="mr-10 rounded-full"
              src={user.avatar_url}
              alt="Avatar"
              width={150}
              height={150}
            />
          </div>
          <div className="w-3/4">
            <div className="flex h-32">
              <div className="flex flex-col justify-between">
                <div className="flex justify-between">
                  <p className="text-3xl font-semibold">{user.name}</p>
                  <p>Joined {formatDate(user.created_at)}</p>
                </div>
                <p className="text-sm font-semibold text-blue">@{user.login}</p>
                <p className="text-sm font-semibold text-gray">
                  {user.bio ? user.bio : "This profile has no bio"}
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="my-8 flex w-full justify-between rounded-md bg-primary p-6">
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
            <div className="flex w-3/4 justify-between">
              <div>
                <p
                  className={`flex items-center py-3 ${
                    user.location ? "text-white" : "text-gray"
                  }`}
                >
                  <MdLocationOn size={20} className="mr-2" />
                  {user.location ? user.location : "Not Available"}
                </p>
                <p
                  className={`flex items-center py-3 ${
                    user.blog ? "text-white" : "text-gray"
                  }`}
                >
                  <CgWebsite size={20} className="mr-2" />
                  {user.blog ? user.blog : "Not Available"}
                </p>
              </div>
              <div>
                <p
                  className={`flex items-center py-3 ${
                    user.twitter_username ? "text-white" : "text-gray"
                  }`}
                >
                  <FaTwitter size={20} className="mr-2" />
                  {user.twitter_username
                    ? user.twitter_username
                    : "Not Available"}
                </p>
                <p
                  className={`flex items-center py-3 ${
                    user.company ? "text-white" : "text-gray"
                  }`}
                >
                  <HiBuildingOffice2 size={20} className="mr-2" />
                  {user.company ? "@" + user.company : "Not Available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// {user ? (
//         <div>
//           <p className="">Username: {user.login}</p>
//           <p>Name: {user.name}</p>
//           <Image src={user.avatar_url} alt="Avatar" width={150} height={150} />
//         </div>
//       ) : (
//         data && (
//           <div>
//             <p>Username: {data.login}</p>
//             <p>Name: {data.name}</p>
//             <Image
//               src={data.avatar_url}
//               alt="Avatar"
//               width={150}
//               height={150}
//             />
//           </div>
//         )
//       )}
