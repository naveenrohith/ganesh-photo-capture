import { ArrowDown, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroWedding from "@/assets/hero-wedding.jpg";
const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroWedding})`
    }}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo Animation */}
          <div className="flex justify-center mb-8">
            
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Ganesh Photography
            </h1>
            <p className="text-xl md:text-2xl font-light text-gold">
              Capturing Your Perfect Moments
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Professional wedding and event photography that tells your unique story. 
            From intimate ceremonies to grand celebrations, we capture the emotions that matter most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button variant="premium" size="lg" onClick={scrollToForm} className="text-lg px-8 py-4 min-w-[200px]">
              Get Instant Quote
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('portfolio')?.scrollIntoView({
            behavior: 'smooth'
          })} className="text-lg px-8 py-4 min-w-[200px] border-white/30 text-white hover:bg-white/10">
              <Camera className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>

          {/* Services Preview */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gold">500+</div>
              <div className="text-sm text-white/70">Weddings Captured</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gold">5+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gold">100%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gold">24hr</div>
              <div className="text-sm text-white/70">Quick Response</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>;
};
export default HeroSection;