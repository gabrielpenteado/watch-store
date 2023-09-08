import { useDispatch } from "react-redux/";
import { addProduct } from "../store/cartSlice";
import { useNavigate, useParams } from "react-router-dom";
import products from "../assets/products";

export const ProductInfo = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = products.find((item) => productId === item.id);

  const navigate = useNavigate();

  return (
    <div className="bg-[whitesmoke] min-h-[80vh]">
      <div className="text-gray-800 font-black md:flex justify-center md:pt-14">
        <img
          src={product?.url}
          alt="watch"
          className="h-[400px] md:h-[500px]"
        />
        <section className=" w-[80%] md:w-[30%] my-auto pl-14">
          <p className="text-2xl md:text-5xl font-heading  ">
            {product?.title}
          </p>
          <p className="font-normal text-sm normal-case pt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-2xl md:text-3xl mt-3 mb-8 font-medium">
            ${product?.price}
          </p>

          <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-gray-900 rounded-lg group bg-gradient-to-br from-sky-400 to-sky-800 group-hover:from-sky-400 group-hover:to-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-200 dark:focus:ring-sky-600">
            <button
              className="relative font-heading px-4 md:px-8 py-1 md:py-2.5 text-xl md:text-2xl text-black transition-all ease-in duration-75 bg-[whitesmoke] dark:bg-zinc-800 rounded-md group-hover:bg-opacity-0 hover:text-white"
              onClick={() => {
                dispatch(addProduct(product!));
                navigate("/cart");
              }}
            >
              Add To Cart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
