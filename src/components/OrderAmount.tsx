import { useDispatch } from "react-redux";
import { removeAllProducts } from "../store/cartSlice.js";

interface OrderAmountProps {
  getTotal: () => number;
}

export default function OrderAmount(props: OrderAmountProps) {
  const dispatch = useDispatch();
  const { getTotal } = props;

  return (
    <section
      className="w-10/12 p-8 rounded-md mx-auto mb-4 right-20 top-24 bg-gray-200 
    lg:fixed lg:m-0 lg:w-80"
    >
      <p className="flex justify-between border-b border-gray-300 py-2">
        Subtotal <span>${getTotal()}</span>
      </p>
      <p className="flex justify-between border-gray-300 border-b py-2">
        Shipping <span>Free</span>
      </p>
      <p className="flex justify-between border-gray-300 border-b py-2">
        Tax <span>$0</span>
      </p>
      <p className="text-lg font-bold mt-4 mb-3 flex justify-between">
        Order Total <span>${getTotal()}</span>
      </p>
      <button
        onClick={() => dispatch(removeAllProducts())}
        className="bg-gray-800 text-white font-bold p-4 rounded-lg text-lg tracking-wider
        hover:bg-gray-700"
      >
        Place Order
      </button>
    </section>
  );
}
