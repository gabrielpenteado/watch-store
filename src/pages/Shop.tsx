import products from "../assets/products.tsx";
import { Card } from "../components/Card.js";

export function Shop() {
  const watchCards = products.map((watch) => (
    <Card key={watch.id} {...watch} />
  ));

  return (
    <main className="min-h-[80vh] bg-white">
      <div className="grid justify-items-center py-12 gap-y-8 text-center md:grid-cols-2 xl:grid-cols-4 mx-auto overflow-auto max-w-[80%]">
        {watchCards}
      </div>
    </main>
  );
}
