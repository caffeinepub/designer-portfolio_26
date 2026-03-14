import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "FinTrack App",
    description:
      "Redesigned the mobile banking experience for 2M+ users, increasing engagement by 40%.",
    tags: ["Mobile", "FinTech", "iOS"],
    cover: "/assets/generated/project-1.dim_800x500.jpg",
    year: "2024",
  },
  {
    title: "Nova Commerce",
    description:
      "End-to-end e-commerce platform redesign focused on conversion optimization and accessibility.",
    tags: ["Web", "E-Commerce", "A11y"],
    cover: "/assets/generated/project-2.dim_800x500.jpg",
    year: "2023",
  },
  {
    title: "Pulse Design System",
    description:
      "Built a scalable design system used across 6 product teams, cutting design time by 30%.",
    tags: ["Design System", "Figma", "Tokens"],
    cover: "/assets/generated/project-3.dim_800x500.jpg",
    year: "2023",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Selected Work
          </h2>
          <div className="w-12 h-px bg-gold mt-6" />
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
              data-ocid={`work.item.${i + 1}`}
              className="group relative bg-card border border-border overflow-hidden cursor-pointer"
            >
              {/* Cover image */}
              <div className="relative overflow-hidden aspect-[8/5]">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 font-mono text-xs tracking-widest text-foreground/70 bg-background/60 backdrop-blur-sm px-2 py-1">
                  {project.year}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-gold font-semibold text-sm tracking-wide uppercase border border-gold px-6 py-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Case Study <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs font-medium border-border text-muted-foreground rounded-none px-2 py-0.5 tracking-wide"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
