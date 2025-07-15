import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Instagram, Camera, Award } from "lucide-react";
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Navigation */}
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/1f1f3ce2-583f-4e7e-a019-835bb00a5e71.png" 
                alt="Ganesh Vijjapu Photography" 
                className="h-12 w-auto transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center w-12 h-12 bg-black rounded-lg">
                <span className="text-white font-bold text-xl">GV</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Ganesh Vijjapu
              </h1>
              <p className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                PHOTOGRAPHY
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase() === 'contact' ? 'enquiry-form' : item.toLowerCase())}
                className={`relative text-sm font-semibold tracking-wide uppercase transition-all duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('enquiry-form')}
              className="hidden lg:flex bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Camera className="w-4 h-4 mr-2" />
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
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
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <nav className="space-y-4 pt-4 border-t border-white/20">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase() === 'contact' ? 'enquiry-form' : item.toLowerCase())}
                className={`block w-full text-left px-4 py-3 font-semibold transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-white hover:text-amber-400'
                }`}
              >
                {item}
              </button>
            ))}
            
            <div className="px-4 pt-4 space-y-4">
              <Button
                onClick={() => scrollToSection('enquiry-form')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold py-3 rounded-full"
              >
                <Camera className="w-4 h-4 mr-2" />
                Book Now
              </Button>
              
              <div className="flex items-center justify-center space-x-6 pt-4">
                <a href="tel:+919640614333" className={`flex items-center space-x-2 text-sm ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a href="https://instagram.com/ganeshphotography.co" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-2 text-sm ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                  <Instagram className="w-4 h-4" />
                  <span>Follow</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;