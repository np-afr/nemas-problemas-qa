import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Linkedin, Instagram } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Kontakta mig
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Har du frågor eller vill diskutera ett samarbete? Hör av dig!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">Kontaktuppgifter</h2>
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-post</h3>
                      <a 
                        href="mailto:hej@nemasproblemas.com"
                        className="text-accent font-semibold underline underline-offset-4 decoration-2 hover:text-accent/80 transition-colors"
                      >
                        hej@nemasproblemas.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Plats</h3>
                      <p className="text-muted-foreground">Malmö, Sverige</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/in/angelina-fransson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-semibold underline underline-offset-4 decoration-2 hover:text-accent/80 transition-colors"
                      >
                        Besök min profil
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Instagram className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                      <a
                        href="https://www.instagram.com/coach.fransson/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent font-semibold underline underline-offset-4 decoration-2 hover:text-accent/80 transition-colors"
                      >
                        @coach.fransson
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
