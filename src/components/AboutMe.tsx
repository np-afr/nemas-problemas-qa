import { Award, Clock, Target, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "15+ År",
    description: "Erfarenhet inom QA",
  },
  {
    icon: Target,
    title: "10,000+",
    description: "Buggar hittade",
  },
  {
    icon: Lightbulb,
    title: "100%",
    description: "Kvalitetsfokus",
  },
];

const AboutMe = () => {
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
          </div>

          {/* Personal intro */}
          <div className="prose prose-lg max-w-none text-center mb-16">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Hej! Jag heter Angelina och driver Nemas Problemas — ett namn som säger allt om min approach till
              projekten jag tar på mig.
              <span className="text-foreground font-medium"> Inga problem, bara lösningar.</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Med över 15 års erfarenhet inom kvalitetssäkring har jag arbetat med allt från fintech till e-handel.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Min filosofi är enkel:{" "}
              <span className="text-gradient font-semibold">
                kvalitet är inget som händer av en slump — det är ett ständigt arbete.
              </span>{" "}
              Buggar finns i kod, i processer, i samtal mellan människor och min passion är att sandpappra bort dem
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
