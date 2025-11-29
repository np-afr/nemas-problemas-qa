import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const calculateYearsOfExperience = () => {
  const start = new Date(2018, 2, 16);
  const today = new Date();
  let years = 0;
  while (new Date(start.getFullYear() + years + 1, start.getMonth(), start.getDate()) <= today) {
    years++;
  }
  return years;
};

const services = [
  {
    icon: Target,
    title: "Testautomatisering",
    description: "Bygg robusta automatiserade tester som fångar buggar tidigt och sparar tid i längden."
  },
  {
    icon: CheckCircle,
    title: "Manuell testning",
    description: "Noggrann explorativ testning för att hitta de buggar som automatiserade tester missar."
  },
  {
    icon: Users,
    title: "Testprocesser",
    description: "Hjälp med att etablera och förbättra era QA-processer och arbetssätt."
  },
  {
    icon: Zap,
    title: "CI/CD Integration",
    description: "Integrera tester i era pipelines för snabbare och säkrare leveranser."
  }
];

const QA = () => {
  const years = useMemo(() => calculateYearsOfExperience(), []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Kvalitetssäkring som gör skillnad
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Med över {years} års erfarenhet hjälper jag företag att leverera mjukvara med högre kvalitet, 
                färre buggar och nöjdare användare.
              </p>
              <Link to="/kontakt">
                <Button variant="brand" size="xl">
                  Boka ett samtal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Mina tjänster
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Redo att höja kvaliteten?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Låt oss diskutera hur jag kan hjälpa ditt team att leverera bättre mjukvara.
            </p>
            <Link to="/kontakt">
              <Button variant="brand" size="xl" className="bg-accent hover:bg-accent/90">
                Kontakta mig
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QA;
