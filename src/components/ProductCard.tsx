import { IProduct } from "@/types/types";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
    product: IProduct;
}

export default function ProductCard({product}:ProductCardProps){
    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link href={"/products/"+product.id}>
                <figure>
                    <Image 
                        src={product.image}
                        alt={product.title}
                        width={800}
                        height={400}
                        className="h-60 object-fill rounded-lg"
                        priority
                    />
                </figure>
                <div className="px-6 py-4">
                    <h2 className="font-bold text-xl mb-2">
                        {product.title}
                    </h2>
                    {product.category}
                    <p className="text-gray-700 text-base">{product.description}</p>
                    Price <span className="badge font-bold">${product.price}</span>
                </div>
            </Link>
        </div>
    )
}