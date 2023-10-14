interface CartItemProps {
  id: string;
  title: string;
  price: number;
  quantity: number;
  url: string;
}

// export default function CartItem(props: CartItemProps) {
//   // const { id, title, price, qty, url } = props;
//   const { title, price, quantity, url } = props;

//   return (
//     <div className="flex capitalize items-center h-40 md:h-48">
//       <img
//         src={url}
//         alt="a shoe"
//         className="scale-[0.3] -ml-28 md:-ml-52 lg:-ml-60"
//       />
//       <section className="self-center -ml-24 md:-ml-40 lg:-ml-60">
//         <p className="font-black text-gray-800 md:text-xl font-heading">
//           {title}
//         </p>
//         <p className="font-bold text-lg md:text-2xl">${price * quantity}</p>
//         <p className="inline-block my-2">
//           <button
//             className="h-8 w-8 rounded-full font-bold border border-gray-400
//             hover:bg-gray-200"
//           >
//             +
//           </button>
//           <span className="px-3">{quantity}</span>
//           <button
//             className="h-8 w-8 rounded-full font-bold border border-gray-400
//             hover:bg-gray-200"
//           >
//             ‒
//           </button>
//         </p>
//       </section>
//     </div>
//   );
// }

import { increaseQuantity, decreaseQuantity } from "../store/cartSlice.js";
import { useDispatch } from "react-redux";

export default function CartItem(props: CartItemProps) {
  const dispatch = useDispatch();
  const { price, url, title, id, quantity } = props;

  return (
    <div className="flex capitalize items-center h-80 md:pl-14">
      <img src={url} alt="a shoe" className=" w-[180px] mr-3" />
      <section className="self-center">
        <p className="font-black text-gray-800 md:text-xl font-heading">
          {title}
        </p>
        <p className="font-bold text-lg md:text-2xl">${price * quantity}</p>
        <p className="inline-block my-2 pt-2">
          <button
            onClick={() => dispatch(increaseQuantity(id))}
            className="h-7 w-7 pb-8 text-lg rounded-lg font-semibold border border-gray-400 
            hover:bg-gray-200"
          >
            +
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => dispatch(decreaseQuantity(id))}
            className="h-7 w-7 pb-8 text-lg rounded-lg font-semibold border border-gray-400 
            hover:bg-gray-200"
          >
            -
          </button>
        </p>
      </section>
    </div>
  );
}
