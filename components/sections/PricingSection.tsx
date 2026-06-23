"use client";

import MagneticButton from "@/components/ui/MagneticButton";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    amount: 15000,
    features: ["Landing Page", "Basic SEO", "Support"],
  },
  {
    name: "Growth",
    price: "₹45,000",
    amount: 45000,
    features: ["Full Website", "SEO + Ads", "Automation"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "₹1,25,000",
    amount: 125000,
    features: ["Custom SaaS", "AI Systems", "Full Stack Infra"],
  },
];

export default function PricingSection() {
  // 🚀 RAZORPAY PAYMENT HANDLER
  const handlePayment = async (amount: number) => {
    try {
      // 1. Create order from backend
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      if (!order?.id) {
        alert("Failed to create order");
        return;
      }

      // 2. Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Affilion G Media",
        description: "SaaS Plan Purchase",
        order_id: order.id,

        handler: async function (response: any) {
          try {
            // 3. Verify payment
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(response),
            });

            const data = await verifyRes.json();

            if (data?.success) {
              alert("Payment Successful 🚀");
            } else {
              alert("Payment verification failed");
            }
          } catch (err) {
            console.error("Verification error:", err);
          }
        },
      };

      // 3. Open Razorpay checkout
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Try again.");
    }
  };

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                p-8 rounded-2xl border transition
                bg-[#0b1224]
                hover:scale-[1.03]
                duration-300
                ${plan.highlight
                  ? "border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                  : "border-white/10"
                }
              `}
            >

              <h3 className="text-xl font-semibold">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold mt-4 text-cyan-400">
                {plan.price}
              </p>

              <ul className="mt-6 space-y-2 text-slate-400 text-sm">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              {/* MAGNETIC BUTTON + RAZORPAY */}
              <div className="mt-8">
                <MagneticButton>
                  <button
                    onClick={() => handlePayment(plan.amount)}
                    className="mt-8 w-full py-3 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
                  >
                    Get Started
                  </button>
                </MagneticButton>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}