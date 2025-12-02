import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/nemas-problemas-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-hero overflow-hidden pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto ">
          {/* Logo */}
          <div
            style={{
              animationDelay: "0.1s",
            }}
            className="mb-8 opacity-0 animate-fade-in text-center"
          >
            <img
              src={logo}
              alt="Nemas Problemas"
              className="h-64 md:h-[28rem] lg:h-[16rem] w-auto mx-auto animate-float border-0 outline-none"
            />
          </div>

          {/* Main Headline */}
          <h1
            className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 opacity-0 animate-fade-in leading-tight"
            style={{
              animationDelay: "0.3s",
            }}
          >
            <span className="text-gradient">Hjälper team att skapa stabila och pålitliga system.</span>
          </h1>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{
              animationDelay: "0.5s",
            }}
          >
            <Link to="/kontakt">
              <Button variant="brand" size="xl">
                Let's talk!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/om-mig">
              <Button variant="brand-outline" size="xl">
                Läs mer om mig
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
