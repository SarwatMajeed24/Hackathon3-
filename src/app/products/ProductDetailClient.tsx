"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";

export default function ProductDetailClient({ product }: { product: any }) {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Product Image */}
        <div className="w-full mb-6">
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg object-contain"
          />
        </div>

        {/* Product Name */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">{product.name}</h1>

        {/* Product Description */}
        <p className="text-lg text-gray-600 mb-6 text-center">{product.description}</p>

        {/* Sizes Section */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-6 text-center">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Available Sizes:</h2>
            <div className="flex justify-center gap-2">
              {product.sizes.map((size: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <p className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
          ${product.price.toFixed(2)}
        </p>

        {/* Add to Cart and Checkout Buttons */}
        <div className="flex gap-4 justify-center">
          <AddToBag
            currency="USD"
            description={product.description}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
            key={product._id}
            price_id={product._id}
          />
          <CheckoutNow
            currency="USD"
            description={product.description}
            image={product.imageUrl}
            name={product.name}
            price={product.price}
            key={product._id}
            price_id={product._id}
          />
        </div>
      </div>
    </section>
  );
}
