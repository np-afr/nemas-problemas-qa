import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import chessImage from "@/assets/chess-angelina.png";
import { Link } from "react-router-dom";

const Schack = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto md:mx-0 mb-8">
                    <Crown className="h-8 w-8 text-accent" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Schack</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                    I dagsläget skriver jag artiklar för Tidskrift För Schack, som kan hittas{" "}
                    <a
                      className="text-accent font-semibold underline underline-offset-4 decoration-2 hover:text-accent/80 transition-colors"
                      href="https://schack.se/forbundet/tfs/arkiv/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      här
                    </a>
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={chessImage} 
                    alt="Angelina Fransson spelar schack" 
                    className="max-w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
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
