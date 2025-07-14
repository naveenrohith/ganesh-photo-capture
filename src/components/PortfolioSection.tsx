import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Users, Camera, Gift, Filter, Eye } from "lucide-react";
import portfolioBg from "@/assets/portfolio-bg.jpg";

const portfolioCategories = [
  { id: 'all', name: 'All', icon: Camera },
  { id: 'wedding', name: 'Weddings', icon: Heart },
  { id: 'birthday', name: 'Birthdays', icon: Gift },
  { id: 'corporate', name: 'Corporate', icon: Users },
];

// Mock portfolio data - in a real app, this would come from your backend/CMS
const portfolioItems = [
  {
    id: 1,
    category: 'wedding',
    title: 'Elegant Wedding Ceremony',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
    description: 'Beautiful traditional wedding with modern touches'
  },
  {
    id: 2,
    category: 'wedding',
    title: 'Candid Moments',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop',
    description: 'Capturing genuine emotions and joy'
  },
  {
    id: 3,
    category: 'birthday',
    title: 'Birthday Celebration',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop',
    description: 'Joyful birthday party moments'
  },
  {
    id: 4,
    category: 'corporate',
    title: 'Corporate Event',
    image: 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=600&fit=crop',
    description: 'Professional corporate photography'
  },
  {
    id: 5,
    category: 'wedding',
    title: 'Pre-Wedding Shoot',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop',
    description: 'Romantic pre-wedding photography session'
  },
  {
    id: 6,
    category: 'birthday',
    title: 'Kids Birthday Party',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    description: 'Fun and colorful kids birthday celebration'
  },
  {
    id: 7,
    category: 'wedding',
    title: 'Reception Party',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop',
    description: 'Grand wedding reception photography'
  },
  {
    id: 8,
    category: 'corporate',
    title: 'Conference Coverage',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
    description: 'Professional conference documentation'
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${portfolioBg})` }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of captured moments and see the stories we've helped tell
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {portfolioCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "premium" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center space-x-2 transition-smooth"
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
              </Button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="portfolio-item cursor-pointer group overflow-hidden">
                  <CardContent className="p-0 relative">
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white space-y-2">
                          <Eye className="h-8 w-8 mx-auto" />
                          <p className="font-semibold">View Details</p>
                        </div>
                      </div>
                      
                      {/* Category Badge */}
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 left-4 bg-white/90 text-black"
                      >
                        {portfolioCategories.find(cat => cat.id === item.category)?.name}
                      </Badge>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full p-0">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[80vh] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/90">{item.description}</p>
                      <Badge variant="secondary" className="mt-2">
                        {portfolioCategories.find(cat => cat.id === item.category)?.name}
                      </Badge>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="transition-smooth hover:shadow-soft">
            <Camera className="mr-2 h-5 w-5" />
            View More Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;