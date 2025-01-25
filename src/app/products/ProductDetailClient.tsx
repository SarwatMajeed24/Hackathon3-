"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import AddToBag from "@/app/components/AddToBag";
import CheckoutNow from "@/app/components/CheckoutNow";

export default function ProductDetailClient({ product }: { product: any }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg object-contain w-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

          <p className="text-base lg:text-lg text-gray-600 mb-6">{product.description}</p>

          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Available Sizes:</h2>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleSizeSelect(size)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedSize === size
                        ? "border-indigo-500 text-indigo-500"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Available Colors:</h2>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => handleColorSelect(color)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedColor === color
                        ? "border-indigo-500 text-white"
                        : "border-gray-300 text-gray-600"
                    }`}
                    style={{ backgroundColor: color }}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <p className="text-xl lg:text-2xl font-semibold text-indigo-600 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex flex-wrap gap-4">
            <AddToBag
              currency="USD"
              description={product.description}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              key={product._id}
              price_id={product.price_id}
              size={selectedSize}
              color={selectedColor}
            />
            <CheckoutNow
              currency="USD"
              description={product.description}
              image={product.imageUrl}
              name={product.name}
              price={product.price}
              key={product._id}
              price_id={product.price_id}
              size={selectedSize}
              color={selectedColor}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
