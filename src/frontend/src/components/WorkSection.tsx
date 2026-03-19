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
    cover: "/assets/uploads/Project-1-Thumbnail-1.png",
    modalCover: "/assets/uploads/Project_1_Model_Pop_Up-1.png",
    mockup: "/assets/uploads/Project-1-Thumbnail-1.png",
    mockupSimple: true,
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
    title: "Ayurvedic Healthcare App",
    description:
      "Designed UI for an Ayurvedic healthcare app covering doctor consultations, product discovery, and blogs. Transformed client-provided wireframes into intuitive, scalable mobile interfaces.",
    tags: ["Mobile", "UI", "Figma"],
    cover: "/assets/uploads/Ayurveda-1-1.png",
    modalCover: "/assets/uploads/Project_2_Model_Pop_Up-1.png",
    mockup: "/assets/uploads/Ayurveda-1-1.png",
    mockupSimple: true,
    year: "2025",
    role: "Product Designer",
    tools: ["Figma"],
    duration: "2 Months",
    overview:
      "Designed UI for an Ayurvedic healthcare app covering doctor consultations, product discovery, and blogs. Transformed client-provided wireframes into intuitive, scalable, and visually consistent mobile interfaces focused on usability.",
    problem:
      "Many users who prefer Ayurvedic treatments struggle to find trusted doctors and authentic products in one place. Existing platforms often lack a simple consultation booking process and organized product discovery experience.",
    solution:
      "Created a seamless experience for booking doctor consultations, exploring Ayurvedic products, and reading health content. Ensured intuitive navigation, faster task completion, and a clean, trustworthy visual interface.",
    outcome:
      "• Achieved 30% faster booking flow\n• 25% improved product discovery\n• 20% higher engagement in blogs\n• 15% increase in consultation conversions through improved UI and simplified navigation.",
    caseStudyUrl:
      "https://www.figma.com/design/Lm3YebADVUvFfTA2NXyQtX/Beniwal?node-id=1907-8819&t=g9jIcPZVuClmJHmv-1",
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
          <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-bold">Selected Work</h2>
          <div className="w-12 h-px bg-gray-300 mt-6" />
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
                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 z-20 font-mono text-xs tracking-widest text-foreground/70 bg-background/60 backdrop-blur-sm px-2 py-1">
                  {project.year}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 z-10 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm tracking-wide uppercase border border-white px-6 py-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
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
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
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
