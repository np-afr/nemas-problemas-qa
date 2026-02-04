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
            <div className="relative w-52 h-52 md:w-60 md:h-60 mx-auto ml-auto mr-auto md:ml-24">
              {/* Handle */}
              <div className="absolute -left-12 md:-left-14 top-1/2 -translate-y-1/2 rotate-[-45deg]">
                {/* Handle grip */}
                <div className="relative w-20 md:w-24 h-6 md:h-7 rounded-full bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900 shadow-lg">
                  {/* Handle highlight */}
                  <div className="absolute inset-x-0 top-1 h-1.5 mx-2 rounded-full bg-amber-600/50"></div>
                  {/* Handle end cap */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-3 h-7 md:h-8 rounded-l-full bg-gradient-to-r from-amber-900 to-amber-800"></div>
                </div>
                {/* Metal connector to frame */}
                <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-zinc-300 to-zinc-500 shadow-md border border-zinc-400"></div>
              </div>
              
              {/* Lens frame (metal ring) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-300 via-zinc-400 to-zinc-500 p-1.5 md:p-2 shadow-xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-zinc-500 via-zinc-300 to-zinc-200 opacity-50"></div>
                
                {/* Inner lens area */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
                  {/* Image */}
                  <img 
                    src={angelinaAbout} 
                    alt="Angelina" 
                    className="w-full h-full object-cover object-top scale-110"
                  />
                  
                  {/* Glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
                  <div className="absolute top-6 right-8 w-12 h-12 md:w-16 md:h-16 bg-white/25 rounded-full blur-md"></div>
                  <div className="absolute top-10 right-12 w-4 h-4 md:w-6 md:h-6 bg-white/40 rounded-full blur-sm"></div>
                </div>
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
