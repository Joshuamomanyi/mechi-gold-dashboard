
import React, { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import CountryNavigation from "@/components/home/CountryNavigation";
import FeaturedMatches from "@/components/home/FeaturedMatches";
import FeatureBanner from "@/components/home/FeatureBanner";
import TeamsAndMatches from "@/components/home/TeamsAndMatches";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";
import HighlightsSection from "@/components/home/HighlightsSection";
import NewsSection from "@/components/home/NewsSection";
import PlayerPerformance from "@/components/home/PlayerPerformance";

// Import data
import { 
  featuredMatches as rawFeaturedMatches, 
  popularTeams, 
  upcomingMatches, 
  countries,
  highlights,
  sportsNews
} from "@/components/home/data";

// Type-safe mapping of match status
const mapStatusToAllowedType = (status: string): "LIVE" | "COUNTDOWN" | "FINISHED" => {
  if (status === "LIVE" || status === "COUNTDOWN" || status === "FINISHED") {
    return status as "LIVE" | "COUNTDOWN" | "FINISHED";
  }
  // Default fallback
  return "FINISHED";
};

// Map the matches to ensure status conforms to the expected type
const featuredMatches = rawFeaturedMatches.map(match => ({
  ...match,
  status: mapStatusToAllowedType(match.status)
}));

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
      {/* Country Navigation */}
      <CountryNavigation 
        countries={countries} 
        activeCountry={activeCountry} 
        onCountryChange={handleCountryChange}
      />

      {/* Featured Live Matches - FIRST as requested */}
      <FeaturedMatches 
        matches={filteredMatches} 
        activeCountry={activeCountry}
      />

      {/* Hero Section - SECOND as requested */}
      <HeroSection />

      {/* Highlights Section */}
      <HighlightsSection highlights={highlights} />

      {/* News Section */}
      <NewsSection news={sportsNews} />

      {/* Featured Content Banner */}
      <FeatureBanner />

      {/* Player Performance Section */}
      <PlayerPerformance />

      {/* Popular Teams (inside TeamsAndMatches) */}
      <TeamsAndMatches teams={popularTeams} upcomingMatches={upcomingMatches} />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
