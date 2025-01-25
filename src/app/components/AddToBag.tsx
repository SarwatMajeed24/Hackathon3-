// "use client";

// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";
// import { urlFor } from "@/sanity/lib/image";

// export default function AddToBag({
//   currency,
//   description,
//   image,
//   name,
//   price,
//   price_id,
// }: {
//   currency: string;
//   description: string;
//   image: string;
//   name: string;
//   price: number;
//   price_id: string;
// }) {
//   const { addItem, handleCartClick } = useShoppingCart();

//   const product = {
//     name,
//     description,
//     price,
//     currency,
//     image: urlFor(image).url(),
//     price_id,
//   };
//   console.log(product)

//   return (
//     <Button
//       onClick={() => {
//         addItem(product); // Add product to cart
//         handleCartClick(); // Open cart modal
//       }}
//       className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
//     >
//       Add To Cart
//     </Button>
//   );
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
  size,
  color,
}: {
  currency: string;
  description: string;
  image: string;
  name: string;
  price: number;
  price_id: string;
  size: string | null,
  color: string | null,

}) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
    size: size,
    color: color,
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


