import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProcessSection from "@/components/ProcessSection";
import SiteFooter from "@/components/SiteFooter";
import WorkSection from "@/components/WorkSection";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grain-overlay">
        <NavBar />
        <main>
          <HeroSection />
          <WorkSection />
          <AboutSection />
          <ProcessSection />
          <ContactSection />
        </main>
        <SiteFooter />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
