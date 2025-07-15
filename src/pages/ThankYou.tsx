import { useEffect } from "react";
import { Camera, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const scrollToPortfolio = () => {
    window.location.href = "/#portfolio";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Thank You Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-elegant border-primary/20">
              <CardContent className="p-8 space-y-6">
                {/* Success Icon */}
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-4">
                    <CheckCircle className="h-16 w-16 text-primary" />
                  </div>
                </div>

                {/* Thank You Message */}
                <div className="space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                    Thank You!
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Your quote request has been submitted successfully. We'll contact you within 24 hours with your personalized quote and discuss your photography needs.
                  </p>
                </div>

                {/* What's Next */}
                <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                      <p className="text-muted-foreground">We'll review your requirements and prepare a detailed quote</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                      <p className="text-muted-foreground">Our team will contact you to discuss your event details</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                      <p className="text-muted-foreground">We'll schedule a consultation to finalize your photography package</p>
                    </div>
                  </div>
                </div>

                {/* Portfolio CTA */}
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    While you wait, take a look at our portfolio to see our work in action.
                  </p>
                  <Button
                    variant="premium"
                    size="lg"
                    onClick={scrollToPortfolio}
                    className="text-lg px-8 py-4"
                  >
                    <Camera className="mr-2 h-5 w-5" />
                    View Our Portfolio
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-6 space-y-3">
                  <h4 className="font-semibold text-foreground">Need immediate assistance?</h4>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>96406 14333</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>ganeshphotography333@gmail.com</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;