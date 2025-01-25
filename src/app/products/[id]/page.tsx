import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/app/products/ProductDetailClient";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  // Fetch the product data
  const product = await client.fetch(
    `
    *[_type == "products" && _id == $id][0]{
      _id,
      name,
      description,
      price,
      discountPercentage,
      sizes,
      colors,
      "imageUrl": image.asset->url
    }
  `,
    { id: params.id }
  );

  // If no product is found, show a 404 page
  if (!product) {
    notFound();
  }

  // Pass the product data to the client component
  return <ProductDetailClient product={product} />;
}
