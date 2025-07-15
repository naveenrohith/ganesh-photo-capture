import { useState } from "react";
import { Menu, X, Phone, Mail, Instagram, Camera } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo - Stable and Professional */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-hover rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-800 tracking-tight">Ganesh Photography</span>
          </div>

          {/* Desktop Navigation - Compact */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-gold transition-colors font-medium text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-gold transition-colors font-medium text-sm"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-gold transition-colors font-medium text-sm"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-gold transition-colors font-medium text-sm"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info - Compact */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:+919999999999" className="flex items-center space-x-1 text-gray-600 hover:text-gold transition-colors text-sm">
              <Phone className="w-4 h-4" />
              <span>+91 99999 99999</span>
            </a>
            <a href="mailto:info@ganeshphoto.com" className="flex items-center space-x-1 text-gray-600 hover:text-gold transition-colors text-sm">
              <Mail className="w-4 h-4" />
              <span>info@ganeshphoto.com</span>
            </a>
            <a href="https://instagram.com/ganeshphoto" className="flex items-center space-x-1 text-gray-600 hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gold transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation - Compact */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 py-3 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-left text-gray-700 hover:text-gold transition-colors font-medium text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-gold transition-colors font-medium text-sm"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-gold transition-colors font-medium text-sm"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-gold transition-colors font-medium text-sm"
              >
                Contact
              </button>
              <div className="pt-3 border-t border-gray-200">
                <a href="tel:+919999999999" className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors mb-2 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+91 99999 99999</span>
                </a>
                <a href="mailto:info@ganeshphoto.com" className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors mb-2 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>info@ganeshphoto.com</span>
                </a>
                <a href="https://instagram.com/ganeshphoto" className="flex items-center space-x-2 text-gray-600 hover:text-gold transition-colors text-sm">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
