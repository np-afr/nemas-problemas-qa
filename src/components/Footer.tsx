import { Linkedin, Mail } from "lucide-react";
import logo from "@/assets/nemas-problemas-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Nemas Problemas"
              className="h-12 w-auto mb-4 brightness-0 invert opacity-90 mx-auto md:mx-0"
            />
            <p className="text-primary-foreground/70 max-w-sm">
              Erfaren QA-konsult som hjälper team leverera mjukvara utan bekymmer.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/angelina-fransson/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground" />
              </a>
              <a
                href="mailto:hej@nemasproblemas.com"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
            <p className="text-primary-foreground/50 text-sm">hej@nemasproblemas.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-primary-foreground/50 text-sm text-center">
            © {currentYear} Nemas Problemas. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
