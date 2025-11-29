import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown, Users, GraduationCap, Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Artiklar</h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                I dagsläget skriver jag artiklar för Tidskrift För Schack, som kan hittas
              </p>
              <a
                className="text-lg md:text-xl text-muted-foreground mb-8"
                href="https://schack.se/forbundet/tfs/arkiv/"
              >
                här
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Vill du göra ett schackevent med mig?
            </h2>
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
