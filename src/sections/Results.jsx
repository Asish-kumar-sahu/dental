import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/siteConfig";
import { SectionLabel, DualHeading } from "../components/Headings";

export default function Results() {
  const { results, theme } = siteConfig;

  return (
    <section id="results" className="relative py-24 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <div className="flex justify-center">
            <SectionLabel centered>{results.sectionLabel}</SectionLabel>
          </div>
          <DualHeading
            line1={results.heading.line1}
            line2={results.heading.line2}
            centered
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base leading-relaxed"
            style={{ color: theme.textMuted }}
          >
            {results.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {[
            "public/images/results/result-1-after.jpg",
            "public/images/results/result-1-before.jpg",
            "public/images/results/result-2-after.jpg",
            "public/images/results/result-2-before.jpg",
          ].map((image, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden border"
              style={{
                background: theme.bgSecondary,
                borderColor: theme.border,
              }}
            >
              <img
                src={image}
                alt={`Dental result ${index + 1}`}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
