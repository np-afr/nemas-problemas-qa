import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import chessImage from "@/assets/chess-angelina.png";
import { Link } from "react-router-dom";

const Schack = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Schack"
        description="Angelina Fransson — före detta landslagsspelare i schack med 4 OS och 10 år i Sveriges damlandslag. Skribent för Tidskrift för Schack."
        keywords="schack, schackspelare, Sveriges landslag, Schack-OS, Tidskrift för Schack"
        canonicalPath="/schack"
      />
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-10 text-center">
                Schack
              </h1>

              {/* Content */}
              <div className="max-w-3xl mx-auto">
                {/* Opening Quote */}
                <blockquote className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-10 text-center border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-lg">
                  "Schacket var biljetten som ledde mig ut i världen"
                </blockquote>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  {/* First paragraph with floating image */}
                  <div className="md:float-right md:ml-8 md:mb-4 md:w-64 lg:w-80 mb-6">
                    <img 
                      src={chessImage} 
                      alt="Angelina Fransson spelar schack" 
                      className="w-full h-auto rounded-xl"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center italic">
                      Foto: Maria Emilianova
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Min schackhistoria började när jag första gången såg min far sitta med ett bräde och en schackbok när jag knappt kunde gå. Många av barndomens timmar spenderades vid brädet, ibland med en bok, ibland med far i de småländska skogarna.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Vid 14 års ålder spelade jag min första turnering i Sveriges ungdomslandslag – VM för ungdomar i Vietnam. Under gymnasiet fick jag ett stipendium för att ta ett sabbatsår för att studera på Norges Toppidretts Gymnas, för att helhjärtat satsa på schack. Under 10 år reste jag världen runt för att representera Sverige och betade bland annat av fyra OS: <span className="font-medium text-foreground">Khanty-Mansiysk 2010</span>, <span className="font-medium text-foreground">Istanbul 2012</span>, <span className="font-medium text-foreground">Baku 2016</span> och <span className="font-medium text-foreground">Batumi 2018</span>.
                  </p>

                  <p className="text-lg leading-relaxed">
                    2014–2015 skrev jag krönikor om frågor rörande damschack i Tidskrift för Schack och påbörjade skrivandet igen 2025. Mina artiklar finns gratis att läsa för medlemmar i Sveriges Schackförbund{" "}
                    <a
                      className="text-accent font-semibold underline underline-offset-4 decoration-2 hover:text-accent/80 transition-colors"
                      href="https://schack.se/forbundet/tfs/arkiv/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      här
                    </a>.
                  </p>

                  {/* Clear float before stats */}
                  <div className="clear-both"></div>

                  {/* Highlighted Stats */}
                  <div className="grid grid-cols-3 gap-4 py-8">
                    <div className="text-center p-4 bg-background rounded-xl border border-border/50">
                      <span className="block text-3xl md:text-4xl font-display font-bold text-accent">14</span>
                      <span className="text-sm text-muted-foreground">år vid första U-VM</span>
                    </div>
                    <div className="text-center p-4 bg-background rounded-xl border border-border/50">
                      <span className="block text-3xl md:text-4xl font-display font-bold text-accent">10</span>
                      <span className="text-sm text-muted-foreground">år i landslaget</span>
                    </div>
                    <div className="text-center p-4 bg-background rounded-xl border border-border/50">
                      <span className="block text-3xl md:text-4xl font-display font-bold text-accent">4</span>
                      <span className="text-sm text-muted-foreground">Schack-OS</span>
                    </div>
                  </div>
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
