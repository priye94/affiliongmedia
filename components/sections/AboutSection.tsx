import Container from "@/components/ui/Container";

export default function AboutSection() {
  return (
    <section className="py-32 section-gradient">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
              About Affilion
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Transforming Businesses Through Technology
            </h2>
          </div>

          <div>
            <p className="text-slate-400 leading-8">
              We combine AI, SaaS development, cloud infrastructure,
              automation and performance marketing into a single
              growth system.
            </p>

            <ul className="mt-8 space-y-4">
              <li>✓ AI-powered automation systems</li>
              <li>✓ Full-stack SaaS development</li>
              <li>✓ Scalable cloud infrastructure</li>
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}