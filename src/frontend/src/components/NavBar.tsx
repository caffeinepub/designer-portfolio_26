import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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
            className={`font-display text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onMouseEnter={setYellow}
            onMouseLeave={(e) => clearColor(e, scrolled)}
            data-ocid="nav.link"
          >
            Abhishek Beniwal
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
