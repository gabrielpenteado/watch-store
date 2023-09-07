import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import EmptyCart from "../components/EmptyCart";
import { Product } from "../store/cartSlice";

import { RootState } from "../store";
import OrderAmount from "../components/OrderAmount";

export function Checkout() {
  const cartProducts = useSelector((state: RootState) => state.cart);
  // console.log(cartProducts);

  const finalProducts = cartProducts.map((product: Product) => (
    <CartItem key={product.id} {...product} />
  ));

  function getTotal() {
    return cartProducts
      .map((product: Product) => product.quantity * product.price)
      .reduce(
        (prevValue: number, currentValue: number) => prevValue + currentValue,
        0
      );
  }

  return (
    <div className="bg-[whitesmoke] min-h-[80vh]">
      {cartProducts.length !== 0 ? finalProducts : <EmptyCart />}
      {cartProducts.length !== 0 && <OrderAmount getTotal={getTotal} />}
    </div>
  );
}
