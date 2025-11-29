import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center shadow-warm-lg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center mx-auto mb-8">
                <MessageSquare className="h-8 w-8 text-accent-foreground" />
              </div>
              
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Ship Bug-Free?
              </h2>
              
              <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Let's discuss how Nemas Problemas can help elevate your software quality. 
                Get in touch for a free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="brand" 
                  size="xl"
                  className="bg-brand-orange hover:bg-brand-orange-light"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
                <Button 
                  variant="ghost" 
                  size="xl"
                  className="text-primary-foreground border-2 border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
