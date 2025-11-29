import { ClipboardCheck, Cog, FileSearch, Zap, BarChart3, Users } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Teststrategi & Planering",
    description: "Skräddarsydda QA-strategier för ditt projekt, med fullständig täckning och effektiva testprocesser.",
  },
  {
    icon: Cog,
    title: "Testautomation",
    description: "Robusta automationsramverk som snabbar upp testcykler och fångar regressioner tidigt.",
  },
  {
    icon: FileSearch,
    title: "Manuell Testning",
    description: "Grundlig utforskande och skriptad testning — jag tänker som dina användare.",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Tjänster</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vad kan jag hjälpa dig med?
          </h2>
          <p className="text-lg text-muted-foreground">
            Från strategi till exekvering — jag erbjuder kompletta QA-tjänster som hjälper dig leverera exceptionell
            mjukvara.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover-lift cursor-pointer border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
