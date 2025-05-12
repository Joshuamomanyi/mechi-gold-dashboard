
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Football, 
  Calendar, 
  Search, 
  Play,
  TrendingUp,
  Users,
  ArrowRight,
  Flag
} from "lucide-react";
import { Link } from "react-router-dom";

// Featured matches - similar to the reference image
const featuredMatches = [
  {
    id: 1,
    date: "24/06/2025",
    homeTeam: {
      name: "Kariobangi Sharks",
      logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmslMjBsb2dvfGVufDB8fDB8fHww",
      score: 0
    },
    awayTeam: {
      name: "Kariobangi Sharks",
      logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmslMjBsb2dvfGVufDB8fDB8fHww",
      score: 0
    },
    league: "KPL",
    status: "LIVE"
  },
  {
    id: 2,
    date: "21/03/2025",
    homeTeam: {
      name: "Leopards",
      logo: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVvcGFyZHxlbnwwfHwwfHx8MA%3D%3D",
      score: 3
    },
    awayTeam: {
      name: "Shabana FC",
      logo: "https://images.unsplash.com/photo-1568194157720-8bbe7114ebe8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmMlMjBsb2dvfGVufDB8fDB8fHww",
      score: 0
    },
    league: "KPL",
    status: "LIVE"
  },
  {
    id: 3,
    date: "21/03/2025",
    homeTeam: {
      name: "Moldova",
      logo: "https://images.unsplash.com/photo-1621690333089-a62b43dfe138?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsYWclMjBtb2xkb3ZhfGVufDB8fDB8fHww",
      score: null
    },
    awayTeam: {
      name: "Norway",
      logo: "https://images.unsplash.com/photo-1487552292919-eccbbd948cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5vcndheSUyMGZsYWd8ZW58MHx8MHx8fDA%3D",
      score: null
    },
    league: "FIFA World Cup Qualifiers",
    status: "COUNTDOWN"
  }
];

