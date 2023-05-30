import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoSearch } from "react-icons/go";

import { routes } from "@/config/routes";

export function Header() {
  const router = useRouter();

  const [name, setName] = useState("");

  const handleRoute = () => {
    if (name) {
      router.push(routes.profile(name));
    }
  };

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className="w-full bg-secondary py-4">
      <div className="my-04 mx-auto flex max-w-4xl items-center justify-between px-12">
        <h1>DevFinder</h1>
        <div className="flex items-center justify-between rounded-md bg-primary py-1 pl-4">
          <Link href="#" onClick={handleRoute}>
            <GoSearch size={20} className="mr-2 cursor-pointer" />
          </Link>
          <input
            type="text"
            name="name"
            placeholder="Search for Profile..."
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent p-2 outline-none"
          />
          <Link
            href="#"
            onClick={handleRoute}
            className="mx-2 cursor-pointer rounded-md bg-secondary px-6 py-2"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
