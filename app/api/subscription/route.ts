import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: "PRICE_ID_HERE",
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/dashboard",
      cancel_url: "http://localhost:3000/pricing",
    });

    return Response.json(session);
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false, message: "Stripe error" },
      { status: 500 }
    );
  }
}