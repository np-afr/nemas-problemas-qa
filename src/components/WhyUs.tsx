import { Award, Clock, Target, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Years of experience across industries from fintech to healthcare, e-commerce to enterprise software.",
  },
  {
    icon: Clock,
    title: "Rapid Integration",
    description: "Our consultants hit the ground running, delivering value from day one without lengthy onboarding.",
  },
  {
    icon: Target,
    title: "Bug-Focused Mindset",
    description: "We think like users and break like hackers. No bug escapes our thorough testing approach.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description: "We're not just vendors—we're partners invested in your success and product quality.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quality Is Not an Accident, It's a <span className="text-gradient">Commitment</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Nemas Problemas, we believe every bug found before release is a customer kept happy. 
              Our mission is simple: help you ship software you're proud of.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-warm">
                <p className="font-display text-4xl font-bold text-brand-orange mb-1">98%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-warm">
                <p className="font-display text-4xl font-bold text-brand-orange mb-1">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content - Reasons Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card rounded-2xl p-6 shadow-warm hover-lift"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
                  <reason.icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
