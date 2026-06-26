  "use client";

  import { Mail, Phone } from "lucide-react";

  export default function ContactSection() {
    return (
      <section className="relative overflow-hidden bg-[#0b0f19]">

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            backgroundColor: "#0b0f19",
            backgroundImage: `
              radial-gradient(circle at 25px 25px,#12352d 25px,transparent 26px),
              radial-gradient(circle at 75px 75px,#12352d 25px,transparent 26px),
              linear-gradient(45deg,#143b34 25%,transparent 25%),
              linear-gradient(-45deg,#143b34 25%,transparent 25%)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <div className="grid items-center gap-20 lg:grid-cols-2">

            {/* LEFT */}

            <div>

              <p className="mb-5 uppercase tracking-[0.35em] text-[#00d4b4] text-sm font-semibold">
                CONTACT
              </p>

              <h2 className="text-5xl font-bold leading-tight text-white">
                Get in Touch with Us
              </h2>

              <p className="mt-6 max-w-md leading-8 text-gray-300">
                Let's discuss how Affiliong can elevate your business through
                innovative digital marketing solutions. Connect with us today
                for a free consultation.
              </p>

              <div className="mt-10 space-y-8">

                <div className="flex items-center gap-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00d4b4]/30 bg-[#00d4b4]/10">

                    <Mail className="h-5 w-5 text-[#00d4b4]" />

                  </div>

                  <div>

                    <p className="text-sm text-gray-400">
                      Email
                    </p>

                    <p className="text-lg font-medium text-white">
                      support@affiliong.com
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#00d4b4]/30 bg-[#00d4b4]/10">

                    <Phone className="h-5 w-5 text-[#00d4b4]" />

                  </div>

                  <div>

                    <p className="text-sm text-gray-400">
                      Phone
                    </p>

                    <p className="text-lg font-medium text-white">
                      +91 98765 43210
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex justify-center lg:justify-end">

              <div
                className="
                  w-full
                  max-w-lg
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#11161f]
                  p-8
                  shadow-[0_25px_80px_rgba(0,0,0,.45)]
                "
              >

                <h3 className="mb-6 text-xl font-semibold text-white">
                  Contact Form
                </h3>

                <form className="space-y-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="
                      h-12
                      w-full
                      rounded-lg
                      border
                      border-white/10
                      bg-[#1a202c]
                      px-4
                      text-white
                      placeholder:text-gray-500
                      focus:border-[#00d4b4]
                      focus:outline-none
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      h-12
                      w-full
                      rounded-lg
                      border
                      border-white/10
                      bg-[#1a202c]
                      px-4
                      text-white
                      placeholder:text-gray-500
                      focus:border-[#00d4b4]
                      focus:outline-none
                    "
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="
                      h-12
                      w-full
                      rounded-lg
                      border
                      border-white/10
                      bg-[#1a202c]
                      px-4
                      text-white
                      placeholder:text-gray-500
                      focus:border-[#00d4b4]
                      focus:outline-none
                    "
                  />

                  <textarea
                    rows={5}
                    placeholder="Message"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-white/10
                      bg-[#1a202c]
                      p-4
                      text-white
                      placeholder:text-gray-500
                      focus:border-[#00d4b4]
                      focus:outline-none
                      resize-none
                    "
                  />

                  <button
                    className="
                      h-12
                      w-full
                      rounded-lg
                      bg-gradient-to-r
                      from-[#00d4b4]
                      to-[#2563eb]
                      font-semibold
                      text-white
                      transition
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-[0_0_30px_rgba(0,212,180,.35)]
                    "
                  >
                    Send Message →
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>
    );
  }