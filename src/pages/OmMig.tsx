import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chessAngelina from "@/assets/chess-angelina.png";

const OmMig = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Om mig
            </h1>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft">
              <img 
                src={chessAngelina} 
                alt="Angelina spelar schack" 
                className="w-full h-auto rounded-xl mb-6"
              />
              <p className="text-lg text-muted-foreground mb-4">
                Mer information kommer snart.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OmMig;
