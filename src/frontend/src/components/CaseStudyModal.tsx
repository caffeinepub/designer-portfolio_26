import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Clock, ExternalLink, Tag, X } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  cover: string;
  modalCover?: string;
  mockup?: string;
  mockupSimple?: boolean;
  year: string;
  role: string;
  tools: string[];
  duration: string;
  overview: string;
  problem: string;
  solution: string;
  outcome: string;
  caseStudyUrl: string;
}

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

function Section({
  label,
  children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
          {label}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="text-sm leading-7 text-foreground/85">{children}</div>
    </div>
  );
}

export default function CaseStudyModal({
  project,
  onClose,
}: CaseStudyModalProps) {
  if (!project) return null;

  const heroImage = project.modalCover || project.cover;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        data-ocid="casestudy.modal"
        className="max-w-3xl w-full p-0 overflow-hidden bg-card border-border rounded-none gap-0"
        style={{ maxHeight: "90vh" }}
      >
        {/* Cover image */}
        <div className="relative overflow-hidden aspect-[16/7]">
          <img
            src={heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/30 to-transparent" />
          {/* Close button */}
          <button
            type="button"
            data-ocid="casestudy.close_button"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-background/70 backdrop-blur-sm border border-border text-foreground/70 hover:text-foreground hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-5 left-6">
            <p className="font-mono text-xs tracking-widest text-gold/80 mb-1">
              {project.year}
            </p>
            <DialogHeader>
              <DialogTitle className="font-sans text-2xl md:text-3xl font-bold text-foreground text-left">
                {project.title}
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs border-gold/40 text-gold/80 rounded-none px-2 py-0.5 bg-background/40 backdrop-blur-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <ScrollArea className="max-h-[calc(90vh-280px)]">
          <div className="p-6 md:p-8">
            {/* Meta row */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-background/40 border border-border">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Briefcase size={11} /> Role
                </div>
                <p className="text-sm font-medium">{project.role}</p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Tag size={11} /> Tools
                </div>
                <p className="text-sm font-medium">
                  {project.tools.join(", ")}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <Clock size={11} /> Duration
                </div>
                <p className="text-sm font-medium">{project.duration}</p>
              </div>
            </div>

            <Section label="Overview">{project.overview}</Section>
            <Section label="The Problem">{project.problem}</Section>
            <Section label="The Solution">{project.solution}</Section>

            {/* Mockup Image */}
            {project.mockup && (
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs tracking-[0.25em] uppercase text-gold font-medium">
                    Preview
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                {project.mockupSimple ? (
                  <div className="w-full rounded overflow-hidden border border-border">
                    <img
                      src={project.mockup}
                      alt={`${project.title} preview`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <div className="relative">
                      {/* Phone frame */}
                      <div className="w-56 bg-background border-2 border-border rounded-[2rem] overflow-hidden shadow-2xl p-1">
                        <div className="w-full bg-black rounded-[1.7rem] overflow-hidden">
                          <img
                            src={project.mockup}
                            alt={`${project.title} mobile mockup`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      {/* Glow effect */}
                      <div className="absolute -inset-4 bg-gold/5 rounded-full blur-2xl -z-10" />
                    </div>
                  </div>
                )}
              </div>
            )}

            <Section label="Outcome">
              {project.outcome.includes("\n") ? (
                <div className="space-y-1">
                  {project.outcome
                    .split("\n")
                    .filter(Boolean)
                    .map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                </div>
              ) : (
                project.outcome
              )}
            </Section>

            {project.caseStudyUrl && (
              <>
                <Separator className="mb-6" />
                <div className="flex justify-center">
                  <a
                    data-ocid="casestudy.link.button"
                    href={project.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-3 font-semibold tracking-wide uppercase text-xs transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg active:scale-95"
                    style={{
                      backgroundColor: "#FACC15",
                      color: "#181919",
                      borderRadius: "12px",
                      boxShadow: "0 4px 15px rgba(250, 204, 21, 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                        "0 6px 25px rgba(250, 204, 21, 0.55)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                        "0 4px 15px rgba(250, 204, 21, 0.3)";
                    }}
                  >
                    Open Full Case Study
                    <ExternalLink
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
