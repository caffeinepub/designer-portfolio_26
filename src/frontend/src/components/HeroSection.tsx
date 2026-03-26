import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-24 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Product Designer */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-sm font-medium tracking-[0.25em] uppercase mb-6 text-white/80"
          >
            Product Designer
          </motion.p>

          {/* Abhishek Beniwal - yellow #F8CB45 */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display font-bold leading-none tracking-tight mb-8"
            style={{
              fontSize: "clamp(3rem, 7vw, 9rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              color: "#F8CB45",
            }}
          >
            Abhishek
            <br />
            <span className="italic">Beniwal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.55,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed text-white/80"
          >
            I craft digital experiences that people love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-wrap gap-4"
          >
            {/* View Work - filled yellow */}
            <Button
              asChild
              size="lg"
              className="font-semibold tracking-wide px-8 rounded-none transition-all duration-300"
              style={{ backgroundColor: "#F8CB45", color: "#000" }}
              data-ocid="hero.primary_button"
            >
              <a href="#work">View Work</a>
            </Button>
            {/* Get in Touch - outlined yellow */}
            <Button
              asChild
              size="lg"
              className="font-semibold tracking-wide px-8 rounded-none transition-all duration-300 border-2 bg-transparent hover:bg-white/10"
              style={{ borderColor: "#F8CB45", color: "#F8CB45" }}
              data-ocid="hero.secondary_button"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase rotate-90 origin-center mb-2">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.8,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
