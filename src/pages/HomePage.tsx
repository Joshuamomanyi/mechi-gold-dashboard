
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CountryNavigation from "@/components/home/CountryNavigation";
import FeaturedMatches from "@/components/home/FeaturedMatches";
import FeatureBanner from "@/components/home/FeatureBanner";
import PopularLeagues from "@/components/home/PopularLeagues";
import TeamsAndMatches from "@/components/home/TeamsAndMatches";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

// Import data
import { 
  featuredMatches, 
  popularLeagues, 
  popularTeams, 
  upcomingMatches, 
  countries 
} from "@/components/home/data";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-mechitv-bg">
      {/* Hero Section */}
      <HeroSection />

      {/* Country Navigation */}
      <CountryNavigation countries={countries} />

      {/* Featured Live Matches */}
      <FeaturedMatches matches={featuredMatches} />

      {/* Featured Content Banner */}
      <FeatureBanner />

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
