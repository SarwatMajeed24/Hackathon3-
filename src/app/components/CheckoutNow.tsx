"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";
// import { ProductCart } from "./AddToBag";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      variant="outline"
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout Now
    </Button>
  );
}

// "use client";

// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";

// export default function CheckoutNow({
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
//   const { redirectToCheckout } = useShoppingCart();

//   async function handleCheckout() {
//     try {
//       const result = await redirectToCheckout([{ price_id, quantity: 1 }]);
//       if (result?.error) {
//         console.error(result.error);
//       }
//     } catch (error) {
//       console.error("Checkout Error:", error);
//     }
//   }

//   return (
//     <Button
//       onClick={handleCheckout}
//       className="border border-gray-300 text-gray-700 hover:bg-gray-100 py-2 px-4 rounded-lg"
//     >
//       Checkout Now
//     </Button>
//   );
// }

// "use client";

// import { useShoppingCart } from "use-shopping-cart";
// import { Button } from "@/components/ui/button";

// export default function CheckoutNow({ product }: { product: any }) {
//   const { redirectToCheckout } = useShoppingCart();

//   const handleCheckout = async () => {
//     try {
//       const result = await redirectToCheckout({
//         lineItems: [{ price: product._id, quantity: 1 }],
//         mode: "payment",
//         successUrl: `${window.location.origin}/success`,
//         cancelUrl: `${window.location.origin}/cancel`,
//       });
//       if (result?.error) {
//         console.error(result.error);
//       }
//     } catch (error) {
//       console.error("Checkout error:", error);
//     }
//   };

//   return (
//     <Button onClick={handleCheckout}>
//       Checkout Now
//     </Button>
//   );
// }

