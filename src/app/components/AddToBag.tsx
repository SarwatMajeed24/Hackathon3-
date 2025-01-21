// "use client";

// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";
// import { urlFor } from "@/sanity/lib/image"

// export interface ProductCart {
//   name: string;
//   description: string;
//   price: number;
//   currency: string;
//   image: any;
//   price_id: string;
// }

// export default function AddToBag({
//   currency,
//   description,
//   image,
//   name,
//   price,
//   price_id,
// }: ProductCart) {
//   const { addItem, handleCartClick } = useShoppingCart();

//   const product = {
//     name: name,
//     description: description,
//     price: price,
//     currency: currency,
//     image: urlFor(image).url(),
//     price_id: price_id,
//   };
//   return (
//     <Button
//       onClick={() => {
//         addItem(product), handleCartClick();
//       }}
//     >
//       Add To Cart
//     </Button>
//   );
// }

// "use client";

// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";
// import { urlFor } from "@/sanity/lib/image";

// export interface ProductCart {
//   name: string;
//   description: string;
//   price: number;
//   currency: string;
//   image: string;
//   price_id: string;
// }

// export default function AddToBag({
//   currency,
//   description,
//   image,
//   name,
//   price,
//   price_id,
// }: ProductCart) {
//   const { addItem, handleCartClick } = useShoppingCart();

//   const product = {
//     name: name,
//     description: description,
//     price: price,
//     currency: currency,
//     image: urlFor(image).url(),
//     price_id: price_id,
//   };

//   return (
//     <Button
//       onClick={() => {
//         addItem(product);
//         handleCartClick();
//       }}
//       className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
//     >
//       Add To Cart
//     </Button>
//   );
// }



// import ProductDetailClient from "./ProductDetailClient"; // Import the Client Component
// import { client } from "@/sanity/lib/client";

// export default async function ProductDetail({ params }: { params: { id: string } }) {
//   // Fetch product data from Sanity
//   const product = await client.fetch(
//     `
//     *[_type == "products" && _id == $id][0]{
//       _id,
//       name,
//       description,
//       price,
//       discountPercentage,
//       sizes,
//       color,
//       "imageUrl": image.asset->url
//     }
//   `,
//     { id: params.id }
//   );

//   // If the product is not found, show a message
//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   // Pass the fetched product data to the Client Component
//   return <ProductDetailClient product={product} />;
// }

"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: {
  currency: string;
  description: string;
  image: string;
  name: string;
  price: number;
  price_id: string;
}) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };
  console.log(product)

  return (
    <Button
      onClick={() => {
        addItem(product); // Add product to cart
        handleCartClick(); // Open cart modal
      }}
      className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
    >
      Add To Cart
    </Button>
  );
}
