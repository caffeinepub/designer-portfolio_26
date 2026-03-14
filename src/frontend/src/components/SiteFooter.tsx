import { SiDribbble, SiLinkedin, SiX } from "react-icons/si";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="border-t border-border py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span className="font-display font-semibold tracking-tight">
            Alex Rivera
          </span>
          <span className="text-muted-foreground text-sm">
            &copy; {year}. Built with ♥ using{" "}
            <a
              href={utm}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-ocid="footer.linkedin.link"
            className="text-muted-foreground hover:text-gold transition-colors"
          >
            <SiLinkedin size={16} />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            data-ocid="footer.dribbble.link"
            className="text-muted-foreground hover:text-gold transition-colors"
          >
            <SiDribbble size={16} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            data-ocid="footer.twitter.link"
            className="text-muted-foreground hover:text-gold transition-colors"
          >
            <SiX size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
