import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import EnquiryForm from "@/components/EnquiryForm";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleFormSubmitted = () => {
    setShowPortfolio(true);
  };

  const handleViewPortfolio = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <EnquiryForm onFormSubmitted={handleFormSubmitted} showPortfolioButton={showPortfolio} onViewPortfolio={handleViewPortfolio} />
      {showPortfolio && <PortfolioSection />}
      <Footer />
    </div>
  );
};

export default Index;
