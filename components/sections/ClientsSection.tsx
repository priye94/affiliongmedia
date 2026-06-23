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
              className="bg-white rounded-xl p-6"
            >
              <Image
                src={`/logos/logo${item}.svg`}
                alt="logo"
                width={150}
                height={60}
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}