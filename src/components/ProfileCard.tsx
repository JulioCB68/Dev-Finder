import Image from "next/image";
import Link from "next/link";

import { GithubUserData } from "@/types/GithubUser";
import { formaterDate } from "@/utils/formaterDate";

import { InfoProfile } from "./InfoProfile";
import { InfoProfileGithub } from "./InfoProfileGithub";

interface ProfileProps {
  user: GithubUserData;
}

export function ProfileCard({ user }: ProfileProps) {
  return (
    <div className="flex flex-col rounded-md bg-white p-8 dark:bg-secondary md:flex-row lg:min-w-[800px]">
      <div className="w-1/4">
        <Link href={user?.html_url || ""}>
          <Image
            className="mr-10 cursor-pointer rounded-full"
            src={user?.avatar_url}
            alt="Avatar"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="w-3/4">
        <div className="flex h-32">
          <div className="flex w-full flex-col justify-between">
            <div className="flex justify-between">
              <p className="text-3xl font-semibold">{user?.name}</p>
              <p>Joined {formaterDate(user?.created_at)}</p>
            </div>
            <Link href={user?.html_url || ""}>
              <p className="cursor-pointer text-sm font-semibold text-lightBlue dark:text-blue">
                @{user?.login}
              </p>
            </Link>
            <p className="text-sm font-semibold text-darkGray">
              {user?.bio ? user?.bio : "This profile has no bio"}
            </p>
          </div>
        </div>
        <Link href={`${user?.html_url}?tab=repositories` || ""}>
          <div className="flex cursor-pointer">
            <div className="my-8 flex w-full justify-between rounded-md bg-gray p-6 dark:bg-primary">
              <InfoProfileGithub
                name="Repositories"
                info={user?.public_repos}
              />
              <InfoProfileGithub name="Followers" info={user?.followers} />
              <InfoProfileGithub name="Following" info={user?.following} />
            </div>
          </div>
        </Link>
        <div className="flex w-3/4 justify-between">
          <div>
            <InfoProfile info={user?.twitter_username} icon="Twitter" />
            <InfoProfile info={user?.blog} icon="Website" />
          </div>
          <div>
            <InfoProfile info={user?.location} icon="LocationOn" />
            <InfoProfile info={user?.company} icon="Office" />
          </div>
        </div>
      </div>
    </div>
  );
}
