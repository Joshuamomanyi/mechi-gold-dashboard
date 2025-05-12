
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface Highlight {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
}

interface HighlightsSectionProps {
  highlights: Highlight[];
}

const HighlightsSection = ({ highlights }: HighlightsSectionProps) => {
  const [api, setApi] = useState<any>();
  
  // Autoplay functionality
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api]);
  
  return (
    <div className="bg-mechitv-bg py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Latest Highlights</h2>
          <Button variant="link" className="text-mechitv-accent">
            View All
          </Button>
        </div>
        
        <Carousel setApi={setApi} className="mx-auto">
          <CarouselContent>
            {highlights.map((highlight) => (
              <CarouselItem key={highlight.id} className="md:basis-1/2 lg:basis-1/3 p-1">
                <Card className="bg-mechitv-bg-light border-border overflow-hidden relative group">
                  <div className="aspect-video relative overflow-hidden">
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
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HighlightsSection;
