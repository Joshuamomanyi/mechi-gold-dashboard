
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const matches = [
  {
    id: 1,
    teamA: "Arsenal",
    teamB: "Chelsea",
    date: "May 15, 2025",
    time: "19:45",
    competition: "Premier League",
    status: "scheduled",
  },
  {
    id: 2,
    teamA: "Barcelona",
    teamB: "Sevilla",
    date: "May 16, 2025",
    time: "20:00",
    competition: "La Liga",
    status: "scheduled",
  },
  {
    id: 3,
    teamA: "Bayern Munich",
    teamB: "Dortmund",
    date: "May 17, 2025",
    time: "18:30",
    competition: "Bundesliga",
    status: "pending",
  },
  {
    id: 4,
    teamA: "PSG",
    teamB: "Lyon",
    date: "May 18, 2025",
    time: "20:45",
    competition: "Ligue 1",
    status: "pending",
  },
];

const UpcomingMatches = () => {
  return (
    <Card className="dashboard-card">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-medium">Upcoming Matches</h3>
        <a href="#" className="text-xs text-mechitv-accent hover:underline">
          Manage matches
        </a>
      </div>
      
      <div className="space-y-3">
        {matches.map((match) => (
          <div 
            key={match.id} 
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-md bg-mechitv-bg border border-border hover:border-mechitv-accent/30 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <p className="font-medium">{match.teamA} vs {match.teamB}</p>
                <Badge 
                  variant="outline" 
                  className="text-[10px] h-5 bg-mechitv-accent/10 text-mechitv-accent border-none"
                >
                  {match.competition}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                {match.date} • {match.time}
              </p>
            </div>
            
            <div className="mt-2 sm:mt-0">
              <Badge 
                variant={match.status === "scheduled" ? "default" : "secondary"}
                className={
                  match.status === "scheduled" 
                    ? "bg-mechitv-accent text-mechitv-bg" 
                    : "bg-secondary text-muted-foreground"
                }
              >
                {match.status === "scheduled" ? "Scheduled" : "Pending"}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default UpcomingMatches;
