import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";

import { RootState } from "../store";

export function Checkout() {
  const cartProducts = useSelector((state: RootState) => state.cart);

  console.log(cartProducts);
  // const finalProducts = cartProducts.map((product) => (
  //   <CartItem key={product.id} {...product} />
  // ));

  function getTotal() {
    return cartProducts.map((product) => product);
  }

  return (
    <div className="bg-[whitesmoke] min-h-[80vh]">
      <EmptyCart />
    </div>
  );
}
