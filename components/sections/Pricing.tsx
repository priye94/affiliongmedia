"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    features: ["Landing Page", "Basic SEO", "Setup"],
  },
  {
    name: "Growth",
    price: "₹45,000",
    features: ["SaaS Build", "Automation", "Ads Setup"],
  },
  {
    name: "Enterprise",
    price: "₹1,25,000",
    features: ["Full AI System", "Scaling Infra", "Dedicated Team"],
  },
];

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto mt-40 px-6 text-center">

      <h2 className="text-4xl font-bold">Pricing Designed to Scale</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-6">

        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-3xl font-bold mt-3">{plan.price}</p>

            <ul className="mt-4 text-white/60 text-sm space-y-2">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <button className="mt-6 px-5 py-2 bg-blue-600 rounded-xl">
              Pay with Razorpay
            </button>
          </motion.div>
        ))}

      </div>

    </section>
  );
}