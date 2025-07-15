import { useState } from "react";
import { Menu, X, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-soft">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/1f1f3ce2-583f-4e7e-a019-835bb00a5e71.png" 
            alt="Ganesh Vijjapu Photography Logo" 
            className="h-10 w-auto logo-animate"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-foreground">Ganesh Vijjapu</h1>
            <p className="text-xs text-muted-foreground">Photography</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-foreground hover:text-accent transition-smooth"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-accent transition-smooth"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-accent transition-smooth"
          >
            Contact
          </button>
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-accent" />
            <span>96406 14333</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="premium"
              size="sm"
              onClick={() => scrollToSection('enquiry-form')}
            >
              Get Quote
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-smooth"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-smooth"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-foreground hover:text-accent transition-smooth"
            >
              Contact
            </button>
            
            {/* Mobile Contact */}
            <div className="pt-4 border-t space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>96406 14333</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>ganeshphotography333@gmail.com</span>
              </div>
              <Button
                variant="premium"
                className="w-full"
                onClick={() => scrollToSection('enquiry-form')}
              >
                Get Instant Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;