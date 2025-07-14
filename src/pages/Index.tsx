import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EnquiryForm from "@/components/EnquiryForm";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <EnquiryForm />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default Index;
