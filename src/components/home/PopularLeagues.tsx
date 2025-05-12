
import React from "react";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight } from "lucide-react";

interface League {
  id: number;
  name: string;
  viewers: string;
  image: string;
}

interface PopularLeaguesProps {
  leagues: League[];
}

const PopularLeagues = ({ leagues }: PopularLeaguesProps) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white flex items-center">
          <Trophy className="mr-2 text-mechitv-accent" /> Popular Leagues
        </h2>
        <Button variant="link" className="text-mechitv-accent">
          View All <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {leagues.map(league => (
          <div key={league.id} className="bg-mechitv-bg-light rounded-lg overflow-hidden border border-border hover:border-mechitv-accent/50 transition-all group">
            <div className="relative">
              <img 
                src={league.image} 
                alt={league.name} 
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-medium text-lg text-white">{league.name}</h3>
              </div>
            </div>
            <div className="p-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                <SoccerIcon className="inline-block mr-1 h-4 w-4 text-mechitv-accent" /> {league.viewers} viewers
              </p>
              <Button variant="ghost" size="sm" className="text-mechitv-accent hover:text-mechitv-accent/90">
                Follow
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Custom Soccer icon since Football is not available in lucide-react
const SoccerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6 5.8-2.8 4.8-1.4-1.4-4.8 2.8-1 4-4-1 2.8-4.8-1.4-1.4 4.8-2.8 1-4 4 1z"></path>
  </svg>
);

export default PopularLeagues;
