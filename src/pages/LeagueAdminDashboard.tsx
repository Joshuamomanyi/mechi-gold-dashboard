import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
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
  Search, 
  Calendar, 
  Trophy, 
  Target,
  TrendingUp,
  Settings,
  FileText,
  BarChart3,
  Megaphone,
  Upload,
  Download
} from "lucide-react";

const LeagueAdminDashboard = () => {
  const leagueStats = [
    { label: "Registered Teams", value: "24", icon: <Users className="h-6 w-6" /> },
    { label: "Registered Players", value: "456", icon: <Users className="h-6 w-6" /> },
    { label: "Matches Played", value: "132", icon: <Calendar className="h-6 w-6" /> },
    { label: "Matches Scheduled", value: "45", icon: <Target className="h-6 w-6" /> },
  ];

  const teamsData = [
    { name: "Elite Strikers FC", manager: "Samuel Ndungu", players: "19", status: "Active" },
    { name: "Green Commandos FC", manager: "Peter Mwangi", players: "18", status: "Active" },
    { name: "Blue Warriors FC", manager: "James Kimani", players: "20", status: "Pending" },
    { name: "Red Lions FC", manager: "Mary Wanjiku", players: "17", status: "Active" },
    { name: "Yellow Eagles FC", manager: "John Mutua", players: "21", status: "Active" },
  ];

  const playersData = [
    { name: "David Smith", team: "Elite Strikers FC", id: "UL001234", status: "Verified" },
    { name: "Mike Johnson", team: "Green Commandos FC", id: "UL001235", status: "Verified" },
    { name: "Alex Wilson", team: "Blue Warriors FC", id: "UL001236", status: "Pending Cert" },
    { name: "Chris Brown", team: "Red Lions FC", id: "UL001237", status: "Verified" },
    { name: "Tom Anderson", team: "Yellow Eagles FC", id: "UL001238", status: "Pending Cert" },
  ];

  const upcomingFixtures = [
    { date: "2024-07-30", time: "15:00", home: "Elite Strikers FC", away: "Green Commandos FC", venue: "City Stadium", status: "Scheduled" },
    { date: "2024-07-30", time: "17:00", home: "Blue Warriors FC", away: "Red Lions FC", venue: "Central Ground", status: "Scheduled" },
    { date: "2024-08-05", time: "15:00", home: "Yellow Eagles FC", away: "Elite Strikers FC", venue: "Municipal Field", status: "Scheduled" },
  ];

  const recentResults = [
    { date: "2024-07-20", time: "15:00", home: "Elite Strikers FC", away: "Red Lions FC", venue: "City Stadium", score: "3-1", status: "Completed" },
    { date: "2024-07-20", time: "17:00", home: "Green Commandos FC", away: "Yellow Eagles FC", venue: "Central Ground", score: "2-2", status: "Completed" },
    { date: "2024-07-15", time: "15:00", home: "Blue Warriors FC", away: "Elite Strikers FC", venue: "Municipal Field", score: "1-4", status: "Completed" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-mechitv-accent">League Admin Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content - Left Side (3 columns) */}
          <div className="xl:col-span-3 space-y-6">
            {/* League Overview */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">League Overview: FKF Nairobi County League 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {leagueStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-lg bg-mechitv-card/50 border border-mechitv-border">
                      <div className="flex justify-center text-mechitv-accent mb-3">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-mechitv-accent mb-1">{stat.value}</div>
                      <div className="text-sm text-mechitv-text">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-lg bg-mechitv-card/30 border border-mechitv-border">
                  <h3 className="text-lg font-semibold text-white mb-2">Current League Leader</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-mechitv-accent">Elite Strikers FC</span>
                      <p className="text-mechitv-text">Leading the table with exceptional performance</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-mechitv-accent">54 Points</div>
                      <div className="text-sm text-mechitv-text">Goal Difference: +38</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Management */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-mechitv-text" />
                    <Input 
                      placeholder="Search teams..." 
                      className="pl-10 bg-mechitv-card border-mechitv-border text-white"
                    />
                  </div>
                  <Button variant="outline" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    View Pending Registrations
                  </Button>
                </div>

                <div className="rounded-lg border border-mechitv-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-mechitv-border hover:bg-transparent">
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Team Name</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Manager</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Players</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Status</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {teamsData.map((team, index) => (
                        <TableRow key={index} className="border-mechitv-border hover:bg-mechitv-card/50">
                          <TableCell className="text-white font-medium">{team.name}</TableCell>
                          <TableCell className="text-mechitv-text">{team.manager}</TableCell>
                          <TableCell className="text-mechitv-text">{team.players}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={team.status === "Active" ? "default" : "secondary"}
                              className={team.status === "Active" 
                                ? "bg-green-600 text-white hover:bg-green-700" 
                                : "bg-amber-600 text-white hover:bg-amber-700"
                              }
                            >
                              {team.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" className="h-8 text-xs">
                                View
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 text-xs">
                                Manage
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 text-xs">
                                Review
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

            {/* Player Management */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Player Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-mechitv-text" />
                    <Input 
                      placeholder="Search players by name or ID..." 
                      className="pl-10 bg-mechitv-card border-mechitv-border text-white"
                    />
                  </div>
                  <Button variant="outline" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    View Pending Approvals
                  </Button>
                </div>

                <div className="rounded-lg border border-mechitv-border overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-mechitv-border hover:bg-transparent">
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Player Name</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Team</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Unique ID</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Status</TableHead>
                        <TableHead className="text-mechitv-accent font-semibold uppercase">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {playersData.map((player, index) => (
                        <TableRow key={index} className="border-mechitv-border hover:bg-mechitv-card/50">
                          <TableCell className="text-white font-medium">{player.name}</TableCell>
                          <TableCell className="text-mechitv-text">{player.team}</TableCell>
                          <TableCell className="text-mechitv-text font-mono">{player.id}</TableCell>
                          <TableCell>
                            <Badge 
                              variant={player.status === "Verified" ? "default" : "secondary"}
                              className={player.status === "Verified" 
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
                                View Profile
                              </Button>
                              <Button size="sm" variant="outline" className="h-8 text-xs">
                                Verify
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

            {/* Fixture & Results Management */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Fixture & Results Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                    Schedule New Match
                  </Button>
                  <Button variant="outline" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    Input Match Results
                  </Button>
                  <Button variant="outline" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    Assign Referees/Venue
                  </Button>
                </div>

                {/* Upcoming League Fixtures */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Upcoming League Fixtures</h3>
                  <div className="rounded-lg border border-mechitv-border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-mechitv-border hover:bg-transparent">
                          <TableHead className="text-mechitv-accent font-semibold">Date</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Time</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Home Team</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Away Team</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Venue</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {upcomingFixtures.map((match, index) => (
                          <TableRow key={index} className="border-mechitv-border hover:bg-mechitv-card/50">
                            <TableCell className="text-white">{match.date}</TableCell>
                            <TableCell className="text-mechitv-text">{match.time}</TableCell>
                            <TableCell className="text-white font-medium">{match.home}</TableCell>
                            <TableCell className="text-white font-medium">{match.away}</TableCell>
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

                {/* Recent League Results */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Recent League Results</h3>
                  <div className="rounded-lg border border-mechitv-border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-mechitv-border hover:bg-transparent">
                          <TableHead className="text-mechitv-accent font-semibold">Date</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Time</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Home Team</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Away Team</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Venue</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Score</TableHead>
                          <TableHead className="text-mechitv-accent font-semibold">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentResults.map((match, index) => (
                          <TableRow key={index} className="border-mechitv-border hover:bg-mechitv-card/50">
                            <TableCell className="text-white">{match.date}</TableCell>
                            <TableCell className="text-mechitv-text">{match.time}</TableCell>
                            <TableCell className="text-white font-medium">{match.home}</TableCell>
                            <TableCell className="text-white font-medium">{match.away}</TableCell>
                            <TableCell className="text-mechitv-text">{match.venue}</TableCell>
                            <TableCell className="text-white font-bold">{match.score}</TableCell>
                            <TableCell>
                              <Badge className="bg-blue-600 text-white hover:bg-blue-700">
                                {match.status}
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
            {/* Content & Communication */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Content & Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <Button variant="outline" className="w-full justify-start border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    <FileText className="h-4 w-4 mr-2" />
                    Publish League News
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    <Megaphone className="h-4 w-4 mr-2" />
                    Post League Announcement
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Official Documents
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    <FileText className="h-4 w-4 mr-2" />
                    Manage League Media
                  </Button>
                </div>
                <p className="text-sm text-mechitv-text">
                  Keep teams and fans informed with regular updates, announcements, and media content through the official league channels.
                </p>
              </CardContent>
            </Card>

            {/* Reporting & Analytics */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Reporting & Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="text-sm text-mechitv-text space-y-2">
                    <p>• View League Performance Trends</p>
                    <p>• Top Scorers & Disciplinary Reports</p>
                    <p>• Export League Data</p>
                    <p>• Attendance Reports</p>
                    <p>• Financial Reports</p>
                    <p>• Player Statistics Summary</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Generate Reports
                </Button>
              </CardContent>
            </Card>

            {/* Settings & Configuration */}
            <Card className="dashboard-card">
              <CardHeader>
                <CardTitle className="text-mechitv-accent">Settings & Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="text-sm text-mechitv-text space-y-2">
                    <p>• Edit League Details & Rules</p>
                    <p>• Manage League Officials & Access</p>
                    <p>• Season Management</p>
                    <p>• Competition Format Settings</p>
                    <p>• Registration Workflow Settings</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                  <Settings className="h-4 w-4 mr-2" />
                  Go to League Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LeagueAdminDashboard;