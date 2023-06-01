"use client";

import { useState } from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";
import { useRouter } from "next/router";
import { Teko } from "next/font/google";

import { routes } from "@/config/routes";

import { ThemeSwitcher } from "./ThemeSwitcher";

const teko = Teko({
  weight: ["400"],
  subsets: ["latin"],
});

export function Header() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <div className="w-full bg-header py-4 text-white">
      <div className="my-04 mx-auto flex max-w-4xl items-center justify-between px-12">
        <div
          className={`${teko.className} flex cursor-pointer items-center justify-center text-4xl`}
        >
          <GoSearch size={26} className="mr-3 cursor-pointer" />
          <h1>DevFinder</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="mr-6 flex items-center justify-between rounded-md bg-primary py-1 pl-4">
            <Link href={routes.profile(name)} passHref>
              <GoSearch size={20} className="mr-2 cursor-pointer" />
            </Link>
            <input
              type="text"
              placeholder="Search for Profile..."
              onChange={(e) => setName(e.target.value)}
              className="bg-primary p-2 outline-none"
            />
            <Link
              href={routes.profile(name)}
              passHref
              className="mx-2 cursor-pointer rounded-md bg-secondary px-6 py-2"
            >
              Search
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
