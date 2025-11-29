import { ClipboardCheck, Users, Cog, FileSearch, Zap, BarChart3 } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Test Strategy & Planning",
    description: "Comprehensive QA strategies tailored to your project needs, ensuring complete coverage and efficient testing processes.",
  },
  {
    icon: Users,
    title: "QA Team Augmentation",
    description: "Skilled QA consultants who integrate seamlessly with your team, bringing expertise and fresh perspectives.",
  },
  {
    icon: Cog,
    title: "Test Automation",
    description: "Build robust automation frameworks that accelerate testing cycles and catch regression bugs early.",
  },
  {
    icon: FileSearch,
    title: "Manual Testing",
    description: "Thorough exploratory and scripted testing by experienced professionals who think like your users.",
  },
  {
    icon: Zap,
    title: "Performance Testing",
    description: "Load, stress, and endurance testing to ensure your application performs flawlessly under any conditions.",
  },
  {
    icon: BarChart3,
    title: "QA Process Audit",
    description: "Evaluate and optimize your existing QA processes to improve efficiency and testing effectiveness.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quality Assurance Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategy to execution, we provide end-to-end QA services that help you deliver exceptional software.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-8 shadow-warm hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-brand-orange group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
