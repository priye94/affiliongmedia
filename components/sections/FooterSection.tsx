export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-xl font-bold">
              Affilion G Media
            </h2>

            <p className="text-slate-400 mt-4 text-sm leading-6">
              AI-powered growth infrastructure company building SaaS systems,
              automation, and performance marketing engines.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>AI Systems</li>
              <li>Automation</li>
              <li>Growth Engine</li>
              <li>SaaS Tools</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>About</li>
              <li>Case Studies</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Refund Policy</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 my-10"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} Affilion G Media. All rights reserved.
          </p>

          <p>
            Built with AI • SaaS Infrastructure • Digital Growth Systems
          </p>

        </div>

      </div>

    </footer>
  );
}