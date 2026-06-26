import Reveal from "@/components/ui/Reveal";

export default function WhyUs() {
  return (
    <section className="py-28 bg-[#070A12]">

      <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-center">

        <Reveal>
          <h2 className="text-4xl font-bold">
            Why Brands Choose Us
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-slate-300 leading-8">
            We combine data science, creative strategy, and performance marketing
            to deliver measurable growth at scale.
          </p>
        </Reveal>

      </div>

    </section>
  );
}