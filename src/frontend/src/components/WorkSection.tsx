import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import CaseStudyModal, { type Project } from "./CaseStudyModal";

const projects: Project[] = [
  {
    title: "FinTrack App",
    description:
      "Redesigned the mobile banking experience for 2M+ users, increasing engagement by 40%.",
    tags: ["Mobile", "FinTech", "iOS"],
    cover: "/assets/generated/project-1.dim_800x500.jpg",
    year: "2024",
    role: "Lead Product Designer",
    tools: ["Figma", "Maze", "Jira"],
    duration: "4 months",
    overview:
      "FinTrack is a mobile banking application serving over 2 million users across India. I led the end-to-end redesign of the core transaction flow and dashboard, transforming a cluttered, low-retention interface into a clean, intuitive experience that users love.",
    problem:
      "The original app suffered from a fragmented information architecture, inconsistent visual language, and a transaction flow that required an average of 7 taps to complete a simple transfer. User satisfaction scores were at 2.9/5, and monthly active users had plateaued despite growing sign-ups.",
    solution:
      "I introduced a card-first information hierarchy, collapsing the bottom nav into 3 core tabs. The transaction flow was redesigned to a 3-step pattern with smart defaults. A new micro-interaction system made every action feel instant and rewarding. Usability testing ran across 5 rounds with 40 participants before launch.",
    outcome:
      "Engagement increased 40% within 60 days of launch. App Store rating rose from 2.9 to 4.6. Transaction completion rate improved by 28%. The design system became the foundation for the web dashboard built the following quarter.",
    caseStudyUrl: "",
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

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
