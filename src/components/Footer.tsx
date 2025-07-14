import { Heart, Phone, Mail, Instagram, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1f1f3ce2-583f-4e7e-a019-835bb00a5e71.png" 
                alt="GV Logo" 
                className="h-12 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Ganesh Vijjapu</h3>
                <p className="text-background/70">Photography</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed">
              Capturing life's most precious moments with artistic vision and professional excellence. 
              Your story, beautifully told through our lens.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/ganeshphotography.co" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm" className="text-background hover:text-accent">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <Button variant="ghost" size="sm" className="text-background hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 hover:text-accent transition-smooth"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 hover:text-accent transition-smooth"
              >
                Portfolio
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 hover:text-accent transition-smooth"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/80 hover:text-accent transition-smooth"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-background/80">Phone</p>
                  <a href="tel:+919640614333" className="text-background hover:text-accent transition-smooth">
                    +91 96406 14333
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-background/80">Email</p>
                  <a 
                    href="mailto:ganeshphotography333@gmail.com" 
                    className="text-background hover:text-accent transition-smooth"
                  >
                    ganeshphotography333@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-background/80">Instagram</p>
                  <a 
                    href="https://instagram.com/ganeshphotography.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-background hover:text-accent transition-smooth"
                  >
                    @ganeshphotography.co
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © {currentYear} Ganesh Vijjapu Photography. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-background/60 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent fill-current" />
              <span>for capturing beautiful moments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;