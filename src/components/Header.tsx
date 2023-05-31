import { useState } from "react";
import Link from "next/link";
import { GoSearch } from "react-icons/go";

import { routes } from "@/config/routes";

import { ThemeSwitcher } from "./ThemeSwitcher";

export function Header() {
  const [name, setName] = useState("");

  const handleRoute = () => {
    if (name) {
      if (typeof window !== "undefined") {
        window.location.replace(routes.profile(name));
      }
    }
  };

  return (
    <div className="w-full bg-header py-4 text-white">
      <div className="my-04 mx-auto flex max-w-4xl items-center justify-between px-12">
        <h1 className="cursor-pointer">DevFinder</h1>
        <div className="flex items-center justify-between">
          <div className="mr-6 flex items-center justify-between rounded-md bg-primary py-1 pl-4">
            <Link href="#" onClick={handleRoute}>
              <GoSearch size={20} className="mr-2 cursor-pointer" />
            </Link>
            <input
              type="text"
              placeholder="Search for Profile..."
              onChange={(e) => setName(e.target.value)}
              className="bg-primary p-2 outline-none"
            />
            <Link
              href="#"
              onClick={handleRoute}
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
