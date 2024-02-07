import { notFound } from "next/navigation";
import Image from "next/image";
import { IProduct } from "@/types/types";
import { Metadata } from "next";

interface ProductPageProps{
    params : {
        id: number,
    }
}

export async function generateMetaData({params:{id}}:ProductPageProps) : Promise<Metadata>{
    const product : IProduct = await fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json())

    return{
        title: product.title,
        description: product.description,
        openGraph: {
            images: [{url: product.image}],
        },
    }
    
}

export default async function ProductPage({params:{id}} : ProductPageProps){
    const product : IProduct = await fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json())
    if (!product) notFound()
    
    return(
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center p-11">
            <Image 
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="rounded-lg"
                priority
            />
            <div>
                <h1 className="text-5xl font-bold">{product.title}</h1>
                <p className="py-6">{product.category}</p>
                <p className="py-6">{product.description}</p>
                Price <br />
                <span className="badge mt-4">${product.price}</span>
                {/* button */}
            </div>
        </div>
    );
}