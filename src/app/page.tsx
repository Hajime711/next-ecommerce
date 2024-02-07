import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types/types";
import Image from "next/image";

export default async function Home() {
  const products = await fetch('https://fakestoreapi.com/products').then(res=>res.json())

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-11">
      <div className="my-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.slice(1).map((product : IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </main>
  );
}
