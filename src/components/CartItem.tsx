interface CartItemProps {
  id: string;
  title: string;
  price: number;
  qty: number;
  url: string;
}

export default function CartItem(props: CartItemProps) {
  // const { id, title, price, qty, url } = props;
  const { title, price, qty, url } = props;

  return (
    <div className="flex capitalize items-center h-40 md:h-48">
      <img
        src={url}
        alt="a shoe"
        className="scale-[0.3] -ml-28 md:-ml-52 lg:-ml-60"
      />
      <section className="self-center -ml-24 md:-ml-40 lg:-ml-60">
        <p className="font-black text-gray-800 md:text-xl font-heading">
          {title}
        </p>
        <p className="font-bold text-lg md:text-2xl">₹{price * qty}</p>
        <p className="inline-block my-2">
          <button
            className="h-8 w-8 rounded-full font-bold border border-gray-400 
            hover:bg-gray-200"
          >
            +
          </button>
          <span className="px-3">{qty}</span>
          <button
            className="h-8 w-8 rounded-full font-bold border border-gray-400 
            hover:bg-gray-200"
          >
            ‒
          </button>
        </p>
      </section>
    </div>
  );
}
