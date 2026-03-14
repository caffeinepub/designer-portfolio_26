import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep dive into user research and stakeholder interviews. Build empathy maps and identify pain points before any solution framing.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Synthesize research into clear problem statements and opportunity spaces. Frame the design challenge with measurable success criteria.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Rapid ideation through sketches and wireframes to high-fidelity prototypes. Iterate with the team and test assumptions early.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Ship polished, accessible, and developer-ready specs. Measure outcomes post-launch and iterate based on real-world data.",
    icon: "◆",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Methodology
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            My Design Process
          </h2>
          <div className="w-12 h-px bg-gold mt-6" />
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-background p-8 relative overflow-hidden group"
              data-ocid={`process.item.${i + 1}`}
            >
              {/* Giant background number — signature typographic detail */}
              <div
                className="absolute -top-4 -right-2 font-display font-bold text-gold/10 leading-none select-none pointer-events-none group-hover:text-gold/15 transition-colors duration-500"
                style={{ fontSize: "clamp(5rem, 10vw, 9rem)" }}
                aria-hidden="true"
              >
                {step.number}
              </div>

              {/* Step content */}
              <div className="relative z-10">
                <div className="text-gold text-2xl mb-6 font-mono">
                  {step.icon}
                </div>
                <div className="text-xs tracking-widest uppercase text-muted-foreground mb-2 font-mono">
                  Step {step.number}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-0 w-full h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
