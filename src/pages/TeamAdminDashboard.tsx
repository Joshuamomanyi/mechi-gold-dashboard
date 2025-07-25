import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Users, 
  Plus, 
  Search, 
  Calendar, 
  Trophy, 
  Target,
  TrendingUp,
  Settings,
  Bell,
  FileText
} from "lucide-react";

const TeamAdminDashboard = () => {
  const teamStats = [
    { label: "Matches Played", value: "24", icon: <Calendar className="h-5 w-5" /> },
    { label: "Wins", value: "18", icon: <Trophy className="h-5 w-5" /> },
    { label: "Draws", value: "4", icon: <Target className="h-5 w-5" /> },
    { label: "Losses", value: "2", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Goals Scored", value: "56", icon: <Target className="h-5 w-5" /> },
    { label: "Goals Conceded", value: "18", icon: <Target className="h-5 w-5" /> },
  ];

  const rosterData = [
    { name: "John Doe", position: "GK", number: "1", status: "Active" },
    { name: "Mike Johnson", position: "DF", number: "4", status: "Active" },
    { name: "David Smith", position: "MF", number: "10", status: "Pending Approval" },
    { name: "Alex Wilson", position: "FW", number: "9", status: "Active" },
    { name: "Chris Brown", position: "DF", number: "5", status: "Active" },
  ];

  const upcomingMatches = [
    { date: "2024-07-30", time: "15:00", opponent: "Green Commandos FC", venue: "City Stadium", status: "Scheduled" },
    { date: "2024-08-05", time: "18:00", opponent: "Blue Warriors FC", venue: "Central Ground", status: "Scheduled" },
  ];

  const recentResults = [
    { date: "2024-07-20", time: "15:00", opponent: "Red Lions FC", venue: "Home", score: "3-1", result: "Win" },
    { date: "2024-07-15", time: "17:00", opponent: "Yellow Eagles FC", venue: "Away", score: "2-2", result: "Draw" },
  ];

  const playerSnapshots = [
    { player: "John Doe", goals: "0", assists: "2", apps: "24" },
    { player: "David Smith", goals: "15", assists: "8", apps: "22" },
    { player: "Alex Wilson", goals: "12", assists: "5", apps: "20" },
    { player: "Mike Johnson", goals: "3", assists: "1", apps: "24" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-mechitv-accent">Team Admin Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content - Left Side (3 columns) */}
          <div className="xl:col-span-3 space-y-6">
            {/* Team Profile Overview */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Team Profile Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-mechitv-accent text-mechitv-bg text-xl font-bold">ES</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">Elite Strikers FC</h2>
                    <p className="text-mechitv-text mb-1">FKF County League - Nairobi</p>
                    <p className="text-mechitv-text mb-2"><span className="font-medium">Manager:</span> Samuel Ndungu (+254 712 345 678)</p>
                    <p className="text-mechitv-text mb-4">A competitive football club established in 2018, known for developing young talent and playing attractive football in the Nairobi County League.</p>
                    <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                      Edit Team Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Roster Management */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Roster Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -y-1/2 h-4 w-4 text-mechitv-text" />
                    <Input 
                      placeholder="Search players..." 
                      className="pl-10 bg-mechitv-card border-mechitv-border text-white"
                    />
                  </div>
                  <Button variant="outline" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Existing Player
                  </Button>
                </div>

                <div className="rounded-lg border border-mechitv-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-mechitv-border hover:bg-transparent">
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Player Name</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Pos.</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">#</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Status</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rosterData.map((player, index) => (
                        <TableRow key={index} className="border-mechitv-border hover:bg-mechitv-card/50">
                          <TableCell className="text-white font-medium">{player.name}</TableCell>
                          <TableCell className="text-mechitv-text">{player.position}</TableCell>
                          <TableCell className="text-mechitv-text">{player.number}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={player.status === "Active" ? "default" : "secondary"}
                              className={player.status === "Active" 
                                ? "bg-green-600 text-white hover:bg-green-700" 
                                : "bg-amber-600 text-white hover:bg-amber-700"
                              }
                            >
                              {player.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="h-8 text-xs">
                                Edit
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 text-xs text-red-400 border-red-400 hover:bg-red-400 hover:text-white">
                                Remove
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Fixture & Match Day Management */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Fixture & Match Day Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                    Add New Match
                  </Button>
                  <Button variant="outline" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    Submit Match Day Roster
                  </Button>
                  <Button variant="outline" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    Report Match Events
                  </Button>
                </div>

                {/* Upcoming Matches */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Upcoming Matches</h3>
                  <div className="rounded-lg border border-mechitv-border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-mechitv-border hover:bg-transparent">
                          <TableHead className="text-mechitv-accent font-semibold">Date</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Time</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Opponent</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Venue</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {upcomingMatches.map((match, index) => (
                          <TableRow key={index} className="border-mechitv-border hover:bg-mechitv-card/50">
                            <TableCell className="text-white">{match.date}</TableCell>
                            <TableCell className="text-mechitv-text">{match.time}</TableCell>
                            <TableCell className="text-white font-medium">vs {match.opponent}</TableCell>
                            <TableCell className="text-mechitv-text">{match.venue}</TableCell>
                            <TableCell>
                              <Badge className="bg-purple-600 text-white hover:bg-purple-700">
                                {match.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Recent Results */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Recent Results</h3>
                  <div className="rounded-lg border border-mechitv-border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-mechitv-border hover:bg-transparent">
                          <TableHead className="text-mechitv-accent font-semibold">Date</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Time</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Opponent</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Venue</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Score</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Result</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentResults.map((match, index) => (
                          <TableRow key={index} className="border-mechitv-border hover:bg-mechitv-card/50">
                            <TableCell className="text-white">{match.date}</TableCell>
                            <TableCell className="text-mechitv-text">{match.time}</TableCell>
                            <TableCell className="text-white font-medium">vs {match.opponent}</TableCell>
                            <TableCell className="text-mechitv-text">{match.venue}</TableCell>
                            <TableCell className="text-white font-bold">{match.score}</TableCell>
                            <TableCell>
                              <Badge 
                                className={
                                  match.result === "Win" 
                                    ? "bg-green-600 text-white hover:bg-green-700"
                                    : match.result === "Draw"
                                    ? "bg-blue-600 text-white hover:bg-blue-700"
                                    : "bg-red-600 text-white hover:bg-red-700"
                                }
                              >
                                {match.result}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Right Side (1 column) */}
          <div className="xl:col-span-1 space-y-6">
            {/* Team Performance */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Team Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {teamStats.map((stat, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-mechitv-card/50">
                      <div className="flex justify-center text-mechitv-accent mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-mechitv-accent">{stat.value}</div>
                      <div className="text-xs text-mechitv-text">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                  View Detailed Stats
                </Button>
              </CardContent>
            </Card>

            {/* Player Snapshots */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Player Snapshots (Current Season)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="grid grid-cols-4 text-xs text-mechitv-accent font-semibold uppercase">
                    <div>Player</div>
                    <div className="text-center">G</div>
                    <div className="text-center">A</div>
                    <div className="text-center">Apps</div>
                  </div>
                  {playerSnapshots.map((player, index) => (
                    <div key={index} className="grid grid-cols-4 text-sm py-2 border-b border-mechitv-border">
                      <div className="text-white font-medium truncate">{player.player}</div>
                      <div className="text-center text-mechitv-text">{player.goals}</div>
                      <div className="text-center text-mechitv-text">{player.assists}</div>
                      <div className="text-center text-mechitv-text">{player.apps}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                  View Full Roster Stats
                </Button>
              </CardContent>
            </Card>

            {/* Announcements */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Announcements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Internal Team Updates</h4>
                    <div className="text-sm text-mechitv-text space-y-2">
                      <p>• Training session moved to 5PM tomorrow</p>
                      <p>• New jerseys arrived - collect from office</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">League Updates</h4>
                    <div className="text-sm text-mechitv-text space-y-2">
                      <p>• Match officials assignment released</p>
                      <p>• League standings updated</p>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                  <Bell className="h-4 w-4 mr-2" />
                  Post New Announcement
                </Button>
              </CardContent>
            </Card>

            {/* Settings & Access */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Settings & Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="text-sm text-mechitv-text space-y-2">
                    <p>• Manage Team Staff Access</p>
                    <p>• Update Public Profile Visibility</p>
                    <p>• Notification Settings</p>
                    <p>• Export Team Data</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                  <Settings className="h-4 w-4 mr-2" />
                  Go to Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeamAdminDashboard;