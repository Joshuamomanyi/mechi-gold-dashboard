import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare, 
  Search, 
  Users, 
  Star, 
  List, 
  ChevronUp, 
  Calendar, 
  TagIcon,
  Home,
  Bell,
  Mail,
  User,
  Bookmark,
  MoreHorizontal,
  Pencil,
  Menu as MenuIcon
} from "lucide-react";

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Custom sports icons
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

const BasketballIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="m4.93 4.93 4.24 4.24"></path>
    <path d="m14.83 9.17 4.24-4.24"></path>
    <path d="m14.83 14.83 4.24 4.24"></path>
    <path d="m9.17 14.83-4.24 4.24"></path>
    <path d="M12 2a10 10 0 0 0-8 4"></path>
    <path d="M12 22a10 10 0 0 0 8-4"></path>
  </svg>
);

const TennisIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M18.73 5.27a10 10 0 0 1 0 13.46"></path>
    <path d="M5.27 5.27a10 10 0 0 0 0 13.46"></path>
  </svg>
);

const BaseballIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M5.13 10.23C4.4 11.95 4 13.93 4 16c0 1.77.29 3.5.83 5"></path>
    <path d="M9.13 6.23C7.4 5.5 5.43 5.1 3.35 5.1c-1.77 0-3.5.29-5 .83"></path>
    <path d="M18.87 17.77c.73-1.72 1.13-3.7 1.13-5.77 0-1.77-.29-3.5-.83-5"></path>
    <path d="M14.87 13.77C16.6 14.5 18.57 14.9 20.65 14.9c1.77 0 3.5-.29 5-.83"></path>
    <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10Z"></path>
  </svg>
);

const F1Icon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M5 6h14M8 6v7c0 2-1 3-3 3"></path>
    <path d="M19 14c-1.333 0-2-.667-2-2V9"></path>
    <path d="M5 14h8"></path>
  </svg>
);

// Mock forum discussions data
const discussions = [
  {
    id: 1,
    title: "Should VAR be scrapped or improved?",
    author: "SportsDebater",
    avatar: "https://i.pravatar.cc/150?img=1",
    date: "2 hours ago",
    content: "The implementation of VAR continues to be controversial. What are your thoughts on its current state and future?",
    replies: 48,
    views: 342,
    tags: ["Football", "VAR", "Referees"]
  },
  {
    id: 2,
    title: "Best young talents to watch this season",
    author: "TalentScout",
    avatar: "https://i.pravatar.cc/150?img=2",
    date: "1 day ago",
    content: "Which young players do you think will break through and make a significant impact this season?",
    replies: 36,
    views: 289,
    tags: ["Young Players", "Prospects", "Breakthrough"]
  },
  {
    id: 3,
    title: "Formula 1: Should team orders be banned?",
    author: "F1Enthusiast",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "3 days ago",
    content: "Team orders have always been a controversial topic. Should they be completely banned or are they a necessary part of the sport?",
    replies: 25,
    views: 210,
    tags: ["Formula 1", "Team Orders", "Racing"]
  },
  {
    id: 4,
    title: "The evolution of basketball positions",
    author: "HoopAnalyst",
    avatar: "https://i.pravatar.cc/150?img=4",
    date: "5 days ago",
    content: "Traditional basketball positions seem less relevant in modern basketball. Let's discuss how positions have evolved.",
    replies: 19,
    views: 176,
    tags: ["Basketball", "Tactics", "NBA"]
  },
  {
    id: 5,
    title: "Is the current schedule too demanding for players?",
    author: "PlayerWelfare",
    avatar: "https://i.pravatar.cc/150?img=5",
    date: "1 week ago",
    content: "With increasing number of fixtures, are we pushing players too hard? What should be done to protect player welfare?",
    replies: 41,
    views: 302,
    tags: ["Player Welfare", "Schedule", "Injuries"]
  }
];

// Mock popular topics data
const popularTopics = [
  { id: 1, name: "Transfer Rumors", count: 324 },
  { id: 2, name: "Tactical Analysis", count: 256 },
  { id: 3, name: "Match Predictions", count: 203 },
  { id: 4, name: "Player Comparisons", count: 189 },
  { id: 5, name: "Fantasy Sports", count: 172 }
];

// Mock active users data
const activeUsers = [
  { id: 1, name: "SportsMaster", avatar: "https://i.pravatar.cc/150?img=11", posts: 478 },
  { id: 2, name: "AnalystPro", avatar: "https://i.pravatar.cc/150?img=12", posts: 356 },
  { id: 3, name: "TacticsTalk", avatar: "https://i.pravatar.cc/150?img=13", posts: 290 },
  { id: 4, name: "StatisticsFan", avatar: "https://i.pravatar.cc/150?img=14", posts: 245 },
  { id: 5, name: "DebateKing", avatar: "https://i.pravatar.cc/150?img=15", posts: 213 }
];

