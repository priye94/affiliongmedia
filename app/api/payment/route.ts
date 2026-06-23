import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST() {
  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_SECRET!,
  });

  const order = await instance.orders.create({
    amount: 49900, // ₹499
    currency: "INR",
    receipt: "order_rcptid_11",
  });

  return NextResponse.json(order);
}