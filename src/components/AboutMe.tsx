import { Award, Briefcase, Lightbulb } from "lucide-react";
import { useMemo } from "react";
import angelinaAbout from "@/assets/angelina-about.png";

const calculateExperience = () => {
  const start = new Date(2018, 2, 16);
  const today = new Date();

  let years = 0;
  let months = 0;

  // Räkna år
  while (new Date(start.getFullYear() + years + 1, start.getMonth(), start.getDate()) <= today) {
    years++;
  }

  // Räkna månader
  while (new Date(start.getFullYear() + years, start.getMonth() + months + 1, start.getDate()) <= today) {
    months++;
  }

  // Räkna dagar
  const lastPeriod = new Date(start.getFullYear() + years, start.getMonth() + months, start.getDate());
  const diffMs = today.getTime() - lastPeriod.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return { years, months, days };
};

const getHighlights = (experience: { years: number; months: number; days: number }) => [
  {
    icon: Award,
    title: `${experience.years} år, ${experience.months} mån`,
    description: "Inom IT",
  },
  {
    icon: Briefcase,
    title: "6",
    description: "konsultprojekt",
  },
  {
    icon: Lightbulb,
    title: "100%",
    description: "Kvalitetsfokus",
  },
];

const AboutMe = () => {
  const experience = useMemo(() => calculateExperience(), []);
  const highlights = useMemo(() => getHighlights(experience), [experience]);

  return (
    <section id="om-mig" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Om Mig</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Vem är jag?
            </h2>
            {/* Magnifying glass */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
              {/* Handle - positioned to the left */}
              <div className="absolute left-0 top-1/2 -translate-x-[85%] -translate-y-1/2 rotate-[-45deg] origin-right">
                <div className="w-16 md:w-20 h-5 md:h-6 bg-gradient-to-r from-primary/60 to-primary rounded-full shadow-md"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-8 md:h-10 bg-primary rounded-sm"></div>
              </div>
              {/* Lens frame */}
              <div className="absolute inset-0 rounded-full border-[6px] md:border-8 border-primary shadow-soft-lg"></div>
              {/* Lens reflection */}
              <div className="absolute top-4 right-6 w-8 h-8 md:w-10 md:h-10 bg-white/30 rounded-full blur-sm"></div>
              {/* Image inside lens */}
              <div className="absolute inset-[6px] md:inset-2 rounded-full overflow-hidden bg-background">
                <img 
                  src={angelinaAbout} 
                  alt="Angelina" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Personal intro */}
          <div className="prose prose-lg max-w-none text-center mb-16">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Hej! Jag heter Angelina och driver Nemas Problemas — ett namn som säger allt om min approach till
              projekten jag tar på mig.
              <span className="text-foreground font-medium"> Inga problem, bara lösningar.</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Med över {experience.years} års erfarenhet inom kvalitetssäkring har jag arbetat med allt från fintech
              till e-handel.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Min filosofi är enkel:{" "}
              <span className="text-gradient font-semibold">
                kvalitet är inget som händer av en slump — det är ett ständigt arbete.
              </span>{" "}
              Buggar finns i kod, i processer, i samtal mellan människor och min passion är att slipa bort dem
              tills vi har en robust och användarvänlig produkt.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
            {highlights.map((item, index) => (
              <div key={item.title} className="bg-background rounded-2xl p-6 text-center shadow-soft hover-lift">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <p className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
