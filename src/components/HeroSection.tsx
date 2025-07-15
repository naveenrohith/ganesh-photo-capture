import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWedding from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWedding})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="space-y-10">
          {/* Main Headline - Professional Typography */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-wide">
              <span className="font-thin">Ganesh</span>
              <br />
              <span className="font-semibold text-gold">Photography</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light tracking-wide">
              Capturing Your Perfect Moments
            </p>
          </div>

          {/* Subheadline */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light">
              Professional wedding and event photography that tells your unique story.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-4 leading-relaxed font-light">
              From intimate ceremonies to grand celebrations, we capture the emotions that matter most.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-gold hover:bg-gold-hover text-black font-semibold px-10 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-gold rounded-full"
            >
              Book Your Session
            </Button>
          </div>

          {/* Services Preview - Professional Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gold mb-3 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-wide">
                Weddings Captured
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gold mb-3 group-hover:scale-110 transition-transform">
                5+
              </div>
              <div className="text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-wide">
                Years Experience
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gold mb-3 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-wide">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-light text-gold mb-3 group-hover:scale-110 transition-transform">
                24hr
              </div>
              <div className="text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-wide">
                Quick Response
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/80" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
