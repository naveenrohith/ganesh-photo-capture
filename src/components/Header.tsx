import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Instagram, Camera } from "lucide-react";
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section - Made Brighter and Larger */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src="/lovable-uploads/1f1f3ce2-583f-4e7e-a019-835bb00a5e71.png" 
                alt="Ganesh Vijjapu Photography" 
                className={`h-14 w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-100 contrast-125' : 'brightness-125 contrast-150 drop-shadow-lg'
                }`}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  const sibling = target.nextElementSibling as HTMLElement;
                  target.style.display = 'none';
                  if (sibling) sibling.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center w-14 h-14 bg-black rounded-lg shadow-lg">
                <span className="text-white font-bold text-2xl">GV</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'
              }`}>
                Ganesh Vijjapu
              </h1>
              <p className={`text-xs font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/90 drop-shadow-sm'
              }`}>
                PHOTOGRAPHY
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Minimized */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Home', 'Services', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase() === 'contact' ? 'enquiry-form' : item.toLowerCase())}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  isScrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white drop-shadow-sm'
                }`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('enquiry-form')}
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Camera className="w-4 h-4 mr-2" />
              Book Now
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
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Vertical Right Side */}
        <div className={`lg:hidden fixed top-16 right-0 h-screen w-80 bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="flex flex-col p-6 space-y-6">
            {['Home', 'Services', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase() === 'contact' ? 'enquiry-form' : item.toLowerCase())}
                className="text-left text-lg font-medium text-gray-800 hover:text-amber-600 transition-colors py-2 border-b border-gray-200"
              >
                {item}
              </button>
            ))}
            
            <div className="pt-6 space-y-4">
              <Button
                onClick={() => scrollToSection('enquiry-form')}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium py-3 rounded-full"
              >
                <Camera className="w-4 h-4 mr-2" />
                Book Now
              </Button>
              
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <a href="tel:+919640614333" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 96406 14333</span>
                </a>
                <a href="mailto:ganeshphotography333@gmail.com" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>ganeshphotography333@gmail.com</span>
                </a>
                <a href="https://instagram.com/ganeshphotography.co" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-600 hover:text-amber-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span>@ganeshphotography.co</span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Header;