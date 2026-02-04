import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-soft-lg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="h-8 w-8 text-accent-foreground" />
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Låt oss prata!
              </h2>

              <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Vill du veta hur jag kan hjälpa dig med kvalitetssäkring? Hör av dig så tar vi en kaffe!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:hej@nemasproblemas.com">
                  <Button variant="brand" size="xl" className="bg-accent hover:bg-accent/90">
                    <Mail className="mr-2 h-5 w-5" />
                    Skicka ett mail
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
