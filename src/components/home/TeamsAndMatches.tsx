
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, ArrowRight } from "lucide-react";

interface Team {
  id: number;
  name: string;
  followers: string;
  avatar: string;
}

interface UpcomingMatch {
  id: number;
  title: string;
  date: string;
  image: string;
  competition: string;
}

interface TeamsAndMatchesProps {
  teams: Team[];
  upcomingMatches: UpcomingMatch[];
}

const TeamsAndMatches = ({ teams, upcomingMatches }: TeamsAndMatchesProps) => {
  // Limit the displayed teams to only 4
  const displayedTeams = teams.slice(0, 4);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Popular Teams */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Users className="mr-2 text-mechitv-accent" /> Popular Teams
            </h2>
            <Button variant="link" className="text-mechitv-accent">
              See All <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
            {displayedTeams.map((team, index) => (
              <div 
                key={team.id} 
                className={`flex items-center justify-between py-3 ${
                  index !== displayedTeams.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src={team.avatar} 
                      alt={team.name} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{team.name}</h3>
                    <p className="text-xs text-muted-foreground">{team.followers} followers</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Matches */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Calendar className="mr-2 text-mechitv-accent" /> Upcoming
            </h2>
            <Button variant="link" className="text-mechitv-accent">
              Calendar <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-mechitv-bg-light rounded-lg border border-border overflow-hidden">
            {upcomingMatches.map((match, index) => (
              <div 
                key={match.id} 
                className={`flex ${
                  index !== upcomingMatches.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="w-1/3">
                  <img 
                    src={match.image} 
                    alt={match.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 w-2/3">
                  <Badge variant="outline" className="mb-2 text-xs border-mechitv-accent/50 text-mechitv-accent">
                    {match.competition}
                  </Badge>
                  <h3 className="font-medium">{match.title}</h3>
                  <p className="text-sm text-mechitv-accent mt-1">{match.date}</p>
                  <Button variant="outline" size="sm" className="mt-3 w-full text-center">
                    Set Reminder
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsAndMatches;
