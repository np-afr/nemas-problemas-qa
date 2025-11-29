import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown, Users, GraduationCap, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const offerings = [
  {
    icon: GraduationCap,
    title: "Privatlektioner",
    description: "Skräddarsydda lektioner för alla nivåer, från nybörjare till avancerade spelare."
  },
  {
    icon: Users,
    title: "Grupplektioner",
    description: "Lär dig schack tillsammans med andra i en social och inspirerande miljö."
  },
  {
    icon: Crown,
    title: "Strategianalys",
    description: "Djupgående analys av dina partier för att identifiera förbättringsområden."
  },
  {
    icon: Trophy,
    title: "Turneringsförberedelse",
    description: "Förbered dig för tävlingar med mental träning och öppningsrepertoar."
  }
];

const Schack = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
                <Crown className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Schacklektioner
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Utveckla ditt schackspel med personlig coachning. Oavsett om du är nybörjare 
                eller erfaren spelare hjälper jag dig att nå nästa nivå.
              </p>
              <Link to="/kontakt">
                <Button variant="brand" size="xl">
                  Boka en lektion
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Vad jag erbjuder
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {offerings.map((offering, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                    <offering.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {offering.description}
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
              Intresserad av schacklektioner?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Hör av dig så diskuterar vi hur vi kan lägga upp din träning.
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

export default Schack;
