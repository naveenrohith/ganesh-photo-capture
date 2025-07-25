import { Heart, Users, Camera, Gift, Clock, Star, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    id: 'wedding',
    icon: Heart,
    title: 'Wedding Photography',
    description: 'Complete wedding documentation from pre-wedding to reception',
    features: [
      'Pre-wedding shoot',
      'Ceremony coverage',
      'Reception photography',
      'Candid moments',
      'Traditional poses',
      'High-resolution images'
    ],
    startingPrice: '₹50,000',
    duration: 'Full Day',
    popular: true
  },
  {
    id: 'birthday',
    icon: Gift,
    title: 'Birthday Events',
    description: 'Joyful birthday celebrations captured with creativity',
    features: [
      'Party coverage',
      'Candid shots',
      'Group photos',
      'Detail shots',
      'Fun moments',
      'Quick turnaround'
    ],
    startingPrice: '₹15,000',
    duration: '4-6 Hours',
    popular: false
  },
  {
    id: 'corporate',
    icon: Users,
    title: 'Corporate Events',
    description: 'Professional corporate photography for all business needs',
    features: [
      'Conference coverage',
      'Team photos',
      'Event documentation',
      'Professional portraits',
      'Product photography',
      'Brand storytelling'
    ],
    startingPrice: '₹25,000',
    duration: '4-8 Hours',
    popular: false
  },
  {
    id: 'fashion',
    icon: Camera,
    title: 'Fashion Shoots',
    description: 'Creative fashion and portrait photography sessions',
    features: [
      'Studio sessions',
      'Outdoor shoots',
      'Creative lighting',
      'Style direction',
      'Retouching included',
      'Portfolio building'
    ],
    startingPrice: '₹20,000',
    duration: '2-4 Hours',
    popular: false
  }
];

const addOnServices = [
  { name: 'Drone Photography', price: '₹10,000', description: 'Aerial shots and unique perspectives' },
  { name: 'Premium Photo Album', price: '₹15,000', description: 'Luxury printed photo album' },
  { name: 'Highlight Video', price: '₹25,000', description: '3-5 minute cinematic video' },
  { name: 'Raw Photo Files', price: '₹8,000', description: 'Unedited high-resolution files' },
];

const ServicesSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('enquiry-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header - Mobile Optimized */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">Photography Services</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional photography services tailored to capture your special moments perfectly
          </p>
        </div>

        {/* Main Services Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className={`relative transition-all hover:shadow-hero group ${service.popular ? 'ring-2 ring-accent shadow-gold' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-black font-semibold">
                    <Star className="mr-1 h-3 w-3 fill-current" />
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center space-y-4 pb-4">
                  <div className="mx-auto p-3 bg-accent/10 rounded-full w-fit group-hover:scale-110 transition-transform">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-accent">{service.startingPrice}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {service.duration}
                    </div>
                  </div>
                  
                  {/* Mobile: Accordion for features, Desktop: Always visible */}
                  <div className="sm:hidden">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="features" className="border-none">
                        <AccordionTrigger className="text-sm font-semibold py-2">
                          What's Included
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-1">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="mr-2 h-3 w-3 text-accent flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Desktop: Always visible features */}
                  <div className="hidden sm:block space-y-2">
                    <h4 className="font-semibold text-sm">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="mr-2 h-3 w-3 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant={service.popular ? "premium" : "outline"} 
                    className="w-full min-h-[48px] font-semibold"
                    onClick={scrollToForm}
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add-on Services - Mobile Optimized */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Add-On Services</h3>
            <p className="text-muted-foreground">Enhance your photography package with these premium add-ons</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addOnServices.map((addOn, index) => (
              <Card key={index} className="hover:shadow-soft transition-all group">
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="font-semibold text-lg">{addOn.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{addOn.description}</p>
                  <div className="text-xl font-bold text-accent">{addOn.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section - Mobile Optimized */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Ready to Capture Your Moments?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get a personalized quote in just 5 easy steps. Our simple form helps us understand 
              your needs and provide accurate pricing for your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="premium" 
                size="lg" 
                onClick={scrollToForm} 
                className="w-full sm:w-auto min-h-[56px] text-lg font-semibold px-8"
              >
                <Camera className="mr-2 h-5 w-5" />
                Get Free Quote in 5 Steps
              </Button>
              <div className="text-sm text-muted-foreground">
                ✓ No spam • ✓ 24hr response • ✓ Free consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;