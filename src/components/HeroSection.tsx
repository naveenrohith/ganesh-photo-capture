import { ArrowRight, Play, Users, CheckCircle, Camera, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient and Texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 0%, transparent 40%), 
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 0%, transparent 40%),
                             radial-gradient(circle at 50% 10%, rgba(251,146,60,0.1) 0%, transparent 30%)`
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-1000 opacity-30"></div>
      <div className="absolute bottom-1/3 left-20 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse delay-500 opacity-40"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        <div className="space-y-10 lg:space-y-12">
          {/* Main Headline - Reduced size by ~20% */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              <span className="block text-white font-light mb-2 sm:mb-3">Capturing</span>
              <span className="block font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Life's Precious Moments
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              Expert wedding & event photography across India with 5+ years experience and 1000+ happy clients
            </p>
          </div>

          {/* CTA Buttons - Pill shaped with enhanced hover */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 animate-fade-in-up delay-200">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 hover:shadow-[0_0_30px_rgba(251,146,60,0.4)] text-white font-bold px-8 py-3.5 text-base transition-all duration-300 transform hover:scale-105 rounded-full group border-0"
            >
              Book Your Session
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg" 
              className="border-2 border-white/40 text-white hover:bg-white hover:text-black hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] font-semibold px-8 py-3.5 text-base transition-all duration-300 backdrop-blur-sm rounded-full group bg-transparent"
            >
              <Camera className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              View Services
            </Button>
          </div>

          {/* Features Grid - Reduced icon sizes by 35% */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-10 sm:pt-12 animate-fade-in-up delay-400">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-xl mb-3 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all duration-300">
                <Camera className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">Professional Quality</h3>
              <p className="text-gray-400 text-sm leading-relaxed">High-end equipment and artistic vision</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-xl mb-3 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">100% Satisfaction</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Results that exceed expectations</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-xl mb-3 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all duration-300">
                <Star className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold mb-2">5-Star Rated</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Trusted by clients across India</p>
            </div>
          </div>

          {/* Stats Section - Single centered row */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16 pt-10 sm:pt-12 animate-fade-in-up delay-600">
            <div className="text-center group cursor-pointer min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                Weddings
              </div>
            </div>
            <div className="text-center group cursor-pointer min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                Years
              </div>
            </div>
            <div className="text-center group cursor-pointer min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                Clients
              </div>
            </div>
            <div className="text-center group cursor-pointer min-w-[80px]">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300">
                24hr
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                Response
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean bottom transition with subtle wave effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 sm:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,90 600,30 900,60 C1050,75 1150,45 1200,60 L1200,120 L0,120 Z" fill="hsl(var(--background))" fillOpacity="1"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;