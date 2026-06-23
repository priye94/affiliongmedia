"use client";

import { motion } from "framer-motion";

export default function CTA() {
  async function payNow() {
    const res = await fetch("/api/payment", { method: "POST" });
    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Affilion G Media",
      order_id: order.id,
      handler: function (response: any) {
        alert("Payment Successful!");
        console.log(response);
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2 className="text-4xl font-bold">
          Ready to build your growth system?
        </motion.h2>

        <motion.p className="mt-4 text-white/60">
          Let’s design your next-generation digital infrastructure.
        </motion.p>

        <motion.button
          onClick={payNow}
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl"
        >
          Pay ₹499 Now
        </motion.button>

      </div>
    </section>
  );
}