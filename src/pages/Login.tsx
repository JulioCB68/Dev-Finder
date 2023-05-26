import Image from "next/image";
import Link from "next/link";
import { GoMarkGithub } from "react-icons/go";

import ImageLogin from "@/assets/images/Login.svg";

export function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex w-3/4 max-w-3xl flex-col items-center justify-between rounded-lg bg-white px-20 py-8 shadow-2xl lg:flex-row">
        <Image
          className="h-64 w-64 translate-x-4 lg:translate-x-0"
          src={ImageLogin}
          alt="Icone da area de Login"
          width={150}
          height={150}
        />
        <div>
          {" "}
          <h1 className="w-60 text-center text-base lg:mt-12">
            Faça login com sua conta do Github!
          </h1>
          <Link
            className="mt-8 flex w-full cursor-pointer items-center justify-center rounded-2xl bg-tertionary py-4 text-white hover:bg-tertionaryHover lg:mt-12"
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          >
            <p className="pr-4">Login</p>
            <GoMarkGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}