// Sports categories for the sidebar
const sportsCategories = [
  { id: 1, name: "Home", icon: Home },
  { id: 2, name: "Football", icon: SoccerIcon },
  { id: 3, name: "Basketball", icon: BasketballIcon },
  { id: 4, name: "Tennis", icon: TennisIcon },
  { id: 5, name: "Baseball", icon: BaseballIcon },
  { id: 6, name: "Formula 1", icon: F1Icon },
  { id: 7, name: "Bookmarks", icon: Bookmark },
  { id: 8, name: "Notifications", icon: Bell },
  { id: 9, name: "Messages", icon: Mail },
  { id: 10, name: "Profile", icon: User },
];

// Popular leagues data
const popularLeagues = [
  { id: 1, name: "Premier League", logo: "https://i.pravatar.cc/150?img=21", followers: 2450000 },
  { id: 2, name: "La Liga", logo: "https://i.pravatar.cc/150?img=22", followers: 1890000 },
  { id: 3, name: "Serie A", logo: "https://i.pravatar.cc/150?img=23", followers: 1320000 },
  { id: 4, name: "Bundesliga", logo: "https://i.pravatar.cc/150?img=24", followers: 1150000 },
  { id: 5, name: "Ligue 1", logo: "https://i.pravatar.cc/150?img=25", followers: 980000 }
];

// Popular teams data
const popularTeams = [
  { id: 1, name: "Manchester United", logo: "https://i.pravatar.cc/150?img=31", followers: 1856000 },
  { id: 2, name: "Barcelona", logo: "https://i.pravatar.cc/150?img=32", followers: 1742000 },
  { id: 3, name: "Real Madrid", logo: "https://i.pravatar.cc/150?img=33", followers: 1735000 },
  { id: 4, name: "Liverpool", logo: "https://i.pravatar.cc/150?img=34", followers: 1450000 },
  { id: 5, name: "Bayern Munich", logo: "https://i.pravatar.cc/150?img=35", followers: 1320000 }
];

const formatFollowerCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M followers`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K followers`;
  }
  return `${count} followers`;
};

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [followedLeagues, setFollowedLeagues] = useState<number[]>([]);
  const [followedTeams, setFollowedTeams] = useState<number[]>([]);
  
  // Filter discussions based on search query
  const filteredDiscussions = discussions.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleFollowLeague = (leagueId: number) => {
    setFollowedLeagues(prev => 
      prev.includes(leagueId) 
        ? prev.filter(id => id !== leagueId) 
        : [...prev, leagueId]
    );
  };

  const toggleFollowTeam = (teamId: number) => {
    setFollowedTeams(prev => 
      prev.includes(teamId) 
        ? prev.filter(id => id !== teamId) 
        : [...prev, teamId]
    );
  };

  return (
    <div className="min-h-screen bg-mechitv-bg">
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full">
          {/* Sidebar */}
          <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <SoccerIcon className="h-8 w-8 text-mechitv-accent" />
                <span className="ml-2 text-xl font-bold text-gradient">MechiTV</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {sportsCategories.map((category) => (
                  <SidebarMenuItem key={category.id}>
                    <SidebarMenuButton
                      tooltip={category.name}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-mechitv-accent/10"
                    >
                      <category.icon className="h-6 w-6 text-mechitv-accent" />
                      <span>{category.name}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4">
              <Button className="w-full bg-mechitv-accent hover:bg-mechitv-accent/90" size="lg">
                <Pencil className="mr-2 h-5 w-5" />
                <span>Post</span>
              </Button>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Community Header */}
            <header className="sticky top-0 z-10 bg-mechitv-bg-light border-b border-border p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <SidebarTrigger className="mr-4" />
                  <h1 className="text-xl font-bold">Community</h1>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search discussions..." 
                    className="pl-9 bg-mechitv-bg border-border focus-visible:ring-mechitv-accent w-64"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </header>
            
            {/* Community Content */}
            <div className="p-4">
              {/* Category Tabs */}
              <Tabs defaultValue="all" className="w-full mb-8">
                <div className="flex justify-between items-center mb-4">
                  <TabsList className="bg-mechitv-bg/50">
                    <TabsTrigger 
                      value="all"
                      className="data-[state=active]:bg-mechitv-accent data-[state=active]:text-mechitv-bg"
                    >
                      For You
                    </TabsTrigger>
                    <TabsTrigger 
                      value="trending"
                      className="data-[state=active]:bg-mechitv-accent data-[state=active]:text-mechitv-bg"
                    >
                      Trending
                    </TabsTrigger>
                    <TabsTrigger 
                      value="popular"
                      className="data-[state=active]:bg-mechitv-accent data-[state=active]:text-mechitv-bg"
                    >
                      Following
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="all" className="mt-0 animate-fade-in">
                  <Card className="bg-mechitv-bg-light border-border mb-4">
                    <CardContent className="p-4">
                      <div className="flex">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src="https://i.pravatar.cc/150?img=33" alt="Your Avatar" />
                          <AvatarFallback>YA</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <Input 
                            placeholder="What's happening in sports today?" 
                            className="bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
                          />
                          <div className="flex justify-end mt-2">
                            <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                              Post
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                
                  {filteredDiscussions.map((discussion) => (
                    <Card key={discussion.id} className="bg-mechitv-bg-light border-border mb-4">
                      <CardContent className="p-4">
                        <div className="flex">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={discussion.avatar} alt={discussion.author} />
                            <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <span className="font-semibold mr-2">{discussion.author}</span>
                              <span className="text-muted-foreground text-sm">@{discussion.author.toLowerCase()} · {discussion.date}</span>
                            </div>
                            <p className="mt-2 mb-3">{discussion.content}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {discussion.tags.map((tag, i) => (
                                <span key={i} className="bg-mechitv-bg text-xs px-2 py-1 rounded text-mechitv-accent">
                                  #{tag.replace(/\s+/g, '')}
                                </span>
                              ))}
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                              <Button variant="ghost" size="sm" className="hover:text-mechitv-accent">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                <span>{discussion.replies}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="hover:text-mechitv-accent">
                                <Star className="h-4 w-4 mr-2" />
                                <span>{Math.floor(discussion.views / 10)}</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="hover:text-mechitv-accent">
                                <Bookmark className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="hover:text-mechitv-accent">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="trending" className="mt-0 animate-fade-in">
                  <Card className="bg-mechitv-bg-light border-border">
                    <CardContent className="p-6">
                      <p className="text-center text-muted-foreground">
                        The same layout as "For You" but with trending content
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="popular" className="mt-0 animate-fade-in">
                  <Card className="bg-mechitv-bg-light border-border">
                    <CardContent className="p-6">
                      <p className="text-center text-muted-foreground">
                        Posts from accounts you follow
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Right Sidebar (Who to follow, trends) */}
          <div className="hidden lg:block w-80 p-4 border-l border-border">
            <div className="mb-6">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search MechiTV" 
                  className="pl-9 bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
                />
              </div>
              
              {/* Trending Topics */}
              <Card className="bg-mechitv-bg-light border-border mb-6">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-4">Trends for you</h3>
                  <div className="space-y-4">
                    {popularTopics.map((topic) => (
                      <div key={topic.id} className="hover:bg-mechitv-accent/10 p-2 rounded-md cursor-pointer">
                        <p className="text-xs text-muted-foreground">Trending in Sports</p>
                        <p className="font-semibold">{topic.name}</p>
                        <p className="text-xs text-muted-foreground">{topic.count} posts</p>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-mechitv-accent w-full mt-2">
                    Show more
                  </Button>
                </CardContent>
              </Card>
              
              {/* Who to follow - Users */}
              <Card className="bg-mechitv-bg-light border-border mb-6">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-4">Who to follow</h3>
                  <div className="space-y-4">
                    {activeUsers.slice(0, 3).map((user) => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-xs text-muted-foreground">@{user.name.toLowerCase()}</p>
                          </div>
                        </div>
                        <Button className="bg-white text-black hover:bg-white/90 rounded-full text-sm font-semibold">
                          Follow
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-mechitv-accent w-full mt-2">
                    Show more
                  </Button>
                </CardContent>
              </Card>
              
              {/* Popular Leagues to Follow */}
              <Card className="bg-mechitv-bg-light border-border mb-6">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-4">Popular Leagues</h3>
                  <div className="space-y-4">
                    {popularLeagues.map((league) => (
                      <div key={league.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={league.logo} alt={league.name} />
                            <AvatarFallback>{league.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{league.name}</p>
                            <p className="text-xs text-muted-foreground">{formatFollowerCount(league.followers)}</p>
                          </div>
                        </div>
                        <Button 
                          className={`rounded-full text-sm font-semibold ${
                            followedLeagues.includes(league.id)
                              ? "bg-mechitv-bg border border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent/10"
                              : "bg-white text-black hover:bg-white/90"
                          }`}
                          onClick={() => toggleFollowLeague(league.id)}
                        >
                          {followedLeagues.includes(league.id) ? "Following" : "Follow"}
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-mechitv-accent w-full mt-2">
                    Show more leagues
                  </Button>
                </CardContent>
              </Card>
              
              {/* Popular Teams to Follow */}
              <Card className="bg-mechitv-bg-light border-border">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-4">Popular Teams</h3>
                  <div className="space-y-4">
                    {popularTeams.map((team) => (
                      <div key={team.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src={team.logo} alt={team.name} />
                            <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{team.name}</p>
                            <p className="text-xs text-muted-foreground">{formatFollowerCount(team.followers)}</p>
                          </div>
                        </div>
                        <Button 
                          className={`rounded-full text-sm font-semibold ${
                            followedTeams.includes(team.id)
                              ? "bg-mechitv-bg border border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent/10"
                              : "bg-white text-black hover:bg-white/90"
                          }`}
                          onClick={() => toggleFollowTeam(team.id)}
                        >
                          {followedTeams.includes(team.id) ? "Following" : "Follow"}
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-mechitv-accent w-full mt-2">
                    Show more teams
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default CommunityPage;
