import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Instagram, Camera, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <>
      {/* Top Contact Bar - Desktop Only */}
      <div className={`hidden lg:block bg-black text-white py-2 text-sm transition-all duration-300 ${
        isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+919640614333" className="flex items-center space-x-2 hover:text-amber-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 96406 14333</span>
            </a>
            <a href="mailto:ganeshphotography333@gmail.com" className="flex items-center space-x-2 hover:text-amber-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span>ganeshphotography333@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-amber-400">
              <MapPin className="w-4 h-4" />
              <span>Serving All India</span>
            </span>
            <a href="https://instagram.com/ganeshphotography.co" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/gv-logo.png" 
                  alt="Ganesh Vijjapu Photography - Wedding & Event Photographer" 
                  className={`h-12 w-auto transition-all duration-300 ${
                    isScrolled ? 'brightness-100' : 'brightness-150 drop-shadow-lg'
                  }`}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const sibling = target.nextElementSibling as HTMLElement;
                    target.style.display = 'none';
                    if (sibling) sibling.style.display = 'flex';
                  }}
                />
                <div className="hidden items-center justify-center w-12 h-12 bg-black rounded-lg shadow-lg">
                  <span className="text-white font-bold text-xl">GV</span>
                </div>
              </div>
              <div>
                <h1 className={`text-lg font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'
                }`}>
                  Ganesh Vijjapu
                </h1>
                <p className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-white/90 drop-shadow-sm'
                }`}>
                  Photography
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Services', id: 'services' },
                { name: 'Get Quote', id: 'enquiry-form' }
              ].map((item) => (
                <button 
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white drop-shadow-sm'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('enquiry-form')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Camera className="w-4 h-4 mr-2" />
                Free Quote
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10 drop-shadow-sm'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-white/98 backdrop-blur-md shadow-2xl transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img src="/gv-logo.png" alt="GV Logo" className="h-10 w-auto" />
              <div>
                <h2 className="font-bold text-gray-900">Ganesh Vijjapu</h2>
                <p className="text-xs text-gray-600">Photography</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <nav className="flex flex-col p-6 space-y-1">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Our Services', id: 'services' },
              { name: 'Get Free Quote', id: 'enquiry-form' }
            ].map((item) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-lg font-medium text-gray-800 hover:text-amber-600 hover:bg-amber-50 transition-all py-3 px-4 rounded-lg"
              >
                {item.name}
              </button>
            ))}
            
            <div className="pt-6 space-y-4">
              <Button
                onClick={() => scrollToSection('enquiry-form')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-4 rounded-full text-lg"
              >
                <Camera className="w-5 h-5 mr-2" />
                Get Free Quote Now
              </Button>
              
              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Contact Info</h3>
                <div className="space-y-3">
                  <a href="tel:+919640614333" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors p-2 hover:bg-amber-50 rounded-lg">
                    <Phone className="w-5 h-5" />
                    <span>+91 96406 14333</span>
                  </a>
                  <a href="mailto:ganeshphotography333@gmail.com" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors p-2 hover:bg-amber-50 rounded-lg">
                    <Mail className="w-5 h-5" />
                    <span>ganeshphotography333@gmail.com</span>
                  </a>
                  <a href="https://instagram.com/ganeshphotography.co" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors p-2 hover:bg-amber-50 rounded-lg">
                    <Instagram className="w-5 h-5" />
                    <span>@ganeshphotography.co</span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
};

export default Header;