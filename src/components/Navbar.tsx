import { Cart } from "./Cart";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="flex justify-around h-[10vh] items-center px-4 text-white ">
      <Link
        to="/"
        className="text-4xl text-sky-400 md:text-4xl lg:text-5xl font-heading"
      >
        Watch<span className="text-white">Store</span>
      </Link>
      <nav className="flex gap-4 items-center">
        <Link to="/" className="hover:text-sky-400 text-lg">
          Home
        </Link>
        <Link to="/shop" className="hover:text-sky-400 text-lg">
          Shop
        </Link>
        <Link to="/cart">
          <Cart />
        </Link>
      </nav>
    </header>
  );
}
