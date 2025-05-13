
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-mechitv-accent/70 to-mechitv-bg min-h-[50vh] flex items-center py-16 md:py-20">
      <div className="absolute inset-0 bg-mechitv-bg-light/20 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            East Africa's Premier Sports Streaming Platform
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8">
            Watch live football matches, tournaments, and sporting events from across East Africa. Support your team for an affordable price!
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Watch Live
            </Button>
            <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
