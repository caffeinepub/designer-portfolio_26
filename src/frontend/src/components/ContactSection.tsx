import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useQueries";
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiBehance, SiDribbble, SiLinkedin } from "react-icons/si";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { mutate, isPending, isSuccess, isError } = useSubmitContact();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: heading + info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-3">
              Contact
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Let&apos;s create
              <br />
              <span className="italic">something great.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-sm">
              Have a project in mind? I&apos;d love to hear about it. Send me a
              message and let&apos;s talk about how we can work together.
            </p>

            <div className="w-12 h-px bg-gray-300 mb-10" />

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-600 flex-shrink-0" />
                <a
                  href="mailto:abhishekroyzez@gmail.com"
                  className="text-foreground hover:text-gray-900 transition-colors font-medium"
                  data-ocid="contact.email.link"
                >
                  abhishekroyzez@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-600 flex-shrink-0" />
                <a
                  href="tel:+918178675444"
                  className="text-foreground hover:text-gray-900 transition-colors font-medium"
                  data-ocid="contact.phone.link"
                >
                  +91 8178675444
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle
                  size={16}
                  className="text-gray-600 flex-shrink-0"
                />
                <a
                  href="https://wa.me/919540064780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-gray-900 transition-colors font-medium"
                  data-ocid="contact.whatsapp.link"
                >
                  WhatsApp: +91 9540064780
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/abhishekbeniwal14/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                data-ocid="contact.linkedin.link"
                className="text-muted-foreground hover:text-gray-900 transition-colors p-2 border border-border hover:border-gray-800"
              >
                <SiLinkedin size={18} />
              </a>
              <a
                href="https://www.behance.net/abhishekbeniwal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
                data-ocid="contact.behance.link"
                className="text-muted-foreground hover:text-gray-900 transition-colors p-2 border border-border hover:border-gray-800"
              >
                <SiBehance size={18} />
              </a>
              <a
                href="https://www.behance.net/abhishekbeniwal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                data-ocid="contact.dribbble.link"
                className="text-muted-foreground hover:text-gray-900 transition-colors p-2 border border-border hover:border-gray-800"
              >
                <SiDribbble size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {isSuccess ? (
              <div
                className="flex flex-col items-center justify-center h-full min-h-64 gap-4 border border-gray-300 p-12"
                data-ocid="contact.success_state"
              >
                <CheckCircle className="text-gray-900" size={40} />
                <h3 className="text-2xl font-semibold">Message Sent!</h3>
                <p className="text-muted-foreground text-center">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {isError && (
                  <div
                    className="flex items-center gap-3 p-4 border border-destructive/50 bg-destructive/10 text-sm text-destructive"
                    data-ocid="contact.error_state"
                  >
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="rounded-none bg-background border-border focus:border-gray-900 h-12 text-base"
                    data-ocid="contact.input"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="rounded-none bg-background border-border focus:border-gray-900 h-12 text-base"
                    data-ocid="contact.email.input"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-xs tracking-widest uppercase text-muted-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="rounded-none bg-background border-border focus:border-gray-900 text-base resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                  className="w-full font-semibold tracking-wide h-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "#FACC15",
                    color: "#181919",
                    borderRadius: "12px",
                    boxShadow: "0 4px 15px rgba(250, 204, 21, 0.3)",
                    border: "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isPending) {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0 6px 25px rgba(250, 204, 21, 0.55)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow =
                      "0 4px 15px rgba(250, 204, 21, 0.3)";
                  }}
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
