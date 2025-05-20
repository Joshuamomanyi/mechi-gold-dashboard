
import React, { useState } from "react";
import UserLayout from "@/components/layout/UserLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Play, Search, Clock, Calendar, ChevronRight } from "lucide-react";
import { highlights } from "@/components/home/data";

// Example categories for highlights
const categories = ["All", "Football", "Basketball", "Tennis", "Rugby", "Formula 1"];

const HighlightsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter highlights based on search query
  const filteredHighlights = highlights.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <UserLayout>
      <div className="min-h-screen bg-mechitv-bg">
        {/* Hero Banner */}
        <div className="bg-mechitv-bg-light py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-8">
              <Play className="h-12 w-12 text-mechitv-accent mb-4" />
              <h1 className="text-4xl font-bold text-white mb-2">Video Highlights</h1>
              <p className="text-muted-foreground max-w-2xl">
                Watch the best moments from your favorite sports and teams. 
                Never miss a goal, touchdown, slam dunk, or race highlight.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search highlights..." 
                className="pl-9 bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Highlights Content */}
        <div className="container mx-auto px-4 py-8">
          {/* Category Tabs */}
          <Tabs defaultValue="All" className="w-full mb-8">
            <TabsList className="bg-mechitv-bg/50 mb-6 w-full flex overflow-x-auto justify-start">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-mechitv-accent data-[state=active]:text-mechitv-bg"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredHighlights
                    .filter(item => category === "All" || category === "Football") // Mocked for demo
                    .map((highlight) => (
                      <Card 
                        key={highlight.id} 
                        className="bg-mechitv-bg-light border-border hover:border-mechitv-accent/50 transition-all group"
                      >
                        <div className="aspect-video overflow-hidden relative">
                          <img 
                            src={highlight.image} 
                            alt={highlight.title} 
                            className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <Button
                            size="icon"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-mechitv-accent text-mechitv-bg rounded-full opacity-90 group-hover:opacity-100 transition-opacity"
                          >
                            <Play className="h-6 w-6" />
                            <span className="sr-only">Watch Now</span>
                          </Button>
                          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                            {highlight.duration}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-white line-clamp-1">{highlight.title}</h3>
                          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                            {highlight.description}
                          </p>
                          <div className="flex justify-between items-center mt-3 text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" /> 3 days ago
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" /> {highlight.duration}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
                
                {/* Show message if no highlights match the filter */}
                {filteredHighlights.filter(item => category === "All" || category === "Football").length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No highlights found for your search</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
          
          {/* Featured Highlight */}
          <div className="my-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Featured Highlight</h2>
            </div>
            
            <Card className="bg-mechitv-bg-light border-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 h-full relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?auto=format&fit=crop&q=80&w=1000" 
                    alt="Featured Highlight" 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <Button
                    size="icon"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-mechitv-accent text-mechitv-bg rounded-full w-16 h-16 opacity-90 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="h-8 w-8" />
                    <span className="sr-only">Watch Now</span>
                  </Button>
                  <div className="absolute top-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    10:32
                  </div>
                </div>
                <div className="lg:col-span-2 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-mechitv-accent text-black text-xs font-medium px-2 py-1 rounded">
                        Featured
                      </span>
                      <div className="flex items-center space-x-2 text-muted-foreground text-xs">
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" /> 10:32
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Super League Final: Top 10 Spectacular Goals and Game-Changing Moments
                    </h2>
                    
                    <p className="text-muted-foreground mb-4">
                      Relive the most exciting moments from this season's Super League Final. 
                      From last-minute winners to goal-line clearances, this highlight package 
                      captures all the drama and skill on display.
                    </p>
                  </div>
                  
                  <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 w-full">
                    <Play className="mr-2 h-4 w-4" /> Watch Highlight
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          
          {/* More Categories Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {["Popular Teams", "Tournament Highlights", "Classic Moments"].map((category, index) => (
              <Card key={index} className="bg-mechitv-bg-light border-border overflow-hidden group">
                <div className="aspect-video relative">
                  <img 
                    src={`https://source.unsplash.com/random/600x400?sports=${index}`} 
                    alt={category} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{category}</h3>
                    <Button variant="outline" className="text-white border-white bg-transparent hover:bg-white/20">
                      Browse <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default HighlightsPage;
