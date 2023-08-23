export const ProductInfo = () => {
  return (
    <div className="min-h-[80vh] bg-[whitesmoke] lg:h-[90vh] ">
      <div className="text-gray-800 font-black md:flex md:justify-center">
        <img
          src="/src/assets/watch1.png"
          alt="watch"
          className="h-[400px] md:h-[600px] m-auto md:m-0"
        />
        <section className=" w-[80%] md:w-[30%] my-auto pl-14">
          <p className="text-2xl md:text-5xl font-heading  ">Title</p>
          <p className="font-normal text-sm normal-case pt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            id, blanditiis similique laborum sequi, reiciendis voluptates itaque
            at nobis earum deleniti architecto illum placeat praesentium, ad
            totam consectetur quaerat aperiam deserunt illo facilis. Hic,
            obcaecati laborum suscipit animi.
          </p>
          <p className="text-2xl mt-3 mb-8">$1000</p>
          <button className="bg-button-gradient font-heading text-white py-2 md:py-3 lg:py-4 px-2 md:px-6 lg:px-9 rounded-2xl text-2xl md:text-2xl font-black hover:text-black">
            Add to Cart
          </button>
        </section>
      </div>
    </div>
  );
};
