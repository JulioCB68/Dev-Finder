import { GoSearch } from "react-icons/go";

export function Header() {
  return (
    <div className="w-full bg-secondary py-4">
      <div className="my-04 mx-auto flex max-w-4xl items-center justify-between px-12">
        <h1>DevFinder</h1>
        <div className="flex items-center justify-between rounded-md bg-primary py-1 pl-4">
          <GoSearch size={20} className="mr-2 cursor-pointer" />
          <input type="text" className="bg-transparent p-2 outline-none" />
          <button className="mx-2 cursor-pointer rounded-md bg-secondary px-6 py-2">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
