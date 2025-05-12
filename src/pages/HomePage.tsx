
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  GamepadIcon, 
  ListVideo, 
  Search, 
  Play,
  TrendingUp,
  Users,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const featuredGames = [
  {
    id: 1,
    title: "PUBG Tournament Finals",
    viewers: "12.5K",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nfGVufDB8fDB8fHww",
    category: "Battle Royale",
    streamer: "NairobiGamer",
    isLive: true
  },
  {
    id: 2,
    title: "FIFA 24 East African Cup",
    viewers: "8.2K",
    thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jY2VyJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Sports",
    streamer: "KenyaFootball",
    isLive: true
  },
  {
    id: 3,
    title: "Call of Duty: Mobile Championships",
    viewers: "5.7K",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nfGVufDB8fDB8fHww",
    category: "FPS",
    streamer: "GamersEA",
    isLive: true
  },
  {
    id: 4,
    title: "Minecraft Building Challenge",
    viewers: "3.9K",
    thumbnail: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nfGVufDB8fDB8fHww",
    category: "Sandbox",
    streamer: "CreativeBuilders",
    isLive: false
  }
];

const popularCategories = [
  { id: 1, name: "Battle Royale", viewers: "45.2K", image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmF0dGxlJTIwcm95YWxlfGVufDB8fDB8fHww" },
  { id: 2, name: "Sports", viewers: "32.7K", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, name: "FPS", viewers: "28.3K", image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnBzJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 4, name: "Mobile Gaming", viewers: "22.9K", image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vYmlsZSUyMGdhbWluZ3xlbnwwfHwwfHx8MA%3D%3D" }
];

const topStreamers = [
  { id: 1, name: "NairobiGamer", followers: "482K", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: 2, name: "KampalaStreamer", followers: "356K", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: 3, name: "DarGaming", followers: "287K", avatar: "https://i.pravatar.cc/100?img=3" },
  { id: 4, name: "RwandaPlayer", followers: "245K", avatar: "https://i.pravatar.cc/100?img=4" },
  { id: 5, name: "MombasaGamer", followers: "189K", avatar: "https://i.pravatar.cc/100?img=5" }
];

const upcoming = [
  { id: 1, title: "East African Esports Summit", date: "Jun 15", image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXNwb3J0c3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, title: "Mobile Gaming Championships", date: "Jun 22", image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwZ2FtaW5nfGVufDB8fDB8fHww" }
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
              East Africa's #1 Gaming Stream Platform
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Watch live streams, tournaments, and gaming events from across East Africa. Join the community today!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 text-lg px-8 py-6">
                <Play className="mr-2" /> Start Watching
              </Button>
              <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Sign Up Free
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Live Streams */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <ListVideo className="mr-2 text-mechitv-accent" /> Featured Live Streams
          </h2>
          <Button variant="link" className="text-mechitv-accent">
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map(game => (
            <div key={game.id} className="bg-mechitv-bg-light rounded-lg overflow-hidden border border-border hover:border-mechitv-accent/50 transition-all group">
              <div className="relative">
                <img 
                  src={game.thumbnail} 
                  alt={game.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                {game.isLive && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">
                    LIVE
                  </Badge>
                )}
                <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm">
                  {game.viewers} viewers
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                    <Play className="mr-2" /> Watch Now
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg truncate">{game.title}</h3>
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                  <span>{game.streamer}</span>
                  <Badge variant="outline" className="bg-mechitv-accent/10 text-mechitv-accent border-none">
                    {game.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <GamepadIcon className="mr-2 text-mechitv-accent" /> Popular Categories
          </h2>
          <Button variant="link" className="text-mechitv-accent">
            Browse Categories <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCategories.map(category => (
            <div key={category.id} className="bg-mechitv-bg-light rounded-lg overflow-hidden border border-border hover:border-mechitv-accent/50 transition-all group">
              <div className="relative">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{category.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {category.viewers} viewers
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Top Streamers and Upcoming Events */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Streamers */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Users className="mr-2 text-mechitv-accent" /> Top Streamers
              </h2>
              <Button variant="link" className="text-mechitv-accent">
                See All <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
              {topStreamers.map((streamer, index) => (
                <div 
                  key={streamer.id} 
                  className={`flex items-center justify-between py-3 ${
                    index !== topStreamers.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <img 
                        src={streamer.avatar} 
                        alt={streamer.name} 
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <span className="absolute bottom-0 right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-mechitv-bg-light"></span>
                    </div>
                    <div>
                      <h3 className="font-medium">{streamer.name}</h3>
                      <p className="text-xs text-muted-foreground">{streamer.followers} followers</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-mechitv-accent text-mechitv-accent hover:bg-mechitv-accent hover:text-mechitv-bg">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <TrendingUp className="mr-2 text-mechitv-accent" /> Upcoming
              </h2>
              <Button variant="link" className="text-mechitv-accent">
                Calendar <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-mechitv-bg-light rounded-lg border border-border overflow-hidden">
              {upcoming.map((event, index) => (
                <div 
                  key={event.id} 
                  className={`flex ${
                    index !== upcoming.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="w-1/3">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 w-2/3">
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-mechitv-accent mt-1">{event.date}</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full text-center">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-mechitv-accent/30 to-mechitv-bg-light rounded-lg p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience East African Gaming?</h2>
            <p className="text-muted-foreground mb-6">
              Join thousands of viewers and streamers across East Africa. Create your account now to start watching or streaming.
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
                East Africa's premier gaming streaming platform, bringing competitive gaming content to viewers across the region.
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
                <li><a href="#" className="hover:text-mechitv-accent">Discord</a></li>
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
