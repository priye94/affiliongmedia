import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold">
          Affilion AI Agency OS
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
          AI-powered marketing platform for generating ads, branding ideas,
          and business growth strategies.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/dashboard" className="bg-blue-500 px-6 py-3 rounded">
            Open AI Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}