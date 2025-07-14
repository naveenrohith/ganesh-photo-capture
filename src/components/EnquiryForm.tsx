import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar as CalendarIcon, 
  CheckCircle, 
  Heart, 
  Camera, 
  Users, 
  Clock,
  Sparkles,
  Gift
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  // Step 1
  name: string;
  email: string;
  phone: string;
  
  // Step 2
  eventType: string;
  
  // Step 3
  date?: Date;
  venue: string;
  ceremonies: string[];
  duration: string;
  guestCount: string;
  
  // Step 4
  style: string;
  addOns: string[];
  
  // Step 5
  specialRequests: string;
}

const eventTypes = [
  { id: 'wedding', name: 'Wedding', icon: Heart, price: 'Starting ₹50,000' },
  { id: 'birthday', name: 'Birthday', icon: Gift, price: 'Starting ₹15,000' },
  { id: 'corporate', name: 'Corporate Event', icon: Users, price: 'Starting ₹25,000' },
  { id: 'fashion', name: 'Fashion Shoot', icon: Camera, price: 'Starting ₹20,000' },
];

const ceremonies = [
  { id: 'haldi', name: 'Haldi Ceremony', price: 15000 },
  { id: 'mehendi', name: 'Mehendi Ceremony', price: 20000 },
  { id: 'sangam', name: 'Sangam Ceremony', price: 18000 },
  { id: 'wedding', name: 'Main Wedding', price: 35000 },
  { id: 'reception', name: 'Reception', price: 30000 },
];

const photographyStyles = [
  { id: 'traditional', name: 'Traditional', description: 'Classic posed shots with cultural elements' },
  { id: 'candid', name: 'Candid', description: 'Natural moments and emotions captured' },
  { id: 'cinematic', name: 'Cinematic', description: 'Movie-like storytelling approach' },
  { id: 'contemporary', name: 'Contemporary', description: 'Modern artistic photography' },
];

const addOns = [
  { id: 'drone', name: 'Drone Photography', price: 10000 },
  { id: 'album', name: 'Premium Photo Album', price: 15000 },
  { id: 'video', name: 'Highlight Video', price: 25000 },
  { id: 'raw', name: 'Raw Photo Files', price: 8000 },
];

const EnquiryForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    venue: '',
    ceremonies: [],
    duration: '',
    guestCount: '',
    style: '',
    addOns: [],
    specialRequests: '',
  });
  
  const { toast } = useToast();
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const calculateQuote = () => {
    let total = 0;
    
    // Base event type pricing
    if (formData.eventType === 'wedding') {
      total += formData.ceremonies.reduce((sum, ceremony) => {
        const ceremonyPrice = ceremonies.find(c => c.id === ceremony)?.price || 0;
        return sum + ceremonyPrice;
      }, 0);
      
      // Bundle discount for 3+ ceremonies
      if (formData.ceremonies.length >= 3) {
        total *= 0.85; // 15% discount
      }
    } else if (formData.eventType === 'birthday') {
      total += 15000;
      if (parseInt(formData.guestCount) > 100) {
        total += 5000;
      }
    } else if (formData.eventType === 'corporate') {
      total += 25000;
    } else if (formData.eventType === 'fashion') {
      total += 20000;
    }
    
    // Add-ons
    total += formData.addOns.reduce((sum, addOn) => {
      const addOnPrice = addOns.find(a => a.id === addOn)?.price || 0;
      return sum + addOnPrice;
    }, 0);
    
    return total;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    // Here you would typically save to your backend
    console.log('Form submitted:', formData);
    toast({
      title: "Quote Request Submitted!",
      description: "We'll contact you within 24 hours with your personalized quote.",
    });
    
    // Reset form or redirect to thank you page
    setCurrentStep(1);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      venue: '',
      ceremonies: [],
      duration: '',
      guestCount: '',
      style: '',
      addOns: [],
      specialRequests: '',
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 step-slide-in">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Let's Get Started</h3>
              <p className="text-muted-foreground">Tell us about yourself</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91 98765 43210"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 step-slide-in">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">What's Your Event?</h3>
              <p className="text-muted-foreground">Choose the type of event you're planning</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eventTypes.map((event) => {
                const Icon = event.icon;
                return (
                  <div
                    key={event.id}
                    className={cn(
                      "p-6 border rounded-lg cursor-pointer transition-all hover:shadow-soft",
                      formData.eventType === event.id 
                        ? "border-accent bg-accent/10 shadow-gold" 
                        : "border-border hover:border-accent/50"
                    )}
                    onClick={() => setFormData({...formData, eventType: event.id})}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-accent/20 rounded-full">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{event.name}</h4>
                        <p className="text-sm text-muted-foreground">{event.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 step-slide-in">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Event Details</h3>
              <p className="text-muted-foreground">Tell us more about your {formData.eventType}</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label>Event Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-1",
                        !formData.date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? format(formData.date, "PPP") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => setFormData({...formData, date})}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label htmlFor="venue">Venue Location</Label>
                <Input
                  id="venue"
                  value={formData.venue}
                  onChange={(e) => setFormData({...formData, venue: e.target.value})}
                  placeholder="Enter venue or city"
                  className="mt-1"
                />
              </div>

              {formData.eventType === 'wedding' && (
                <div>
                  <Label>Ceremonies to Cover</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {ceremonies.map((ceremony) => (
                      <div key={ceremony.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={ceremony.id}
                          checked={formData.ceremonies.includes(ceremony.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                ceremonies: [...formData.ceremonies, ceremony.id]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                ceremonies: formData.ceremonies.filter(c => c !== ceremony.id)
                              });
                            }
                          }}
                        />
                        <Label htmlFor={ceremony.id} className="text-sm font-normal">
                          {ceremony.name} - ₹{ceremony.price.toLocaleString()}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {formData.ceremonies.length >= 3 && (
                    <Badge variant="secondary" className="mt-2">
                      <Sparkles className="mr-1 h-3 w-3" />
                      15% Bundle Discount Applied!
                    </Badge>
                  )}
                </div>
              )}

              {(formData.eventType === 'birthday' || formData.eventType === 'corporate') && (
                <>
                  <div>
                    <Label htmlFor="guestCount">Expected Guest Count</Label>
                    <Input
                      id="guestCount"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
                      placeholder="e.g., 50-100"
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="duration">Event Duration</Label>
                    <Input
                      id="duration"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="e.g., 4 hours"
                      className="mt-1"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 step-slide-in">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Style & Add-ons</h3>
              <p className="text-muted-foreground">Customize your photography experience</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <Label>Photography Style</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {photographyStyles.map((style) => (
                    <div
                      key={style.id}
                      className={cn(
                        "p-4 border rounded-lg cursor-pointer transition-all",
                        formData.style === style.id 
                          ? "border-accent bg-accent/10" 
                          : "border-border hover:border-accent/50"
                      )}
                      onClick={() => setFormData({...formData, style: style.id})}
                    >
                      <h4 className="font-semibold">{style.name}</h4>
                      <p className="text-sm text-muted-foreground">{style.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>Add-ons</Label>
                <div className="space-y-3 mt-2">
                  {addOns.map((addOn) => (
                    <div key={addOn.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={addOn.id}
                          checked={formData.addOns.includes(addOn.id)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setFormData({
                                ...formData,
                                addOns: [...formData.addOns, addOn.id]
                              });
                            } else {
                              setFormData({
                                ...formData,
                                addOns: formData.addOns.filter(a => a !== addOn.id)
                              });
                            }
                          }}
                        />
                        <Label htmlFor={addOn.id} className="font-normal">
                          {addOn.name}
                        </Label>
                      </div>
                      <span className="text-sm font-semibold">+₹{addOn.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        const quote = calculateQuote();
        return (
          <div className="space-y-6 step-slide-in">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Your Quote Summary</h3>
              <p className="text-muted-foreground">Review and finalize your booking</p>
            </div>
            
            <Card className="shadow-gold">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Estimated Quote</span>
                  <span className="text-2xl font-bold text-accent">₹{quote.toLocaleString()}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Event Type:</span>
                    <span className="font-semibold capitalize">{formData.eventType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-semibold">
                      {formData.date ? format(formData.date, "PPP") : 'Not selected'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Style:</span>
                    <span className="font-semibold capitalize">{formData.style}</span>
                  </div>
                  {formData.addOns.length > 0 && (
                    <div className="flex justify-between">
                      <span>Add-ons:</span>
                      <span className="font-semibold">{formData.addOns.length} selected</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div>
              <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                placeholder="Any specific requirements, shot lists, or special moments you'd like us to capture..."
                className="mt-1 min-h-[100px]"
              />
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                This is an estimated quote. Final pricing may vary based on specific requirements.
              </p>
              <Button
                variant="premium"
                size="lg"
                onClick={handleSubmit}
                className="w-full"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Submit Quote Request
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="enquiry-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-hero">
            <CardHeader>
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-foreground">Get Your Quote</h2>
                  <p className="text-muted-foreground">Step {currentStep} of {totalSteps}</p>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {renderStep()}
              
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                {currentStep < totalSteps && (
                  <Button
                    variant="premium"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && (!formData.name || !formData.email || !formData.phone)) ||
                      (currentStep === 2 && !formData.eventType) ||
                      (currentStep === 3 && !formData.date) ||
                      (currentStep === 4 && !formData.style)
                    }
                    className="flex items-center"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;