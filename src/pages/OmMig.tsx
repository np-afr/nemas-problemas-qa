import Header from "@/components/Header";
import Footer from "@/components/Footer";
import angelinaPortrait from "@/assets/angelina-portrait.png";

const OmMig = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-10 text-foreground text-center">
              Om mig
            </h1>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-muted-foreground mb-4">
                    Jag är en mångsysslare som gillar att nörda ner mig i saker - oavsett om det gäller träning, teknik eller surdeg. För mig är den röda tråden problemlösning och utmaningar, helst kombinerat. Just nu går det mesta av tiden till Nemas Problemas AB och klasserna på SATS, men det finns alltid tid till att lära sig något nytt och just nu är det keramik som står på schemat.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Då mitt arbetsliv är väldigt digitalt, försöker jag spendera resterande timmar på dygnet analogt - med böcker, träning, natur och människor.
                  </p>
                  <div className="w-16 h-1 bg-accent rounded-full mx-auto md:mx-0"></div>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src={angelinaPortrait} 
                    alt="Angelina" 
                    className="w-64 md:w-80 h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OmMig;
