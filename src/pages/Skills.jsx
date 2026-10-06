import React from "react";

const QUALITIES = ["Organization", "Adaptability", "Attention to detail", "Confidentiality", "Management"];

// The one full gold field on the page: the qualities stated plainly in place of the old percentage bars.
const SkillsSection = () => (
  <section className="bg-gold py-20 text-ink md:py-28" aria-labelledby="skills-heading">
    <div className="shell grid gap-10 md:grid-cols-12 md:gap-8">
      <h2 id="skills-heading" className="display-m md:col-span-3">
        Professional skills
      </h2>
      <ul className="md:col-span-9">
        {QUALITIES.map((q) => (
          <li
            key={q}
            className="display-l border-t border-ink/25 py-3 first:border-t-0 first:pt-0 last:pb-0 md:py-4"
          >
            {q}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SkillsSection;
