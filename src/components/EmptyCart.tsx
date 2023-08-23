import { Button } from "./Button";

export default function EmptyCart() {
  return (
    <div
      className="text-gray-800 w-full px-2 text-center absolute left-1/2 top-1/2 transform 
        -translate-x-1/2 -translate-y-1/2"
    >
      <p className="font-black text-3xl">Your Shopping Cart Is Empty</p>
      <div className="mb-8 mt-14 text-white">
        <Button path="shop">Continue Shopping</Button>
      </div>
    </div>
  );
}
