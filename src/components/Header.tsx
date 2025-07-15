import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        {/* Top Contact Bar - Only visible on desktop when not scrolled */}
        <div className={`hidden lg:block transition-all duration-300 ${
          isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100 py-2'
        }`}>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 96406 14333</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>ganeshphotography333@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, India</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/ganeshphotography.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/90 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4'
        }`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/gv-logo.png" 
              alt="Ganesh Vijjapu Photography" 
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10' : 'h-12'
              } w-auto`}
              onError={(e) => {
                // Fallback if logo doesn't load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            <div className="hidden" style={{ display: 'none' }}>
              <div className={`bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              }`}>
                <span className={`font-bold text-white ${isScrolled ? 'text-lg' : 'text-xl'}`}>GV</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'text-lg text-gray-800' 
                  : 'text-xl text-white'
              }`}>
                Ganesh Vijjapu
              </h1>
              <p className={`text-sm transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600' 
                  : 'text-white/80'
              }`}>
                Photography
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`font-medium transition-all duration-300 hover:text-gold relative group ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-all duration-300 hover:text-gold relative group ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`font-medium transition-all duration-300 hover:text-gold relative group ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('enquiry-form')}
              className={`font-medium transition-all duration-300 hover:text-gold relative group ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('enquiry-form')}
              className={`hidden lg:flex bg-gold hover:bg-gold-hover text-black font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                isScrolled ? 'shadow-lg' : 'shadow-xl'
              }`}
            >
              Get Quote
            </Button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className={`py-4 space-y-4 ${
            isScrolled ? 'bg-white border-t border-gray-200' : 'bg-black/20 backdrop-blur-lg'
          }`}>
            <button 
              onClick={() => scrollToSection('hero')}
              className={`block w-full text-left px-4 py-2 font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gold' 
                  : 'text-white hover:text-gold'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left px-4 py-2 font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gold' 
                  : 'text-white hover:text-gold'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`block w-full text-left px-4 py-2 font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gold' 
                  : 'text-white hover:text-gold'
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('enquiry-form')}
              className={`block w-full text-left px-4 py-2 font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gold' 
                  : 'text-white hover:text-gold'
              }`}
            >
              Contact
            </button>
            
            {/* Mobile Contact Info */}
            <div className="px-4 pt-4 border-t border-white/20 space-y-3">
              <div className={`flex items-center space-x-3 text-sm ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                <Phone className="w-4 h-4" />
                <span>+91 96406 14333</span>
              </div>
              <div className={`flex items-center space-x-3 text-sm ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                <Mail className="w-4 h-4" />
                <span>ganeshphotography333@gmail.com</span>
              </div>
              <Button
                onClick={() => scrollToSection('enquiry-form')}
                className="w-full bg-gold hover:bg-gold-hover text-black font-semibold py-2 rounded-full mt-4"
              >
                Get Quote
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;