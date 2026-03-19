import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Deep dive into user research and stakeholder interviews. Build empathy maps and identify pain points before any solution framing.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Synthesize research into clear problem statements and opportunity spaces. Frame the design challenge with measurable success criteria.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Rapid ideation through sketches and wireframes to high-fidelity prototypes. Iterate with the team and test assumptions early.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Ship polished, accessible, and developer-ready specs. Measure outcomes post-launch and iterate based on real-world data.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3">
            Methodology
          </p>
          <h2 className="text-5xl md:text-6xl font-bold">My Design Process</h2>
          <div className="w-12 h-px bg-gray-300 mt-6" />
        </motion.div>

        {/* Timeline — desktop horizontal, mobile vertical */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-[2.25rem] left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] h-px"
            style={{ background: "#e5e7eb" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-start lg:items-center text-left lg:text-center group"
                data-ocid={`process.item.${i + 1}`}
              >
                {/* Mobile: left vertical line connector */}
                <div className="lg:hidden flex items-start gap-6 w-full">
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* Circle */}
                    <div
                      className="w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 relative z-10"
                      style={{
                        borderColor: "#1a1a1a",
                        background: "transparent",
                      }}
                    >
                      <span
                        className="font-mono text-xs font-bold"
                        style={{ color: "#1a1a1a" }}
                      >
                        {step.number}
                      </span>
                    </div>
                    {/* Vertical connector between steps */}
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 mt-3"
                        style={{ background: "#e5e7eb", minHeight: "3rem" }}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="pb-4">
                    <h3 className="text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden lg:flex flex-col items-center text-center">
                  {/* Circle */}
                  <div
                    className="w-[4.5rem] h-[4.5rem] rounded-full border-2 flex items-center justify-center flex-shrink-0 relative z-10 mb-8 transition-all duration-500 group-hover:scale-110"
                    style={{
                      borderColor: "#1a1a1a",
                      background: "transparent",
                      boxShadow: "0 0 0 0px rgba(0,0,0,0.08)",
                    }}
                  >
                    <span
                      className="font-mono text-lg font-bold"
                      style={{ color: "#1a1a1a" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
