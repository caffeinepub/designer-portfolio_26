import { motion } from "motion/react";

const skills = [
  "Figma",
  "Prototyping",
  "User Research",
  "Interaction Design",
  "Design Systems",
  "Accessibility",
];

const stats = [
  { value: "7", unit: "Years", label: "Experience" },
  { value: "40+", unit: "Projects", label: "Delivered" },
  { value: "15", unit: "Clients", label: "Worldwide" },
  { value: "3", unit: "Awards", label: "Design" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">
              About
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Craft over
              <br />
              <span className="italic">convention.</span>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Hi, I&apos;m Alex. With 7 years of experience designing digital
              products, I bridge the gap between user needs and business goals.
              I&apos;ve worked with startups and Fortune 500 companies across
              fintech, e-commerce, and SaaS.
            </p>

            <div className="w-12 h-px bg-gold mb-10" />

            {/* Skills grid */}
            <div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-5">
                Expertise
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="border border-border px-4 py-2.5 text-sm font-medium text-foreground/90 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:pt-20"
          >
            <div className="grid grid-cols-2 gap-px bg-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="bg-card p-10 flex flex-col justify-between min-h-40"
                  data-ocid={`about.stat.${i + 1}`}
                >
                  <div className="font-display text-5xl md:text-6xl font-bold text-gold leading-none">
                    {stat.value}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground tracking-widest uppercase mt-4">
                      {stat.unit}
                    </div>
                    <div className="text-sm font-medium text-foreground/80">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
