
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Ticket, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Search,
  Filter,
  CreditCard,
  Shield
} from "lucide-react";
import EventDetailsPage from "@/components/ticketing/EventDetailsPage";

const TicketingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMatch, setSelectedMatch] = useState<any>(null);

  const upcomingMatches = [
    {
      id: 1,
      homeTeam: "Manchester United",
      awayTeam: "Liverpool",
      date: "2024-06-15",
      time: "15:00",
      venue: "Old Trafford",
      competition: "Premier League",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=400",
      ticketPrices: [
        { category: "VIP", price: 250, available: 45 },
        { category: "Premium", price: 120, available: 156 },
        { category: "Standard", price: 65, available: 892 },
        { category: "Family", price: 45, available: 234 }
      ]
    },
    {
      id: 2,
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      date: "2024-06-18",
      time: "20:00",
      venue: "Camp Nou",
      competition: "La Liga",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400",
      ticketPrices: [
        { category: "VIP", price: 300, available: 23 },
        { category: "Premium", price: 150, available: 89 },
        { category: "Standard", price: 80, available: 456 },
        { category: "Family", price: 55, available: 167 }
      ]
    },
    {
      id: 3,
      homeTeam: "Chelsea",
      awayTeam: "Arsenal",
      date: "2024-06-20",
      time: "17:30",
      venue: "Stamford Bridge",
      competition: "Premier League",
      image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=400",
      ticketPrices: [
        { category: "VIP", price: 220, available: 67 },
        { category: "Premium", price: 110, available: 234 },
        { category: "Standard", price: 60, available: 567 },
        { category: "Family", price: 40, available: 345 }
      ]
    }
  ];

  const handleBuyTicket = (match: any) => {
    setSelectedMatch(match);
  };

  if (selectedMatch) {
    return (
      <EventDetailsPage 
        match={selectedMatch} 
        onBack={() => setSelectedMatch(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-mechitv-bg">
      {/* Hero Section */}
      <div className="bg-mechitv-bg-light py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <Ticket className="h-12 w-12 text-mechitv-accent mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">E-Ticketing</h1>
            <p className="text-muted-foreground max-w-2xl">
              Book your tickets for the biggest matches and experience live football like never before. 
              Secure, fast, and hassle-free ticket booking for all major competitions.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search teams, venues, or competitions..." 
                  className="pl-9 bg-mechitv-bg border-border focus-visible:ring-mechitv-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="border-mechitv-accent text-mechitv-accent">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Featured Matches */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Upcoming Matches</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <Card key={match.id} className="bg-mechitv-bg-light border-border overflow-hidden">
                <div className="relative">
                  <img 
                    src={match.image} 
                    alt={`${match.homeTeam} vs ${match.awayTeam}`} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-mechitv-accent text-black">
                      {match.competition}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">
                    {match.homeTeam} vs {match.awayTeam}
                  </CardTitle>
                  <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {match.date} at {match.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {match.venue}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <Separator className="mb-4" />
                  <div className="space-y-3">
                    {match.ticketPrices.map((ticket, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <div>
                          <span className="text-white font-medium">{ticket.category}</span>
                          <p className="text-xs text-muted-foreground">{ticket.available} available</p>
                        </div>
                        <div className="text-right">
                          <span className="text-mechitv-accent font-bold">${ticket.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-4 bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90"
                    onClick={() => handleBuyTicket(match)}
                  >
                    <Ticket className="mr-2 h-4 w-4" />
                    Book Tickets
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Our E-Ticketing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose MechiTV E-Ticketing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-mechitv-bg-light border-border text-center p-6">
              <Shield className="h-12 w-12 text-mechitv-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground text-sm">
                100% secure payment processing with industry-leading encryption and fraud protection.
              </p>
            </Card>
            
            <Card className="bg-mechitv-bg-light border-border text-center p-6">
              <Users className="h-12 w-12 text-mechitv-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Best Seats Guaranteed</h3>
              <p className="text-muted-foreground text-sm">
                Access to the best available seats with real-time seat selection and pricing.
              </p>
            </Card>
            
            <Card className="bg-mechitv-bg-light border-border text-center p-6">
              <CreditCard className="h-12 w-12 text-mechitv-accent mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Instant Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Digital tickets delivered instantly to your email and mobile wallet.
              </p>
            </Card>
          </div>
        </div>

        {/* Popular Venues */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Popular Venues</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Old Trafford", "Camp Nou", "Wembley Stadium", "Santiago Bernabéu"].map((venue, index) => (
              <Card key={index} className="bg-mechitv-bg-light border-border overflow-hidden group cursor-pointer">
                <div className="aspect-video relative">
                  <img 
                    src={`https://images.unsplash.com/photo-${1551698618 + index}-1dfe5d97d256?auto=format&fit=crop&q=80&w=400`} 
                    alt={venue} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold">{venue}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketingPage;
