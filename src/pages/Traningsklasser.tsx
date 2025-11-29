import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dumbbell, Heart, Users, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const classes = [
  {
    icon: Dumbbell,
    title: "Styrketräning",
    description: "Bygg styrka och muskler med strukturerade träningspass anpassade efter din nivå."
  },
  {
    icon: Heart,
    title: "Kondition",
    description: "Förbättra din uthållighet och kardiovaskulära hälsa med varierade pass."
  },
  {
    icon: Users,
    title: "Gruppträning",
    description: "Motiverande grupppass där vi tränar tillsammans och pushar varandra."
  },
  {
    icon: Calendar,
    title: "Personlig träning",
    description: "Skräddarsydda träningsprogram baserade på dina mål och förutsättningar."
  }
];

const Traningsklasser = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-8">
                <Dumbbell className="h-8 w-8 text-accent" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Träningsklasser
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Ta din träning till nästa nivå med professionell vägledning. 
                Jag hjälper dig att nå dina träningsmål, oavsett var du startar.
              </p>
              <Link to="/kontakt">
                <Button variant="brand" size="xl">
                  Kom igång
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Classes Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Träningsformer
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {classes.map((classItem, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                    <classItem.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {classItem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {classItem.description}
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
              Redo att börja träna?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Kontakta mig så sätter vi upp ett upplägg som passar just dig.
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

export default Traningsklasser;
