import Link from "next/link";
import Image from "next/image";
import { GoMarkGithub } from "react-icons/go";
import { Roboto } from "next/font/google";
import { Teko } from "next/font/google";

import ImageLogin from "@/assets/images/Ellipse.svg";
import ImageLogin2 from "@/assets/images/Ellipse1.svg";

const teko = Teko({
  weight: ["400"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export function Login() {
  return (
    <div className={teko.className}>
      <div className=" flex items-center justify-center">
        <div className="relative hidden h-screen w-3/5 flex-col items-center justify-between bg-secondary lg:flex">
          <Image
            className="absolute bottom-0 left-0 hidden lg:block"
            src={ImageLogin}
            alt="ellipse"
            width={350}
            height={350}
          />

          <Image
            className="absolute bottom-0 left-0 hidden lg:block"
            src={ImageLogin2}
            alt="ellipse"
            width={350}
            height={350}
          />
        </div>
        <div
          className={`${roboto.className} flex h-screen flex-col items-center justify-center bg-white p-8 lg:w-2/5`}
        >
          <h1 className="pb-10 text-center text-4xl md:p-10 lg:w-3/4">
            Procure por seus amigos e fique por dentro de tudo.
          </h1>
          <h1 className="w-60 text-center text-base lg:mt-12">
            Faça login com sua conta do Github!
          </h1>
          <Link
            className="mt-8 flex cursor-pointer items-center justify-center rounded-2xl bg-tertionary px-32 py-4 text-white hover:bg-tertionaryHover lg:mt-12"
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
