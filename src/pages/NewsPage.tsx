
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search, FileText, Calendar, Clock, MessageSquare, Bookmark } from "lucide-react";
import { sportsNews } from "@/components/home/data";

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Football", "Basketball", "Tennis", "Rugby", "Formula 1"];
  
  // Filter news based on search query
  const filteredNews = sportsNews.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-mechitv-bg">
      {/* News Hero Banner */}
      <div className="bg-mechitv-bg-light py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <FileText className="h-12 w-12 text-mechitv-accent mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">Sports News</h1>
            <p className="text-muted-foreground max-w-2xl">
              Stay updated with the latest news, transfers, match reports, and analysis from the world of sports
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search news articles..." 
              className="pl-9 bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {/* News Content */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews
                  .filter(item => category === "All" || item.category === category)
                  .map((item) => (
                    <Card 
                      key={item.id} 
                      className="bg-mechitv-bg-light border-border hover:border-mechitv-accent/50 transition-all group"
                    >
                      <div className="aspect-video overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform" 
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-mechitv-accent text-black text-xs font-medium px-2 py-1 rounded">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center space-x-2 text-muted-foreground text-xs">
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" /> {item.date}
                            </span>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                        </div>
                        <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {item.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <Button variant="link" className="text-mechitv-accent p-0 h-auto">
                            Read More
                          </Button>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MessageSquare className="h-3 w-3 mr-1" /> 24 Comments
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
              
              {/* Show message if no news matches the filter */}
              {filteredNews.filter(item => category === "All" || item.category === category).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No news articles found for your search</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Featured Article Section */}
        <div className="my-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Featured Story</h2>
          </div>
          
          <Card className="bg-mechitv-bg-light border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Featured Story" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-mechitv-accent text-black text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </span>
                    <div className="flex items-center space-x-2 text-muted-foreground text-xs">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> 5 min read
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">The Evolution of Modern Football Tactics: From Total Football to Gegenpress</h2>
                  
                  <p className="text-muted-foreground mb-4">
                    An in-depth analysis of how football tactics have evolved over the decades, influencing the modern game we see today and shaping the strategies of top teams across Europe.
                  </p>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-mechitv-bg-light">
                      <img 
                        src="https://i.pravatar.cc/40?img=11" 
                        alt="Author" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">James Rodriguez</p>
                      <p className="text-xs text-muted-foreground">Sports Analyst</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <Button variant="link" className="text-mechitv-accent p-0 h-auto">
                    Read Full Article
                  </Button>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-mechitv-bg-light rounded-lg p-8 my-12 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
            Get the latest sports news and updates delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
            />
            <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
