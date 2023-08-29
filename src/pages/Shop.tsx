import products from "../assets/products.tsx";
import { Card } from "../components/Card.js";

export function Shop() {
  const watchCards = products.map((item) => <Card key={item.id} {...item} />);

  return (
    <main className="min-h-[80vh] bg-[whitesmoke]">
      <div className="grid justify-items-center py-12 gap-y-8 text-center md:grid-cols-2 xl:grid-cols-4 mx-auto overflow-auto max-w-[80%]">
        {watchCards}
      </div>
    </main>
  );
}
