import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/nemas-problemas-logo.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto ">
          {/* Logo */}
          <div style={{
          animationDelay: "0.1s"
        }} className="mb-8 opacity-0 animate-fade-in text-center">
            <img src={logo} alt="Nemas Problemas" className="h-80 md:h-[28rem] lg:h-[36rem] w-auto mx-auto animate-float" />
          </div>

          {/* Tagline */}
          <p className="text-accent font-medium text-lg md:text-xl mb-4 opacity-0 animate-fade-in italic" style={{
          animationDelay: "0.2s"
        }}>
            — QA Konsult
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in leading-tight" style={{
          animationDelay: "0.3s"
        }}>
            Jag hittar buggarna,
            <br />
            <span className="text-gradient">så du slipper.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{
          animationDelay: "0.4s"
        }}>
            Erfaren QA-konsult som hjälper team att leverera mjukvara utan bekymmer. Från teststrategi till exekvering —
            jag har koll på kvaliteten.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{
          animationDelay: "0.5s"
        }}>
            <Button variant="brand" size="xl">
              Let's talk!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="brand-outline" size="xl">
              Läs mer om mig
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--card))" />
        </svg>
      </div>
    </section>;
};
export default Hero;