import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Calendar, 
  MapPin, 
  Shield, 
  Trophy, 
  Target,
  Clock,
  Edit3,
  CheckCircle,
  History
} from "lucide-react";

const PlayerDashboard = () => {
  // Mock player data
  const playerData = {
    name: "John Doe Smith",
    position: "Midfielder",
    jerseyNumber: 10,
    team: "Elite Strikers FC",
    league: "FKF County League - Nairobi",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stats: {
      matchesPlayed: 45,
      goals: 12,
      assists: 8,
      redCards: 2
    },
    personalDetails: {
      fullName: "John Doe Smith",
      dateOfBirth: "March 15, 1995",
      placeOfBirth: "Nairobi, Kenya",
      residence: "Westlands, Nairobi",
      idNumber: "******789",
      uniqueLeagueNo: "FKF-NAI-2024-001",
      primaryPosition: "Central Midfielder",
      preferredFoot: "Right",
      registrationStatus: "Verified"
    },
    recentMatches: [
      { date: "2024-07-20", time: "15:00", opponent: "Elite Strikers FC vs Green Commandos", score: "3 - 1", result: "win" },
      { date: "2024-07-15", time: "14:30", opponent: "Elite Strikers FC vs Thunder Lions", score: "2 - 2", result: "draw" },
      { date: "2024-07-10", time: "16:00", opponent: "Elite Strikers FC vs City Warriors", score: "1 - 2", result: "loss" },
      { date: "2024-07-05", time: "15:30", opponent: "Elite Strikers FC vs Rangers United", score: "4 - 0", result: "win" }
    ],
    teamHistory: [
      { teamName: "Elite Strikers FC", period: "2023 - Present" },
      { teamName: "Thunder Lions", period: "2021 - 2023" },
      { teamName: "City Warriors Youth", period: "2018 - 2021" }
    ],
    achievements: [
      "Top Scorer - Nairobi County League 2023",
      "FKF Sub-County Cup Winner 2022",
      "Best Midfielder - Regional Championship 2023",
      "Team Captain - Elite Strikers FC 2024"
    ],
    description: "Passionate midfielder with 8+ years of experience in competitive football. Known for excellent ball control, strategic playmaking, and leadership qualities. Committed to continuous improvement and team success."
  };

  const getScoreColor = (result: string) => {
    switch (result) {
      case 'win': return 'text-green-400';
      case 'loss': return 'text-red-400';
      case 'draw': return 'text-blue-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-mechitv-bg p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Player Profile Header */}
        <Card className="dashboard-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarImage src={playerData.avatar} alt={playerData.name} />
                <AvatarFallback className="bg-mechitv-accent/20 text-mechitv-accent text-2xl">
                  {playerData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">{playerData.name}</h1>
                <p className="text-xl text-mechitv-accent font-semibold">
                  {playerData.position} | #{playerData.jerseyNumber}
                </p>
                <p className="text-muted-foreground">
                  {playerData.team} ({playerData.league})
                </p>
              </div>
              
              <Button className="bg-mechitv-accent hover:bg-mechitv-accent/90 text-mechitv-bg">
                <Edit3 className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Personal Stats Summary */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-mechitv-accent" />
                  Career Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-mechitv-bg rounded-lg border border-border">
                    <div className="text-3xl font-bold text-mechitv-accent">{playerData.stats.matchesPlayed}</div>
                    <p className="text-sm text-muted-foreground mt-1">Matches Played</p>
                  </div>
                  <div className="text-center p-4 bg-mechitv-bg rounded-lg border border-border">
                    <div className="text-3xl font-bold text-mechitv-accent">{playerData.stats.goals}</div>
                    <p className="text-sm text-muted-foreground mt-1">Goals</p>
                  </div>
                  <div className="text-center p-4 bg-mechitv-bg rounded-lg border border-border">
                    <div className="text-3xl font-bold text-mechitv-accent">{playerData.stats.assists}</div>
                    <p className="text-sm text-muted-foreground mt-1">Assists</p>
                  </div>
                  <div className="text-center p-4 bg-mechitv-bg rounded-lg border border-border">
                    <div className="text-3xl font-bold text-mechitv-accent">{playerData.stats.redCards}</div>
                    <p className="text-sm text-muted-foreground mt-1">Red Cards</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Match History */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-mechitv-accent" />
                  Recent Match History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {playerData.recentMatches.map((match, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-mechitv-bg rounded-lg border border-border">
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{match.opponent}</p>
                        <p className="text-sm text-muted-foreground">{match.date} | {match.time}</p>
                      </div>
                      <div className={`text-lg font-bold ${getScoreColor(match.result)}`}>
                        {match.score}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                  View Full Match History
                </Button>
              </CardContent>
            </Card>

            {/* Player Description */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-mechitv-accent" />
                  Player Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{playerData.description}</p>
              </CardContent>
            </Card>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Player Details */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-mechitv-accent" />
                  Registration Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Full Name</span>
                    <span className="text-sm font-medium">{playerData.personalDetails.fullName}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Date of Birth</span>
                    <span className="text-sm font-medium">{playerData.personalDetails.dateOfBirth}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Place of Birth</span>
                    <span className="text-sm font-medium">{playerData.personalDetails.placeOfBirth}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Residence</span>
                    <span className="text-sm font-medium">{playerData.personalDetails.residence}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">ID/Birth Cert. No.</span>
                    <span className="text-sm font-medium">{playerData.personalDetails.idNumber}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Unique League No.</span>
                    <span className="text-sm font-bold text-mechitv-accent">{playerData.personalDetails.uniqueLeagueNo}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Primary Position</span>
                    <span className="text-sm font-medium">{playerData.personalDetails.primaryPosition}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Preferred Foot</span>
                    <span className="text-sm font-medium">{playerData.personalDetails.preferredFoot}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">Registration Status</span>
                    <Badge className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      {playerData.personalDetails.registrationStatus}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team History */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5 text-mechitv-accent" />
                  Team History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {playerData.teamHistory.map((team, index) => (
                    <div key={index} className="p-3 bg-mechitv-bg rounded-lg border border-border">
                      <p className="font-medium text-foreground">{team.teamName}</p>
                      <p className="text-sm text-muted-foreground">{team.period}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-mechitv-accent" />
                  Achievements & Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {playerData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-mechitv-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;