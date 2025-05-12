
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar } from "lucide-react";

const FeatureBanner = () => {
  return (
    <div className="bg-mechitv-bg py-12">
      <div className="container mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1540339832862-474599807836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb3RiYWxsJTIwY3Jvd2R8ZW58MHx8MHx8fDA%3D" 
            alt="Featured Match" 
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-mechitv-bg via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <Badge className="bg-mechitv-accent text-mechitv-bg mb-3">FEATURED</Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">AFC Leopards vs Gor Mahia: Nairobi Derby</h3>
            <p className="text-white/80 mb-4">The biggest rivalry in Kenyan football returns this weekend!</p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                <Play className="mr-2 h-4 w-4" /> Watch Promo
              </Button>
              <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Calendar className="mr-2 h-4 w-4" /> Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
