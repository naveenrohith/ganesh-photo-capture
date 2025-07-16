import { ArrowRight, Camera, Star, CheckCircle, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(251,146,60,0.1) 0%, transparent 50%)`
          }}></div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400/60 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-1.5 h-1.5 bg-orange-500/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-20 w-1.5 h-1.5 bg-amber-300/50 rounded-full animate-pulse delay-500"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Trust Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-400/30 px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 fill-current" />
              5-Star Rated • 1000+ Happy Clients
            </Badge>
          </div>

          {/* Main Headline - Mobile Optimized */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white mb-2 sm:mb-4">Capturing</span>
              <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Life's Precious Moments
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Professional wedding & event photography across India with 5+ years experience
            </p>
          </div>

          {/* Primary CTAs - Mobile First */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 animate-fade-in-up delay-200">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:shadow-[0_0_30px_rgba(251,146,60,0.4)] text-white font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 rounded-full group border-0 min-h-[56px]"
            >
              Get Free Quote Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg" 
              className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white hover:text-black hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] font-semibold px-8 py-4 text-lg transition-all duration-300 backdrop-blur-sm rounded-full group bg-transparent min-h-[56px]"
            >
              <Camera className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              View Our Services
            </Button>
          </div>

          {/* Key Features - Mobile Optimized Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 animate-fade-in-up delay-400">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all duration-300">
                <Camera className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Quality</h3>
              <p className="text-gray-400 leading-relaxed">High-end equipment and artistic vision for stunning results</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all duration-300">
                <CheckCircle className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Satisfaction</h3>
              <p className="text-gray-400 leading-relaxed">Guaranteed results that exceed your expectations</p>
            </div>
            
            <div className="text-center group sm:col-span-1 col-span-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all duration-300">
                <Clock className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">24hr Response</h3>
              <p className="text-gray-400 leading-relaxed">Quick response and professional service</p>
            </div>
          </div>

          {/* Stats Section - Mobile Optimized */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-12 animate-fade-in-up delay-600">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Weddings
              </div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Years
              </div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Clients
              </div>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                5★
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Rating
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="pt-8 animate-fade-in-up delay-800">
            <p className="text-gray-400 mb-4">Ready to capture your special moments?</p>
            <Button 
              onClick={scrollToForm}
              variant="ghost"
              className="text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 font-semibold text-lg group"
            >
              Start Your Free Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 sm:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z" fill="hsl(var(--background))" fillOpacity="1"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;