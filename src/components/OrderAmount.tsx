import { useDispatch } from "react-redux";
import { removeAllProducts } from "../store/cartSlice.js";

import { useNavigate } from "react-router-dom";

interface OrderAmountProps {
  getTotal: () => number;
}

export default function OrderAmount(props: OrderAmountProps) {
  const dispatch = useDispatch();
  const { getTotal } = props;

  const navigate = useNavigate();

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
      <div className="flex flex-col">
        <button
          onClick={() => {
            dispatch(removeAllProducts());
            navigate("/orderplaced");
          }}
          className="bg-gray-800 text-white font-bold p-3 mb-3 rounded-lg text-lg tracking-wider
        hover:bg-gray-700"
        >
          Place Order
        </button>
        <button
          onClick={() => navigate("/shop")}
          className="bg-gray-800 text-white font-semibold p-2 mb-4 rounded-lg text-lg tracking-wider
        hover:bg-gray-700"
        >
          Continue Shopping
        </button>
        <button
          onClick={() => {
            dispatch(removeAllProducts());
            navigate("/");
          }}
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
          Empty Cart
        </button>
      </div>
    </section>
  );
}
