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
  const handlePayment = async (amount: number) => {
    try {
      const res = await fetch("/api/razorpay/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      if (!order?.id) {
        alert("Failed to create order");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Affilion G Media",
        description: "SaaS Plan Purchase",
        order_id: order.id,

        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/razorpay/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
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

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Try again.");
    }
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* 🖼️ BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/pricing.png')",
        }}
      />

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#050816]/80" />

      {/* 🌊 GLOW EFFECTS */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/15 blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-blue-500/15 blur-[160px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Pricing Plans
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                glass
                relative
                p-6 md:p-8
                rounded-2xl
                transition-all
                hover:border-cyan-400/30
                hover:scale-[1.03]
                ${plan.highlight ? "border-cyan-400/40" : ""}
              `}
            >

              {/* PLAN NAME */}
              <h3 className="text-xl font-semibold">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-3xl font-bold mt-4 text-cyan-400">
                {plan.price}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-2 text-slate-400 text-sm">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              {/* BUTTON */}
              <div className="mt-8">
                <MagneticButton>
                  <button
                    onClick={() => handlePayment(plan.amount)}
                    className="btn-primary w-full"
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