import { useSelector } from "react-redux";
import { CartIcon } from "./CartIcon";
import { Link } from "react-router-dom";

import { RootState } from "../store";

export function Navbar() {
  const cartProducts = useSelector((state: RootState) => state.cart);

  return (
    <header className="flex justify-around h-[10vh] items-center px-4 text-white ">
      <Link
        to="/"
        className="text-4xl text-sky-400 md:text-4xl lg:text-5xl font-heading"
      >
        Watch<span className="text-white">Store</span>
      </Link>
      <nav className="flex gap-2 md:gap-4 items-center">
        <Link to="/" className="hover:text-sky-400 text-base md:text-lg">
          Home
        </Link>
        <Link to="/shop" className="hover:text-sky-400 text-base md:text-lg">
          Shop
        </Link>
        <Link to="/cart">
          <CartIcon quantity={cartProducts.length} />
        </Link>
      </nav>
    </header>
  );
}
