
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

interface NewsSectionProps {
  news: NewsItem[];
}

const NewsSection = ({ news }: NewsSectionProps) => {
  const categories = ["All", "Football", "Basketball", "Tennis", "Rugby", "Formula 1"];
  
  return (
    <div className="bg-mechitv-bg-light py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Sports News</h2>
          <Button variant="link" className="text-mechitv-accent">
            <Link to="/news">Read More</Link>
          </Button>
        </div>
        
        <Tabs defaultValue="All" className="w-full">
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
            <TabsContent key={category} value={category} className="mt-0">
              <Carousel className="mx-auto">
                <CarouselContent>
                  {news
                    .filter(item => category === "All" || item.category === category)
                    .map((item) => (
                      <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 p-1">
                        <Card className="bg-mechitv-bg border-border hover:border-mechitv-accent/50 transition-all">
                          <Link to={`/post/${item.id}`}>
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
                              <div className="flex justify-end items-center mb-2">
                                <span className="text-muted-foreground text-xs">{item.date}</span>
                              </div>
                              <h3 className="font-semibold text-white mb-2 line-clamp-2">{item.title}</h3>
                              <p className="text-muted-foreground text-sm line-clamp-2">
                                {item.excerpt}
                              </p>
                            </CardContent>
                          </Link>
                        </Card>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </div>
              </Carousel>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default NewsSection;
