// import { NextApiRequest, NextApiResponse } from "next";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { cartDetails } = req.body;

//     const lineItems = Object.values(cartDetails).map((item: any) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//           images: [item.image],
//         },
//         unit_amount: item.price * 100,
//       },
//       quantity: item.quantity,
//     }));

//     try {
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: lineItems,
//         mode: "payment",
//         success_url: `${req.headers.origin}/checkout-success`,
//         cancel_url: `${req.headers.origin}/checkout-error`,
//       });

//       res.status(200).json({ id: session.id });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

// import { NextApiRequest, NextApiResponse } from "next";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { cartDetails } = req.body;

//     if (!cartDetails || Object.keys(cartDetails).length === 0) {
//       return res.status(400).json({ error: "Cart details are required." });
//     }

//     const lineItems = Object.values(cartDetails).map((item: any) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//           images: [item.image],
//         },
//         unit_amount: Math.round(item.price * 100), // Ensure price is an integer
//       },
//       quantity: item.quantity,
//     }));

//     try {
//       const session = await stripe.checkout.sessions.create({
//         payment_method_types: ["card"],
//         line_items: lineItems,
//         mode: "payment",
//         success_url: `${req.headers.origin}/checkout-success`,
//         cancel_url: `${req.headers.origin}/checkout-error`,
//       });

//       res.status(200).json({ id: session.id });
//     } catch (error) {
//       console.error("Stripe API error:", error);

//       if (error instanceof Error) {
//         res.status(500).json({ error: error.message });
//       } else {
//         res.status(500).json({ error: "An unknown error occurred." });
//       }
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end("Method Not Allowed");
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { cartDetails } = body;

//     if (!cartDetails || Object.keys(cartDetails).length === 0) {
//       return NextResponse.json(
//         { error: "Cart details are required." },
//         { status: 400 }
//       );
//     }

//     const lineItems = Object.values(cartDetails).map((item: any) => ({
//       price_data: {
//         currency: "usd",
//         product_data: {
//           name: item.name,
//           images: [item.image],
//         },
//         unit_amount: Math.round(item.price * 100), // Ensure price is an integer
//       },
//       quantity: item.quantity,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: lineItems,
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_STRIPE_KEY}/checkout-success`,
//       cancel_url: `${process.env.NEXT_PUBLIC_STRIPE_KEY}/checkout-error`,
//     });

//     return NextResponse.json({ id: session.id }, { status: 200 });
//   } catch (error) {
//     console.error("Error creating Stripe Checkout session:", error);
//     return NextResponse.json(
//       { error: "An error occurred while creating the session." },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { cartDetails } = body;

    if (!cartDetails || Object.keys(cartDetails).length === 0) {
      return NextResponse.json(
        { error: "Cart details are required." },
        { status: 400 }
      );
    }

    const lineItems = Object.values(cartDetails).map((item: any) => ({
      price_data: {
        currency: "usd", // Ensure the currency is correct
        product_data: {
          name: item.name || "Unknown Item", // Fallback for missing name
          images: item.image ? [item.image] : [], // Optional image array
        },
        unit_amount: Math.round(item.price * 100), // Convert price to cents
      },
      quantity: item.quantity || 1, // Fallback to quantity of 1 if missing
    }));

    console.log("Line Items:", JSON.stringify(lineItems, null, 2));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-error`,
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (error: any) {
    console.error("Stripe API Error:", error.message);
    return NextResponse.json(
      { error: "An error occurred while creating the session." },
      { status: 500 }
    );
  }
}

