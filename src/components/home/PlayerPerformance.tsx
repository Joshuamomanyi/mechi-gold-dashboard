
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Chart, ChartLine, ChartBar, CircleDot } from "lucide-react";

// Sample player performance data
const topPlayers = [
  {
    id: 1,
    name: "Mohammed Bajaber",
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    club: "Kenya Police",
    position: "Forward",
    goals: 12,
    assists: 5,
    passAccuracy: 78,
    rating: 8.4,
  },
  {
    id: 2,
    name: "Otieno Makokha",
    photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    club: "Tusker FC",
    position: "Midfielder",
    goals: 8,
    assists: 11,
    passAccuracy: 85,
    rating: 8.7,
  },
  {
    id: 3,
    name: "Daniel Ochieng",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    club: "Gor Mahia",
    position: "Defender",
    goals: 2,
    assists: 3,
    passAccuracy: 92,
    rating: 8.1,
  },
  {
    id: 4,
    name: "Josiah Minga",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    club: "AFC Leopards",
    position: "Goalkeeper",
    cleanSheets: 7,
    saves: 54,
    passAccuracy: 65,
    rating: 7.9,
  }
];

const PlayerPerformance = () => {
  return (
    <div className="bg-mechitv-bg py-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center">
            <ChartLine className="mr-2 text-mechitv-accent" size={20} />
            Top Player Performances
          </h2>
          <Badge className="bg-mechitv-accent text-mechitv-bg">Season 2023-24</Badge>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {topPlayers.map((player) => (
              <CarouselItem key={player.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden bg-mechitv-bg-light border border-border hover:border-mechitv-accent/30 transition-all">
                  <div className="relative">
                    <AspectRatio ratio={3/4} className="bg-muted">
                      <Avatar className="h-full w-full rounded-none">
                        <AvatarImage src={player.photo} alt={player.name} className="object-cover" />
                        <AvatarFallback className="rounded-none bg-mechitv-accent/20 text-mechitv-accent text-2xl">
                          {player.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </AspectRatio>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-mechitv-bg-light to-transparent p-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8 border-2 border-mechitv-accent">
                          <AvatarFallback className="text-xs">{player.club.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-white">{player.name}</h3>
                          <p className="text-xs text-muted-foreground">{player.position} • {player.club}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <CircleDot size={10} className="text-mechitv-accent" /> Rating
                      </span>
                      <span className="text-lg font-bold text-mechitv-accent">{player.rating}</span>
                    </div>
                    
                    {player.position !== "Goalkeeper" ? (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Goals</p>
                            <p className="text-lg font-bold">{player.goals}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Assists</p>
                            <p className="text-lg font-bold">{player.assists}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Pass Accuracy</span>
                            <span className="text-xs">{player.passAccuracy}%</span>
                          </div>
                          <Slider
                            defaultValue={[player.passAccuracy]}
                            max={100}
                            step={1}
                            disabled
                            className="h-1.5"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Clean Sheets</p>
                            <p className="text-lg font-bold">{player.cleanSheets}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Saves</p>
                            <p className="text-lg font-bold">{player.saves}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Distribution</span>
                            <span className="text-xs">{player.passAccuracy}%</span>
                          </div>
                          <Slider
                            defaultValue={[player.passAccuracy]}
                            max={100}
                            step={1}
                            disabled
                            className="h-1.5"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative inset-auto left-0 translate-y-0 mx-1" />
            <CarouselNext className="relative inset-auto right-0 translate-y-0 mx-1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PlayerPerformance;
