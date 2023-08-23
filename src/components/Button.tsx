import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  path: string;
  children: ReactNode;
};

export function Button({ path, children }: ButtonProps) {
  return (
    <Link
      to={`/${path}`}
      className="bg-button-gradient py-2 md:py-3 lg:py-4 px-2 md:px-6 lg:px-9 rounded-2xl text-2xl md:text-2xl font-black hover:text-black"
    >
      {children}
    </Link>
  );
}
