import Image from "next/image";
import Container from "@/components/ui/Container";

export default function ClientsSection() {
  return (
    <section className="py-24">
      <Container>

        <h2 className="text-center text-4xl font-bold mb-12">
          Trusted By Growing Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-2xl
                p-6
                flex items-center justify-center
                transition
                hover:border-cyan-400/30
                hover:scale-[1.03]
              "
            >
              <Image
                src={`/logos/logo${item}.jpg`}
                alt="logo"
                width={140}
                height={60}
                className="
                  grayscale
                  opacity-70
                  hover:grayscale-0
                  hover:opacity-100
                  transition
                "
              />
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}