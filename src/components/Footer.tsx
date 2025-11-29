import { Linkedin, Twitter, Mail } from "lucide-react";
import logo from "@/assets/nemas-problemas-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Nemas Problemas" className="h-12 w-auto mb-4 brightness-0 invert opacity-90" />
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              Expert QA consultancy helping teams deliver exceptional software. 
              We find the bugs, so you don't have to.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary-foreground" />
              </a>
              <a 
                href="mailto:hello@nemasproblemas.com" 
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-brand-orange transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/70 hover:text-brand-orange transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-brand-orange transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-brand-orange transition-colors">
                  Test Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-brand-orange transition-colors">
                  Manual Testing
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-brand-orange transition-colors">
                  QA Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {currentYear} Nemas Problemas. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
