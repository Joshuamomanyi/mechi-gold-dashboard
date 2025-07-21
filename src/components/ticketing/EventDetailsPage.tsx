import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowLeft,
  Heart,
  Share2
} from "lucide-react";
import { CheckoutDialog } from "./CheckoutDialog";

interface EventDetailsPageProps {
  match: {
    id: number;
    homeTeam: string;
    awayTeam: string;
    date: string;
    time: string;
    venue: string;
    competition: string;
    image: string;
    ticketPrices: Array<{
      category: string;
      price: number;
      available: number;
    }>;
  };
  onBack: () => void;
}

const EventDetailsPage = ({ match, onBack }: EventDetailsPageProps) => {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="min-h-screen bg-mechitv-bg">
      {/* Header */}
      <div className="bg-mechitv-bg-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Details */}
          <div className="space-y-6">
            <Card className="bg-mechitv-bg-light border-border">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-mechitv-accent text-black">
                    {match.competition}
                  </Badge>
                  <span className="text-mechitv-accent font-bold text-lg">
                    SAT 26TH JULY
                  </span>
                </div>
                <CardTitle className="text-white text-2xl">
                  {match.homeTeam} vs {match.awayTeam}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-white font-semibold">ACTIVITIES</h3>
                  <p className="text-muted-foreground text-sm">
                    FOOTBALL MATCH | LIVE COVERAGE | PREMIUM EXPERIENCE
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-white font-semibold">Date And Time</h3>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {match.date} at {match.time}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-white font-semibold">Location</h3>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {match.venue}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-white font-semibold">Share with Friend</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="bg-blue-600 hover:bg-blue-700">
                      <span className="text-white">f</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-blue-400 hover:bg-blue-500">
                      <span className="text-white">t</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-pink-600 hover:bg-pink-700">
                      <span className="text-white">i</span>
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-green-600 hover:bg-green-700">
                      <span className="text-white">w</span>
                    </Button>
                  </div>
                </div>

                <Button 
                  className="w-full bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 mt-6"
                  onClick={() => setShowCheckout(true)}
                >
                  BOOK TICKETS
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="bg-mechitv-bg-light border-border">
              <CardHeader>
                <CardTitle className="text-white">Venue Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-green-800 rounded-lg relative overflow-hidden">
                  {/* Google Maps placeholder - would be replaced with actual Google Maps */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-900">
                    <div className="grid grid-cols-6 grid-rows-4 h-full opacity-20">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="border border-green-400/30"></div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-500 w-6 h-6 rounded-full border-2 border-white shadow-lg"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded p-2">
                      <p className="text-sm font-medium text-gray-900">{match.venue}</p>
                      <p className="text-xs text-gray-600">Football Stadium</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-muted-foreground text-sm">
                    This page can't load Google Maps correctly.
                  </p>
                  <Button variant="outline" className="mt-2 text-xs">
                    OK
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <CheckoutDialog 
        open={showCheckout} 
        onOpenChange={setShowCheckout}
        match={match}
      />
    </div>
  );
};

export default EventDetailsPage;