// Popular leagues
const popularLeagues = [
  { id: 1, name: "Kenya Premier League", viewers: "45.2K", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb3RiYWxsJTIwc3RhZGl1bXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, name: "Tanzania Premier League", viewers: "32.7K", image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyfGVufDB8fDB8fHww" },
  { id: 3, name: "Uganda Premier League", viewers: "28.3K", image: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb3RiYWxsfGVufDB8fDB8fHww" },
  { id: 4, name: "Rwanda Premier League", viewers: "22.9K", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMGZvb3RiYWxsfGVufDB8fDB8fHww" }
];

// Popular teams
const popularTeams = [
  { id: 1, name: "Gor Mahia FC", followers: "482K", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: 2, name: "AFC Leopards", followers: "356K", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: 3, name: "Simba SC", followers: "287K", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: 4, name: "Young Africans SC", followers: "245K", avatar: "https://i.pravatar.cc/100?img=4" },
  { id: 5, name: "KCCA FC", followers: "189K", avatar: "https://i.pravatar.cc/100?img=5" }
];

// Upcoming matches
const upcomingMatches = [
  { 
    id: 1, 
    title: "Kenya vs Uganda", 
    date: "Jun 15", 
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29jY2VyfGVufDB8fDB8fHww",
    competition: "AFCON Qualifiers"
  },
  { 
    id: 2, 
    title: "Tanzania vs Rwanda", 
    date: "Jun 22", 
    image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGwlMjBtYXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    competition: "World Cup Qualifiers"
  }
];

// Country flags for navigation
const countries = [
  { id: 1, name: "Algeria", flag: "https://images.unsplash.com/photo-1609939332844-40b13f1e84a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWxnZXJpYSUyMGZsYWd8ZW58MHx8MHx8fDA%3D" },
  { id: 2, name: "England", flag: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGFuZCUyMGZsYWd8ZW58MHx8MHx8fDA%3D" },
  { id: 3, name: "Kenya", flag: "https://images.unsplash.com/photo-1572260984525-4cb25221c655?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VueWElMjBmbGFnfGVufDB8fDB8fHww" },
  { id: 4, name: "Rwanda", flag: "https://images.unsplash.com/photo-1618951436968-c4e4a59b5237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cndhbmRhJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 5, name: "Tanzania", flag: "https://images.unsplash.com/photo-1612875189423-3fb9867b03ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFuemFuaWElMjBmbGFnfGVufDB8fDB8fHww" },
  { id: 6, name: "Uganda", flag: "https://images.unsplash.com/photo-1618951292647-38185aa8dc55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWdhbmRhJTIwZmxhZ3xlbnwwfHwwfHx8MA%3D%3D" }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-mechitv-bg">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-mechitv-accent/70 to-mechitv-bg h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-mechitv-bg-light/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              East Africa's Premier Sports Streaming Platform
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Watch live football matches, tournaments, and sporting events from across East Africa. Support your team for an affordable price!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 text-lg px-8 py-6">
                <Play className="mr-2" /> Watch Live
              </Button>
              <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Country Navigation - inspired by reference image */}
      <div className="bg-mechitv-bg-light py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 md:space-x-8 overflow-x-auto pb-2">
            {countries.map((country) => (
              <div key={country.id} className="flex flex-col items-center cursor-pointer group">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-transparent group-hover:border-mechitv-accent transition-all">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs mt-1 text-white/80 group-hover:text-mechitv-accent">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Live Matches - similar to reference image */}
      <div className="bg-mechitv-bg border-b border-border py-6">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white">KPL</h2>
          </div>
          
          <div className="space-y-4">
            {featuredMatches.map((match) => (
              <div key={match.id} className="bg-mechitv-bg-light rounded-lg overflow-hidden border border-border hover:border-mechitv-accent/50 transition-all group">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm text-muted-foreground">{match.date}</div>
                    {match.status === "LIVE" ? (
                      <Badge className="bg-green-500 text-white">LIVE</Badge>
                    ) : match.status === "COUNTDOWN" ? (
                      <Badge className="bg-yellow-500 text-mechitv-bg">COUNTDOWN</Badge>
                    ) : null}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center w-5/12">
                      <div className="w-12 h-12 mb-2">
                        <img 
                          src={match.homeTeam.logo} 
                          alt={match.homeTeam.name}
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium truncate">{match.homeTeam.name}</p>
                      </div>
                    </div>
                    
                    {match.homeTeam.score !== null ? (
                      <div className="flex items-center text-2xl font-bold">
                        <span>{match.homeTeam.score}</span>
                        <span className="mx-2">—</span>
                        <span>{match.awayTeam.score}</span>
                      </div>
                    ) : (
                      <div className="text-lg font-medium">vs</div>
                    )}
                    
                    <div className="flex flex-col items-center w-5/12">
                      <div className="w-12 h-12 mb-2">
                        <img 
                          src={match.awayTeam.logo} 
                          alt={match.awayTeam.name}
                          className="w-full h-full object-cover rounded-full" 
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium truncate">{match.awayTeam.name}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" size="sm" className={match.status === "LIVE" ? "bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90" : "border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg"}>
                      {match.status === "LIVE" ? "Watch Now" : "Set Reminder"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Content Banner */}
      <div className="bg-mechitv-bg py-12">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540339832862-474599807836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb3RiYWxsJTIwY3Jvd2R8ZW58MHx8MHx8fDA%3D" 
              alt="Featured Match" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mechitv-bg via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <Badge className="bg-mechitv-accent text-mechitv-bg mb-3">FEATURED</Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">AFC Leopards vs Gor Mahia: Nairobi Derby</h3>
              <p className="text-white/80 mb-4">The biggest rivalry in Kenyan football returns this weekend!</p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                  <Play className="mr-2 h-4 w-4" /> Watch Promo
                </Button>
                <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <Calendar className="mr-2 h-4 w-4" /> Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leagues Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Trophy className="mr-2 text-mechitv-accent" /> Popular Leagues
          </h2>
          <Button variant="link" className="text-mechitv-accent">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularLeagues.map(league => (
            <div key={league.id} className="bg-mechitv-bg-light rounded-lg overflow-hidden border border-border hover:border-mechitv-accent/50 transition-all group">
              <div className="relative">
                <img 
                  src={league.image} 
                  alt={league.name} 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-medium text-lg text-white">{league.name}</h3>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  <Football className="inline-block mr-1 h-4 w-4 text-mechitv-accent" /> {league.viewers} viewers
                </p>
                <Button variant="ghost" size="sm" className="text-mechitv-accent hover:text-mechitv-accent/90">
                  Follow
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Top Teams and Upcoming Matches */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Popular Teams */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Users className="mr-2 text-mechitv-accent" /> Popular Teams
              </h2>
              <Button variant="link" className="text-mechitv-accent">
                See All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
              {popularTeams.map((team, index) => (
                <div 
                  key={team.id} 
                  className={`flex items-center justify-between py-3 ${
                    index !== popularTeams.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <img 
                        src={team.avatar} 
                        alt={team.name} 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{team.name}</h3>
                      <p className="text-xs text-muted-foreground">{team.followers} followers</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Matches */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Calendar className="mr-2 text-mechitv-accent" /> Upcoming
              </h2>
              <Button variant="link" className="text-mechitv-accent">
                Calendar <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-mechitv-bg-light rounded-lg border border-border overflow-hidden">
              {upcomingMatches.map((match, index) => (
                <div 
                  key={match.id} 
                  className={`flex ${
                    index !== upcomingMatches.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="w-1/3">
                    <img 
                      src={match.image} 
                      alt={match.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 w-2/3">
                    <Badge variant="outline" className="mb-2 text-xs border-mechitv-accent/50 text-mechitv-accent">
                      {match.competition}
                    </Badge>
                    <h3 className="font-medium">{match.title}</h3>
                    <p className="text-sm text-mechitv-accent mt-1">{match.date}</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full text-center">
                      Set Reminder
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container mx-auto px-4 py-12 bg-mechitv-bg-light rounded-lg my-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Affordable Pricing Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works for you. Watch your favorite teams without breaking the bank.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pay Per Match */}
          <div className="bg-mechitv-bg rounded-lg p-6 border border-border hover:border-mechitv-accent/50 transition-all">
            <h3 className="text-xl font-bold mb-2">Pay Per Match</h3>
            <div className="text-3xl font-bold mb-4">KSh 99<span className="text-lg text-muted-foreground font-normal">/match</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>HD quality streaming</span>
              </li>
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Full match replay for 24 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Watch on any device</span>
              </li>
            </ul>
            <Button className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg" variant="outline">
              Select
            </Button>
          </div>
          
          {/* Monthly Plan */}
          <div className="bg-gradient-to-b from-mechitv-accent/20 to-mechitv-bg rounded-lg p-6 border border-mechitv-accent relative transform scale-105 shadow-xl">
            <Badge className="absolute top-0 right-0 translate-x-2 -translate-y-2 bg-mechitv-accent text-mechitv-bg">POPULAR</Badge>
            <h3 className="text-xl font-bold mb-2">Monthly Pass</h3>
            <div className="text-3xl font-bold mb-4">KSh 999<span className="text-lg text-muted-foreground font-normal">/month</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Unlimited access to all matches</span>
              </li>
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Full match replays</span>
              </li>
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Exclusive interviews & highlights</span>
              </li>
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Watch on 2 devices simultaneously</span>
              </li>
            </ul>
            <Button className="w-full bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
              Subscribe Now
            </Button>
          </div>
          
          {/* Season Pass */}
          <div className="bg-mechitv-bg rounded-lg p-6 border border-border hover:border-mechitv-accent/50 transition-all">
            <h3 className="text-xl font-bold mb-2">Season Pass</h3>
            <div className="text-3xl font-bold mb-4">KSh 4999<span className="text-lg text-muted-foreground font-normal">/season</span></div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Best value for die-hard fans</span>
              </li>
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>All Monthly Pass features</span>
              </li>
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Exclusive team merchandise discount</span>
              </li>
              <li className="flex items-start">
                <span className="text-mechitv-accent mr-2">✓</span>
                <span>Watch on 3 devices simultaneously</span>
              </li>
            </ul>
            <Button className="w-full border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg" variant="outline">
              Select
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-mechitv-accent/30 to-mechitv-bg-light rounded-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience East African Football?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of passionate football fans across East Africa. Create your account now to start watching.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 text-lg px-8">
                Sign Up
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-mechitv-bg-light border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">MechiTV</h3>
              <p className="text-sm text-muted-foreground">
                East Africa's premier sports streaming platform, bringing competitive football content to viewers across the region.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-mechitv-accent">About Us</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">Careers</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">Press</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-mechitv-accent">Help Center</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">Community Guidelines</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-mechitv-accent">Twitter</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">Instagram</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">Facebook</a></li>
                <li><a href="#" className="hover:text-mechitv-accent">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MechiTV. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Link to="/admin">Admin Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
