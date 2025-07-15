import { ArrowDown, Play, Award, Users, Camera, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroWedding from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-1000"
          style={{ backgroundImage: `url(${heroWedding})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <div className="w-2 h-2 bg-gold rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse delay-1000">
        <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse delay-500">
        <div className="w-2 h-2 bg-gold rounded-full opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Badge */}
          <div className="flex justify-center animate-fade-in">
            <Badge className="bg-gold/20 text-gold border-gold/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Photography Studio
            </Badge>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
              <span className="block font-extralight text-white/90">Capturing</span>
              <span className="block font-bold bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                Timeless Moments
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
              Professional wedding and event photography that transforms your special moments into eternal memories
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up delay-300">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-gold hover:bg-gold-hover text-black font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl rounded-full group"
            >
              Book Your Session
              <Camera className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToPortfolio}
              variant="outline"
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white hover:text-black font-semibold px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm rounded-full group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              View Portfolio
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-in-up delay-500">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-sm md:text-base text-gray-300 font-light">
                Weddings Captured
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="text-sm md:text-base text-gray-300 font-light">
                Years Experience
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-sm md:text-base text-gray-300 font-light">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                24hr
              </div>
              <div className="text-sm md:text-base text-gray-300 font-light">
                Quick Response
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-12 animate-fade-in-up delay-700">
            <div className="flex items-center space-x-2 text-gray-300">
              <Star className="w-5 h-5 text-gold fill-current" />
              <span className="text-sm">5.0 Rating</span>
            </div>
            <div className="w-px h-4 bg-gray-500"></div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-sm">1000+ Happy Clients</span>
            </div>
            <div className="w-px h-4 bg-gray-500"></div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-sm">Award Winning</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white/60 text-sm font-light">Scroll to explore</span>
            <ArrowDown className="w-6 h-6 text-white/80" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;