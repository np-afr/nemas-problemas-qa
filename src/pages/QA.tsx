import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Bug, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const calculateYearsOfExperience = () => {
  const start = new Date(2018, 2, 16);
  const today = new Date();
  let years = 0;
  while (new Date(start.getFullYear() + years + 1, start.getMonth(), start.getDate()) <= today) {
    years++;
  }
  return years;
};

const services = [
  {
    icon: Bug,
    title: "Testautomatisering",
    description: "Bygg robusta automatiserade tester som fångar buggar tidigt och sparar tid i längden.",
  },
  {
    icon: CheckCircle,
    title: "Manuell testning",
    description: "Noggrann explorativ testning för att hitta de buggar som automatiserade tester missar.",
  },
  {
    icon: Users,
    title: "Testprocesser",
    description: "Hjälp med att etablera och förbättra era QA-processer och arbetssätt.",
  },
  {
    icon: Zap,
    title: "CI/CD Integration",
    description: "Integrera tester i era pipelines för snabbare och säkrare leveranser.",
  },
];

const experience = [
  {
    title: "Testautomatiseringsutvecklare",
    company: "Skånetrafiken",
    period: "Feb 2023 – nu",
    connection: "Kopplad till Nemas Problemas AB",
    skills: ["Testplanering", "Cypress", "TypeScript"],
    description: `Jag arbetar som testautomatiseringutvecklare på Skånetrafiken och har varit med sedan projektstarten. Jag ansvarar för teamets kvalitetssäkring.
Min huvudsakliga teknik är Cypress, och automatiseringen skrivs i TypeScript.

Arbetet omfattar:
• Automatisering av end-to-end-flöden
• Funktionella tester
• Manuell explorativ testning

Jag samarbetar tätt med utvecklare för att säkerställa hög kvalitet i leveranserna. Rollen kräver både teknisk kompetens och god kommunikationsförmåga.`,
  },
  {
    title: "Teknisk Testare",
    company: "IKEA (Kitchen Planner-projektet)",
    period: "Feb 2022 – okt 2022",
    connection: "Kopplad till Knowit",
    skills: ["Cypress"],
    description: `Jag hade en bred testroll inom IKEA:s Kitchen Planner-projekt. Arbetet omfattade:
• Explorativ testning av epics
• Regressionstestning
• Sprint board-testning
• Schemalagt produktionsstöd
• Arbete i AWS-miljö

Tillsammans med auto-lead byggde jag upp UI-testautomationen från grunden med Cypress. Jag ansvarade för:
• Utveckling och underhåll av majoriteten av Cypress-testerna
• Administrativ strukturering via Jira och Confluence
• Att onboarda andra testare i automatisering

Jag drev även initiativ för att få utvecklare att börja skriva integrationstester. Genom workshops, diskussioner och regelbundna utvärderingar skapade jag ett dedikerat integrationstestteam.`,
  },
  {
    title: "Testautomationsutvecklare",
    company: "[Avidentifierat högprofilerat fintech-bolag]",
    period: "Maj 2021 – feb 2022",
    connection: "Kopplad till System Verification",
    skills: ["Java"],
    description: `Jag arbetade med att utveckla automatiserade testfall (integration och funktionella tester) samt byggde ett testautomationsramverk i Java. Jag tog även fram en automatiskt genererad testrapport för att göra testerna mer tillgängliga för icke-utvecklare, vilket uppskattades av organisationen.`,
  },
  {
    title: "Fullstackutvecklare & Scrum Master",
    company: "Fortnox",
    period: "Okt 2020 – apr 2021",
    connection: "Kopplad till Experis Sverige",
    skills: ["Java"],
    description: `På Fortnox arbetade jag främst som Java-utvecklare samt Scrum Master. Under en sprint genomförde vi även backend-förändringar i frontend i React. Jag ingick i det första utvecklingsteamet i Malmö, vilket innebar att etablera utvecklingsverksamheten utöver Växjö.

Teamet arbetade enligt TDD, med JBehave som testmetod. Eftersom teamet saknade dedikerade testare utförde jag olika typer av tester utöver utvecklingsarbete.`,
  },
  {
    title: "Manuell testare",
    company: "INGKA Centres",
    period: "Jan 2020 – juni 2020",
    connection: "Kopplad till Experis Sverige",
    skills: [],
    description: `Projektet syftade till att globalt implementera Dynamics 365-lösningarna (FO och CRM).

Min roll var bred och omfattade:
• Regressionstester
• Systemtester
• Explorativa tester
• Scriptade tester
• UAT

Jag analyserade user stories och krav för att förstå verksamhetsbehoven och skrev testfall baserat på dem. Teamet stödde även verksamhetens användare under UAT och Hypercare i samband med go-live.`,
  },
];

const QA = () => {
  const years = useMemo(() => calculateYearsOfExperience(), []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Kvalitetssäkring som gör skillnad
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Med över {years} års erfarenhet hjälper jag företag att leverera mjukvara med högre kvalitet, färre
                buggar och nöjdare användare.
              </p>

              {/* Main competencies */}
              <div className="mb-10">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Huvudfokus</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span className="font-medium">Cypress</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span className="font-medium">Testautomatisering</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span className="font-medium">Manuell testning</span>
                  </div>
                </div>
              </div>

              <Link to="/kontakt">
                <Button variant="brand" size="xl">
                  Boka ett samtal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CV/Experience Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              Erfarenhet
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {experience.map((job, index) => (
                  <AccordionItem
                    key={index}
                    value={`job-${index}`}
                    className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden shadow-soft hover:shadow-soft-lg hover:border-accent/30 transition-all cursor-pointer"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <div className="text-left">
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {job.title}, {job.company}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {job.period} • {job.connection}
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <p className="text-muted-foreground whitespace-pre-line mb-4">{job.description}</p>
                      {job.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Redo att höja kvaliteten?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Låt oss diskutera hur jag kan hjälpa ditt team att leverera bättre mjukvara.
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

export default QA;
