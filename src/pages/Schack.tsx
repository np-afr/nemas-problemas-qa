import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Schack</h1>
                  <div className="text-lg text-muted-foreground space-y-4">
                    <p>
                      Min schackhistoria började när jag första gången såg min far sitta med ett bräde och en schackbok när jag knappt kunde gå. Många av barndomens timmar spenderades vid brädet, ibland med en bok, ibland med far i de småländska skogarna och schacket var också biljetten som ledde mig ut i världen.
                    </p>
                    <p>
                      Vid 14 års ålder spelade jag min första turnering i Sveriges ungdomslandslag - VM för ungdomar i Vietnam. Under 10 år reste jag världen runt för att representera Sverige och betade bland annat av fyra OS: Khanty-Mansiysk 2010, Istanbul 2012, Baku 2016 och Batumi 2018.
                    </p>
                    <p>
                      2014-2015 skrev jag krönikor om frågor rörande damschack i Tidskrift för Schack och påbörjade skrivandet igen 2025. Mina artiklar finns gratis att läsa för medlemmar i Sveriges Schackförbund{" "}
                      <a
                        className="text-accent font-semibold underline underline-offset-4 decoration-2 hover:text-accent/80 transition-colors"
                        href="https://schack.se/forbundet/tfs/arkiv/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        här
                      </a>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src={chessImage} 
                    alt="Angelina Fransson spelar schack" 
                    className="max-w-full h-auto rounded-2xl"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Foto: Maria Emilianova</p>
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
