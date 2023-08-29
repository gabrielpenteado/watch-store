import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  path: string;
  children: ReactNode;
};

export function Button({ path, children }: ButtonProps) {
  return (
    <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-sky-400 to-sky-800 group-hover:from-sky-400 group-hover:to-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-600">
      {/* <Link
        to={`/${path}`}
        className="bg-button-gradient py-2 md:py-3 lg:py-4 px-2 md:px-6 lg:px-9 rounded-2xl text-2xl md:text-3xl font-black hover:text-black"
      >
        {children}
      </Link> */}
      <Link
        to={`/${path}`}
        className="relative px-4 md:px-12 py-1 md:py-2.5 md:text-3xl text-2xl text-white transition-all ease-in duration-75 bg-zinc-800 dark:bg-zinc-800 rounded-md group-hover:bg-opacity-0 "
      >
        {children}
      </Link>
    </div>
  );
}
