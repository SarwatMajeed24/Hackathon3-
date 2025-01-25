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

