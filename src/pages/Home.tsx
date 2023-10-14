import { Button } from "../components/Button";
import watch from "../assets/watch6.png";

export function Home() {
  return (
    <div className="relative min-h-[80vh] pt-14 md:pt-12 px-12">
      <section className=" flex flex-col-reverse md:flex-row justify-center align-middle items-center px-4">
        <div className="font-heading text-white text-4xl md:text-6xl lg:text-8xl">
          Don't waste
          <span className="text-sky-400 block mb-4"> your time </span>
          <Button path="shop">Buy it</Button>
        </div>
        <img
          src={watch}
          alt="watch"
          className=" h-[340px] md:h-[450px] lg:h-[600px]"
        />
      </section>
    </div>
  );
}
