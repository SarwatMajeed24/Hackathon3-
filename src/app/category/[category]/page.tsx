import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// Function to fetch products based on category
async function getProductsByCategory(category: string) {
  const products = await client.fetch(
    `
      *[_type == "products" && category == $category]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        category,
        colors,
        sizes,
        "imageUrl": image.asset->url
      }
    `,
    { category }
  );
  return products;
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const products = await getProductsByCategory(category);

  if (products.length === 0) {
    return (
      <h1 className="text-center text-2xl font-bold mt-12">
        No products found in {category}
      </h1>
    );
  }

  return (
    <section className="min-h-screen py-12 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 ">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Products in {category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product: any) => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg p-4">
              <Image
                src={urlFor(product.imageUrl).url()}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-lg object-cover"
              />
              <h2 className="text-2xl font-bold mt-4 text-gray-700">{product.name}</h2>
              <p className="text-yellow-600 font-semibold mt-2">
                ${product.price.toFixed(2)}
              </p>
              {product.discountPercentage && (
                <p className="text-red-500 font-medium mt-1">
                  Save {product.discountPercentage}%!
                </p>
              )}
              {/* Button to navigate to product detail page */}
              <Link
                href={`/products/${product._id}`}
                className="mt-4 inline-block text-center bg-yellow-600 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


