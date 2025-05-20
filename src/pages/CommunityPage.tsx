
import React, { useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Search, Users, Star, List, ChevronUp, Calendar, TagIcon } from "lucide-react";

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

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter discussions based on search query
  const filteredDiscussions = discussions.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <UserLayout>
      <div className="min-h-screen bg-mechitv-bg">
        {/* Community Hero Banner */}
        <div className="bg-mechitv-bg-light py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-8">
              <MessageSquare className="h-12 w-12 text-mechitv-accent mb-4" />
              <h1 className="text-4xl font-bold text-white mb-2">Community Forum</h1>
              <p className="text-muted-foreground max-w-2xl">
                Join the conversation with fellow sports fans. Discuss matches, players, tactics, 
                and everything sports-related in our friendly community.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search discussions..." 
                className="pl-9 bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Community Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content - Discussions */}
            <div className="lg:col-span-3">
              {/* Category Tabs */}
              <Tabs defaultValue="all" className="w-full mb-8">
                <div className="flex justify-between items-center mb-4">
                  <TabsList className="bg-mechitv-bg/50">
                    <TabsTrigger 
                      value="all"
                      className="data-[state=active]:bg-mechitv-accent data-[state=active]:text-mechitv-bg"
                    >
                      All Discussions
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
                      Popular
                    </TabsTrigger>
                    <TabsTrigger 
                      value="unanswered"
                      className="data-[state=active]:bg-mechitv-accent data-[state=active]:text-mechitv-bg"
                    >
                      Unanswered
                    </TabsTrigger>
                  </TabsList>
                  
                  <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                    <MessageSquare className="mr-2 h-4 w-4" /> New Discussion
                  </Button>
                </div>
                
                <TabsContent value="all" className="mt-0 animate-fade-in">
                  <Card className="bg-mechitv-bg-light border-border">
                    <CardContent className="p-0">
                      {filteredDiscussions.length > 0 ? (
                        filteredDiscussions.map((discussion, index) => (
                          <React.Fragment key={discussion.id}>
                            <div className="p-4 hover:bg-mechitv-bg/20 transition-colors cursor-pointer">
                              <div className="flex items-start">
                                <div className="hidden sm:block mr-4">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src={discussion.avatar} alt={discussion.author} />
                                    <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                </div>
                                <div className="flex-1">
                                  <h3 className="font-semibold text-white hover:text-mechitv-accent transition-colors">
                                    {discussion.title}
                                  </h3>
                                  <div className="flex flex-wrap items-center text-xs text-muted-foreground mt-1 gap-2">
                                    <span>{discussion.author}</span>
                                    <span>•</span>
                                    <span>{discussion.date}</span>
                                  </div>
                                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                                    {discussion.content}
                                  </p>
                                  <div className="flex flex-wrap gap-2 mt-3">
                                    {discussion.tags.map((tag, i) => (
                                      <span key={i} className="bg-mechitv-bg text-xs px-2 py-1 rounded">
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div className="hidden md:flex flex-col items-end ml-4 min-w-[100px] text-right">
                                  <div className="flex items-center text-mechitv-accent">
                                    <MessageSquare className="h-4 w-4 mr-1" />
                                    <span className="text-sm">{discussion.replies}</span>
                                  </div>
                                  <span className="text-xs text-muted-foreground mt-1">
                                    {discussion.views} views
                                  </span>
                                </div>
                              </div>
                            </div>
                            {index < filteredDiscussions.length - 1 && (
                              <Separator className="bg-border" />
                            )}
                          </React.Fragment>
                        ))
                      ) : (
                        <div className="text-center py-12">
                          <p className="text-muted-foreground">No discussions found</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="trending" className="mt-0 animate-fade-in">
                  <Card className="bg-mechitv-bg-light border-border">
                    <CardContent className="p-6">
                      <p className="text-center text-muted-foreground">
                        The same layout as "All Discussions" but with trending content
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="popular" className="mt-0 animate-fade-in">
                  <Card className="bg-mechitv-bg-light border-border">
                    <CardContent className="p-6">
                      <p className="text-center text-muted-foreground">
                        The same layout as "All Discussions" but with popular content
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="unanswered" className="mt-0 animate-fade-in">
                  <Card className="bg-mechitv-bg-light border-border">
                    <CardContent className="p-6">
                      <p className="text-center text-muted-foreground">
                        The same layout as "All Discussions" but with unanswered content
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              {/* Featured Discussion */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">Featured Discussion</h2>
                <Card className="bg-mechitv-bg-light border-border border-l-4 border-l-mechitv-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage src="https://i.pravatar.cc/150?img=20" alt="Featured User" />
                        <AvatarFallback>FU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-lg text-white">The impact of new transfer regulations on smaller clubs</h3>
                          <span className="bg-mechitv-accent/20 text-mechitv-accent text-xs px-2 py-1 rounded">Featured</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <span className="font-medium">SportsEconomist</span>
                          <span className="mx-2">•</span>
                          <span>5 hours ago</span>
                          <span className="mx-2">•</span>
                          <span className="flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" /> 78 replies
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-3">
                          The recent changes to transfer regulations are set to have significant effects on smaller 
                          clubs. Will these changes level the playing field or make the gap between rich and poor clubs even wider?
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="bg-mechitv-bg text-xs px-2 py-1 rounded">Transfers</span>
                          <span className="bg-mechitv-bg text-xs px-2 py-1 rounded">Economics</span>
                          <span className="bg-mechitv-bg text-xs px-2 py-1 rounded">Regulations</span>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" className="text-mechitv-accent border-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                            Join Discussion
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Community Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-mechitv-bg-light border-border">
                  <CardContent className="p-4 text-center">
                    <Users className="h-8 w-8 text-mechitv-accent mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">10,482</h3>
                    <p className="text-muted-foreground text-sm">Active Members</p>
                  </CardContent>
                </Card>
                <Card className="bg-mechitv-bg-light border-border">
                  <CardContent className="p-4 text-center">
                    <MessageSquare className="h-8 w-8 text-mechitv-accent mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">24,159</h3>
                    <p className="text-muted-foreground text-sm">Discussions</p>
                  </CardContent>
                </Card>
                <Card className="bg-mechitv-bg-light border-border">
                  <CardContent className="p-4 text-center">
                    <Calendar className="h-8 w-8 text-mechitv-accent mx-auto mb-2" />
                    <h3 className="text-xl font-bold text-white">312</h3>
                    <p className="text-muted-foreground text-sm">New Posts Today</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Category Filter */}
              <Card className="bg-mechitv-bg-light border-border">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-3">Categories</h3>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <List className="h-4 w-4 mr-2" /> All Categories
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <TagIcon className="h-4 w-4 mr-2" /> Football
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <TagIcon className="h-4 w-4 mr-2" /> Basketball
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <TagIcon className="h-4 w-4 mr-2" /> Tennis
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <TagIcon className="h-4 w-4 mr-2" /> Rugby
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <TagIcon className="h-4 w-4 mr-2" /> Formula 1
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              {/* Popular Topics */}
              <Card className="bg-mechitv-bg-light border-border">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-3">Popular Topics</h3>
                  <div className="space-y-2">
                    {popularTopics.map((topic) => (
                      <div key={topic.id} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground hover:text-mechitv-accent transition-colors cursor-pointer">
                          {topic.name}
                        </span>
                        <span className="bg-mechitv-bg text-xs px-2 py-1 rounded">
                          {topic.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Top Members */}
              <Card className="bg-mechitv-bg-light border-border">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-3">Top Contributors</h3>
                  <div className="space-y-4">
                    {activeUsers.map((user) => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{user.name}</span>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{user.posts} posts</span>
                          <Star className="h-3 w-3 ml-1 text-mechitv-accent" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Trending Tags */}
              <Card className="bg-mechitv-bg-light border-border">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-3">Trending Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="rounded-full text-xs flex items-center">
                      #TransferWindow <ChevronUp className="ml-1 h-3 w-3 text-mechitv-accent" />
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs flex items-center">
                      #ChampionsLeague <ChevronUp className="ml-1 h-3 w-3 text-mechitv-accent" />
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      #PreSeason
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs flex items-center">
                      #MVP <ChevronUp className="ml-1 h-3 w-3 text-mechitv-accent" />
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      #Injuries
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      #CoachingChanges
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full text-xs">
                      #LeagueRankings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default CommunityPage;
