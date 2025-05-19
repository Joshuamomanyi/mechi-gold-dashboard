
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Featured match type
interface TeamInfo {
  name: string;
  logo: string;
  score: number | null;
}

interface Match {
  id: number;
  date: string;
  homeTeam: TeamInfo;
  awayTeam: TeamInfo;
  league: string;
  status: "LIVE" | "COUNTDOWN" | "FINISHED";
  country: string;
}

interface FeaturedMatchesProps {
  matches: Match[];
  activeCountry: string;
}

const FeaturedMatches = ({ matches, activeCountry }: FeaturedMatchesProps) => {
  // Filter matches by the active country
  const filteredMatches = activeCountry === "All" 
    ? matches 
    : matches.filter(match => match.country === activeCountry);

  // Group matches by league
  const leagueGroups = filteredMatches.reduce((acc, match) => {
    if (!acc[match.league]) {
      acc[match.league] = [];
    }
    acc[match.league].push(match);
    return acc;
  }, {} as Record<string, Match[]>);

  // Get unique league names
  const leagues = Object.keys(leagueGroups);
  
  // Default to first league if available
  const [activeLeague, setActiveLeague] = useState(leagues.length > 0 ? leagues[0] : "");

  return (
    <div className="bg-mechitv-bg border-b border-border py-6">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-mechitv-accent">
            {activeCountry === "All" ? "All Leagues" : `${activeCountry} Leagues`}
          </h2>
        </div>
        
        {leagues.length > 0 ? (
          <Tabs defaultValue={activeLeague} onValueChange={setActiveLeague} className="w-full">
            <TabsList className="flex items-center justify-start overflow-x-auto pb-2 mb-4 bg-transparent">
              {leagues.map((league) => (
                <TabsTrigger 
                  key={league} 
                  value={league}
                  className="px-4 py-2 font-medium data-[state=active]:bg-transparent data-[state=active]:text-mechitv-accent"
                >
                  {league}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {leagues.map((league) => (
              <TabsContent key={league} value={league} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {leagueGroups[league].map((match) => (
                    <div key={match.id} className="bg-mechitv-bg-light rounded-lg overflow-hidden border border-border hover:border-mechitv-accent/50 transition-all group">
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-sm text-muted-foreground">{match.date}</div>
                          {match.status === "LIVE" ? (
                            <Badge className="bg-green-500 text-white">LIVE</Badge>
                          ) : match.status === "COUNTDOWN" ? (
                            <Badge className="bg-yellow-500 text-mechitv-bg">COUNTDOWN</Badge>
                          ) : null}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-center w-5/12">
                            <div className="w-12 h-12 mb-2">
                              <img 
                                src={match.homeTeam.logo} 
                                alt={match.homeTeam.name}
                                className="w-full h-full object-cover rounded-full" 
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-medium truncate">{match.homeTeam.name}</p>
                            </div>
                          </div>
                          
                          {match.homeTeam.score !== null ? (
                            <div className="flex items-center text-2xl font-bold">
                              <span>{match.homeTeam.score}</span>
                              <span className="mx-2">—</span>
                              <span>{match.awayTeam.score}</span>
                            </div>
                          ) : (
                            <div className="text-lg font-medium">vs</div>
                          )}
                          
                          <div className="flex flex-col items-center w-5/12">
                            <div className="w-12 h-12 mb-2">
                              <img 
                                src={match.awayTeam.logo} 
                                alt={match.awayTeam.name}
                                className="w-full h-full object-cover rounded-full" 
                              />
                            </div>
                            <div className="text-center">
                              <p className="text-sm font-medium truncate">{match.awayTeam.name}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-center">
                          <Button variant="outline" size="sm" className={match.status === "LIVE" ? "bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90" : "border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg"}>
                            {match.status === "LIVE" ? "Watch Now" : "Set Reminder"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No matches available for {activeCountry} at the moment
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedMatches;
