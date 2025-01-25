// "use client";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet";

// import Image from "next/image";
// import { useShoppingCart } from "use-shopping-cart";

// export default function ShoppingCartModal() {
//   const {
//     cartCount,
//     shouldDisplayCart,
//     handleCartClick,
//     cartDetails,
//     removeItem,
//     totalPrice,
//     redirectToCheckout,
//   } = useShoppingCart();

//   async function handleCheckoutClick(event: any) {
//     event.preventDefault();
//     try {
//       const result = await redirectToCheckout();
//       if (result?.error) {
//         console.error("Checkout error:", result.error);
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//     }
//   }

//   return (
//     <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
//       <SheetContent className="sm:max-w-lg w-[90vw]">
//         <SheetHeader>
//           <SheetTitle>Shopping Cart</SheetTitle>
//         </SheetHeader>

//         <div className="h-full flex flex-col justify-between">
//           <div className="mt-8 flex-1 overflow-y-auto">
//             <ul className="-my-6 divide-y divide-gray-200">
//               {cartCount === 0 ? (
//                 <h1 className="py-6">You don’t have any items</h1>
//               ) : (
//                 <>
//                   {Object.values(cartDetails ?? {}).map((entry) => (
//                     <li key={entry.id} className="flex py-6">
//                       <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                         {entry.image ? (
//                           <Image
//                             src={entry.image}
//                             alt={entry.name || "Product image"}
//                             width={100}
//                             height={100}
//                             className="object-cover"
//                             onError={(e) => {
//                               console.error(
//                                 "Image failed to load:",
//                                 entry.image
//                               ); // Debugging log
//                             }}
//                           />
//                         ) : (
//                           <Image
//                             src="/placeholder-image.png" // Placeholder image
//                             alt="Placeholder image"
//                             width={100}
//                             height={100}
//                             className="object-cover"
//                           />
//                         )}
//                       </div>

//                       <div className="ml-4 flex flex-1 flex-col">
//                         <div>
//                           <div className="flex justify-between text-base font-medium text-black">
//                             <h3>{entry.name}</h3>
//                             <p className="ml-4">${entry.price}</p>
//                           </div>
//                           <p className="mt-1 text-sm text-gray-500 line-clamp-2">
//                             {entry.description}
//                           </p>
//                         </div>

//                         <div className="flex flex-1 items-end justify-between text-sm">
//                           <p className="text-gray-500">QTY: {entry.quantity}</p>

//                           <div className="flex">
//                             <button
//                               type="button"
//                               onClick={() => removeItem(entry.id)}
//                               className="font-medium text-primary hover:text-primary/80"
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </>
//               )}
//             </ul>
//           </div>

//           <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//             <div className="flex justify-between text-base font-medium text-black">
//               <p>Subtotal:</p>
//               <p>${totalPrice}</p>
//             </div>
//             <p className="mt-0.5 text-sm text-black">
//               Shipping and taxes are calculated at checkout.
//             </p>

//             <div className="mt-6">
//               <Button onClick={handleCheckoutClick} className="w-full">
//                 Checkout
//               </Button>
//             </div>

//             <div className="mt-6 flex justify-center text-center text-sm text-black">
//               <p>
//                 OR{" "}
//                 <button
//                   onClick={() => handleCartClick()}
//                   className="font-medium text-primary hover:text-primary/80"
//                 >
//                   Continue Shopping
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// }
"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
    totalPrice,
  } = useShoppingCart();

  async function handleCheckoutClick(event: any) {
    event.preventDefault();

    const stripe = await stripePromise;

    try {
      // Create a Checkout session through your backend
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartDetails }),
      });

      const session = await response.json();

      if (session.id) {
        // Redirect to Stripe Checkout
        await stripe?.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error("Error creating session:", session);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between bg-gradient-to-br from-yellow-100 via-orange-100 to-red-50 ">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don’t have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-black">
                        {entry.image ? (
                          <Image
                            src={entry.image}
                            alt={entry.name || "Product image"}
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                        ) : (
                          <Image
                            src="/placeholder-image.png"
                            alt="Placeholder image"
                            width={100}
                            height={100}
                            className="object-cover"
                          />
                        )}
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-black">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center gap-2 border-">
                            <button
                              onClick={() => decrementItem(entry.id)}
                              className="px-2 py-1 border rounded-md text-black hover:bg-gray-200"
                            >
                              -
                            </button>
                            <span className="text-black">{entry.quantity}</span>
                            <button
                              onClick={() => incrementItem(entry.id)}
                              className="px-2 py-1 border rounded-md text-black hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>
                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-black">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-black">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button onClick={handleCheckoutClick} className="w-full">
                Checkout
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-black">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
