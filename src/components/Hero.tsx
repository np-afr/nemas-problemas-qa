import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Bug, CheckCircle } from "lucide-react";
import logo from "@/assets/nemas-problemas-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img 
              src={logo} 
              alt="Nemas Problemas" 
              className="h-24 md:h-32 lg:h-40 w-auto mx-auto animate-float"
            />
          </div>

          {/* Tagline */}
          <p className="text-brand-orange font-semibold text-lg md:text-xl mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Quality Assurance Consultancy
          </p>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We Find the Bugs,{" "}
            <span className="text-gradient">So You Don't Have To</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Expert QA consultants helping teams deliver flawless software. 
            From test strategy to execution, we've got your quality covered.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="brand" size="xl">
              Start Your QA Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="brand-outline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-brand-orange" />
              <span className="text-sm font-medium">100% Quality Focused</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Bug className="h-5 w-5 text-brand-orange" />
              <span className="text-sm font-medium">10,000+ Bugs Found</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-brand-orange" />
              <span className="text-sm font-medium">50+ Happy Clients</span>
            </div>
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
