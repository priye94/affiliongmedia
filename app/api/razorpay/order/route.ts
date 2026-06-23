import { razorpay } from "@/lib/razorpay";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    });

    return Response.json(order);
  } catch (error) {
    return Response.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}