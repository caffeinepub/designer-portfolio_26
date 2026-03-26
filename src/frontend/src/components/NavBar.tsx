import { Download, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const RESUME_URL =
  "/assets/uploads/abhishek_beniwal_2026-019d1fbe-69bb-73ab-bca5-72a29c2855fb-1.pdf";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function setYellow(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.color = "#F8CB45";
}
function clearColor(e: React.MouseEvent<HTMLAnchorElement>, scrolled: boolean) {
  e.currentTarget.style.color = scrolled ? "" : "rgba(255,255,255,0.85)";
}

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white backdrop-blur-xl border-b border-border"
            : "bg-black/40 backdrop-blur-sm border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className={`font-display text-lg font-semibold tracking-tight transition-colors flex items-center gap-2 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onMouseEnter={setYellow}
            onMouseLeave={(e) => clearColor(e, scrolled)}
            data-ocid="nav.link"
          >
            Abhishek Beniwal
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                borderRadius: 4,
                padding: "2px 4px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                flexShrink: 0,
              }}
            >
              <img
                src="/assets/generated/india-flag-transparent.dim_60x40.png"
                alt="India"
                title="India"
                style={{
                  width: 22,
                  height: 15,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled ? "text-gray-700" : "text-white/85"
                }`}
                onMouseEnter={setYellow}
                onMouseLeave={(e) => clearColor(e, scrolled)}
              >
                {link.label}
              </a>
            ))}
            {/* Resume button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="nav.resume.button"
              className={`inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide px-4 py-1.5 border rounded transition-all duration-200 hover:scale-105 ${
                scrolled
                  ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                  : "border-white/80 text-white/90 hover:bg-white/10"
              }`}
            >
              <Download size={13} />
              Resume
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white backdrop-blur-xl border-b border-border md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                  className="text-base font-medium text-gray-800 py-2 border-b border-border last:border-0 transition-colors"
                  onMouseEnter={setYellow}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile Resume link */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.mobile.resume.button"
                className="inline-flex items-center gap-2 text-base font-semibold text-gray-800 py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <Download size={15} />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
