import Image from "next/image";

import { GithubUserData } from "@/types/GithubUser";
import { formaterDate } from "@/utils/formaterDate";

import { InfoProfile } from "./InfoProfile";
import { InfoProfileGithub } from "./InfoProfileGithub";

interface ProfileProps {
  user: GithubUserData;
}

export function Profile({ user }: ProfileProps) {
  return (
    <div className="flex h-screen items-center justify-center bg-primary text-textPrimary">
      <div className="flex w-3/4 max-w-4xl rounded-md bg-secondary p-8">
        <div className="w-1/4">
          <Image
            className="mr-10 cursor-pointer rounded-full"
            src={user?.avatar_url}
            alt="Avatar"
            width={150}
            height={150}
          />
        </div>
        <div className="w-3/4">
          <div className="flex h-32">
            <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                <p className="text-3xl font-semibold">{user?.name}</p>
                <p>Joined {formaterDate(user?.created_at)}</p>
              </div>
              <p className="cursor-pointer text-sm font-semibold text-blue">
                @{user?.login}
              </p>
              <p className="text-sm font-semibold text-gray">
                {user?.bio ? user?.bio : "This profile has no bio"}
              </p>
            </div>
          </div>
          <div className="flex cursor-pointer">
            <div className="my-8 flex w-full justify-between rounded-md bg-primary p-6">
              <InfoProfileGithub
                name="Repositories"
                info={user?.public_repos}
              />
              <InfoProfileGithub name="Followers" info={user?.followers} />
              <InfoProfileGithub name="Following" info={user?.following} />
            </div>
          </div>
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
    </div>
  );
}
