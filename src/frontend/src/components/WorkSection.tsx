import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import CaseStudyModal, { type Project } from "./CaseStudyModal";

const projects: Project[] = [
  {
    title: "Product Description",
    description:
      "Redesigned the Product Description Screen Experience for 1.8 million users. Product Detail Engagement Increased by 40%.",
    tags: ["Mobile", "UX", "Figma"],
    cover: "/assets/uploads/PDP-1.png",
    mockup: "/assets/uploads/PDP-1.png",
    year: "2024",
    role: "Product Designer",
    tools: ["Figma", "Miro", "Relume"],
    duration: "3 Months",
    overview:
      "This project focuses on redesigning a Product Description Page for an agriculture product marketplace. The goal was to improve product clarity, simplify purchase decisions, and increase user engagement by restructuring information hierarchy, improving visuals, and making key product details easier to understand.",
    problem:
      "The existing product page had poor information hierarchy, cluttered content, and low visual emphasis on important elements like dosage, ingredients, and variants. Users struggled to quickly understand product benefits, resulting in lower engagement, confusion, and reduced product add-to-cart conversions.",
    solution:
      "The redesign focused on improving content hierarchy, visual clarity, and usability. Key product details such as variants, dosage, benefits, and target crops were reorganized into structured sections. Clear call-to-action buttons, improved product imagery, and simplified layout enhanced decision-making and usability.",
    outcome:
      "After redesigning the product page, users were able to understand product information faster and navigate content easily. The improved layout increased user engagement, reduced confusion, and helped users make quicker purchase decisions, ultimately improving product interaction and conversions.",
    caseStudyUrl:
      "https://www.figma.com/design/Lm3YebADVUvFfTA2NXyQtX/Beniwal?node-id=1985-16498&t=QCC1OpzWB7Zu5BXK-1",
  },
  {
    title: "Nova Commerce",
    description:
      "End-to-end e-commerce platform redesign focused on conversion optimization and accessibility.",
    tags: ["Web", "E-Commerce", "A11y"],
    cover: "/assets/generated/project-2.dim_800x500.jpg",
    year: "2023",
    role: "Senior Product Designer",
    tools: ["Figma", "Hotjar", "Notion", "Storybook"],
    duration: "6 months",
    overview:
      "Nova Commerce is a D2C fashion brand that needed a complete digital overhaul to compete with top-tier e-commerce experiences. I owned the full redesign from discovery through handoff, with a specific mandate to improve conversion rates and meet WCAG 2.1 AA accessibility standards.",
    problem:
      "Session recordings revealed a 68% cart abandonment rate on mobile. The existing checkout flow had 9 steps, lacked clear progress indicators, and the product detail pages buried the add-to-cart action below the fold. Screen reader testing showed critical failures in form labeling and focus management.",
    solution:
      "I redesigned the checkout into a 4-step wizard with persistent order summary and inline validation. Product pages were rebuilt with a sticky purchase bar on mobile. A full accessibility audit drove 60+ component-level fixes. All changes were documented in a new Storybook-based design system.",
    outcome:
      "Cart abandonment dropped from 68% to 41%. Mobile conversion rate grew by 22%. Accessibility score went from 61 to 94 on Lighthouse. The new design system reduced developer handoff time by 35% on subsequent feature work.",
    caseStudyUrl: "",
  },
  {
    title: "Pulse Design System",
    description:
      "Built a scalable design system used across 6 product teams, cutting design time by 30%.",
    tags: ["Design System", "Figma", "Tokens"],
    cover: "/assets/generated/project-3.dim_800x500.jpg",
    year: "2023",
    role: "Design Systems Lead",
    tools: ["Figma", "Tokens Studio", "Zeroheight", "GitHub"],
    duration: "8 months",
    overview:
      "Pulse is the design system I architected and built for a Series B SaaS company, adopted by 6 product teams and 12 engineers. It covers 80+ components, a full token architecture, and a documentation site that made it genuinely self-serve from day one.",
    problem:
      "The company had 3 separate design files in Figma, none of which matched the codebase. Engineers were rebuilding common UI patterns repeatedly. Each product had a different visual language, making the platform feel incoherent to users moving between modules.",
    solution:
      "I started with a full UI audit, cataloguing 400+ unique UI instances down to 80 reusable components. Built a semantic token system (primitive → semantic → component) synced between Figma and code via Tokens Studio. Wrote a Zeroheight documentation site with usage guidelines, do/don't examples, and Figma embed previews for every component.",
    outcome:
      "Design time on new features dropped 30%. Cross-team visual consistency issues fell by 85% in quarterly design reviews. Three new designers onboarded in under 2 days using the documentation alone. The system has been maintained and extended for 18 months with zero major regressions.",
    caseStudyUrl: "",
  },
];

/** Android phone mockup wrapping an image for the Project 1 card thumbnail */
function AndroidMockupThumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
      {/* Phone outer shell */}
      <div
        className="relative flex flex-col"
        style={{
          width: "38%",
          aspectRatio: "9/18",
          background: "#1a1a1a",
          borderRadius: "2rem",
          border: "2.5px solid #3a3a3a",
          boxShadow: "0 8px 32px rgba(0,0,0,0.7), inset 0 0 0 1px #2a2a2a",
          padding: "6% 3% 4% 3%",
        }}
      >
        {/* Status bar */}
        <div
          className="flex items-center justify-between px-1 mb-1 shrink-0"
          style={{ height: "6%" }}
        >
          <span
            style={{
              fontSize: "0.45rem",
              color: "#aaa",
              fontFamily: "monospace",
            }}
          >
            9:41
          </span>
          <div
            style={{
              width: "18%",
              height: "4px",
              background: "#333",
              borderRadius: "999px",
            }}
          />
          <div className="flex gap-0.5 items-center">
            <div
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "#aaa",
              }}
            />
            <div
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "#aaa",
              }}
            />
          </div>
        </div>

        {/* Screen area */}
        <div
          className="flex-1 overflow-hidden relative"
          style={{ borderRadius: "0.6rem", background: "#000" }}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Home indicator */}
        <div
          className="flex justify-center items-center shrink-0"
          style={{ height: "6%" }}
        >
          <div
            style={{
              width: "30%",
              height: "3px",
              background: "#555",
              borderRadius: "999px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              onClick={() => setSelectedProject(project)}
              className="group relative bg-card border border-border overflow-hidden cursor-pointer"
            >
              {/* Cover / Thumbnail */}
              <div className="relative overflow-hidden aspect-[8/5]">
                {i === 0 ? (
                  <AndroidMockupThumbnail
                    src={project.cover}
                    alt={project.title}
                  />
                ) : (
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
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

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
