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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
          }}></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-orange-500 rounded-full animate-pulse delay-1000 opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-amber-300 rounded-full animate-pulse delay-500 opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-8 lg:space-y-12">
          {/* Main Headline */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tight">
              <span className="block text-white/90 font-light mb-2 sm:mb-4">Capturing</span>
              <span className="block font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Life's Precious
              </span>
              <span className="block font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Moments
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Professional wedding and event photography that transforms your special occasions into timeless memories with artistic excellence and emotional depth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 animate-fade-in-up delay-300">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-10 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl rounded-full group border-0"
            >
              Book Your Session
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              size="lg" 
              className="border-2 border-white/40 text-white hover:bg-white hover:text-black font-semibold px-10 py-4 text-lg transition-all duration-300 backdrop-blur-sm rounded-full group bg-transparent"
            >
              <Camera className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              View Services
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-12 sm:pt-16 animate-fade-in-up delay-500">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Camera className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Quality</h3>
              <p className="text-gray-400 text-sm leading-relaxed">High-end equipment and artistic vision for stunning results</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Satisfaction</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Guaranteed results that exceed your expectations</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">5-Star Rated</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Trusted by 1000+ happy clients across India</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-12 sm:pt-16 animate-fade-in-up delay-700">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Weddings
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Years
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                1000+
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Clients
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24hr
              </div>
              <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Response
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;