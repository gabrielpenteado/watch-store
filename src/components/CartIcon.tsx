import { ShoppingCartSimple } from "@phosphor-icons/react";

type CartIconProps = {
  quantity?: number;
};

export const CartIcon = ({ quantity }: CartIconProps) => {
  return (
    <div className="relative cursor-pointer hover:text-sky-400">
      <ShoppingCartSimple size={34} />

      <span
        className="absolute text-white bg-sky-700 h-5 w-5 rounded-full text-center
    font-bold text-sm -top-[3px] -right-1"
      >
        {quantity}
      </span>
    </div>
  );
};
