
import React, { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import CountryNavigation from "@/components/home/CountryNavigation";
import FeaturedMatches from "@/components/home/FeaturedMatches";
import FeatureBanner from "@/components/home/FeatureBanner";
import PopularLeagues from "@/components/home/PopularLeagues";
import TeamsAndMatches from "@/components/home/TeamsAndMatches";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import HighlightsSection from "@/components/home/HighlightsSection";
import NewsSection from "@/components/home/NewsSection";

// Import data
import { 
  featuredMatches, 
  popularLeagues, 
  popularTeams, 
  upcomingMatches, 
  countries,
  highlights,
  sportsNews
} from "@/components/home/data";

const HomePage = () => {
  const [activeCountry, setActiveCountry] = useState("Kenya");

  const handleCountryChange = (country: string) => {
    setActiveCountry(country);
  };

  // Filter featured matches based on active country
  const filteredMatches = featuredMatches.filter(match => 
    match.country === activeCountry || activeCountry === "All"
  );

  return (
    <div className="min-h-screen bg-mechitv-bg">
      {/* Hero Section */}
      <HeroSection />

      {/* Country Navigation */}
      <CountryNavigation 
        countries={countries} 
        activeCountry={activeCountry} 
        onCountryChange={handleCountryChange}
      />

      {/* Featured Live Matches */}
      <FeaturedMatches 
        matches={filteredMatches} 
        activeCountry={activeCountry}
      />

      {/* Highlights Section */}
      <HighlightsSection highlights={highlights} />

      {/* Featured Content Banner */}
      <FeatureBanner />

      {/* News Section */}
      <NewsSection news={sportsNews} />

      {/* Leagues Section */}
      <PopularLeagues leagues={popularLeagues} />

      {/* Two Column Layout: Top Teams and Upcoming Matches */}
      <TeamsAndMatches teams={popularTeams} upcomingMatches={upcomingMatches} />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
