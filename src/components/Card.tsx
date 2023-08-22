import { Link } from "react-router-dom";

interface CardProps {
  id: string;
  title: string;
  price: number;
  url: string;
}

export function Card({ id, title, price, url }: CardProps) {
  return (
    <div className=" flex justify-center align-middle items-center w-[90%] shadow-lg">
      <Link to={`/shop/${id}`} className="bg-neutral-200 mr-auto max-w-md">
        <img src={url} alt="watch" className="h-[220px]" />
      </Link>
      <div className="flex-col justify-center text-center mr-auto">
        <p className="font-bold pb-2 pt-4 font-body">{title}</p>
        <p className="pb-4">${price}</p>
      </div>
    </div>
  );
}
