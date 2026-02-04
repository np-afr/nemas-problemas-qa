import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="QA Konsult"
        description="Erfaren QA-konsult som hjälper team leverera kvalitetsmjukvara. Från teststrategi till automation — Nemas Problemas har koll på kvaliteten."
        keywords="QA konsult, kvalitetssäkring, mjukvarutestning, testautomation, Sverige"
        canonicalPath="/"
      />
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
