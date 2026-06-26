"use client";

import { motion } from "framer-motion";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "./data";

export default function FAQ() {
  return (
    <section className="bg-[#090B12] py-28">

      <div className="container mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-300">
            Everything you need to know about AffliogMedia.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Accordion title={faq.question}>
                {faq.answer}
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  );
}