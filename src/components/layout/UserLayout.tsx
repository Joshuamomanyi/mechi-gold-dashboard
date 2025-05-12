
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  User, 
  Menu, 
  Bell, 
  Football 
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <div className="min-h-screen bg-mechitv-bg text-foreground">
      {/* Navigation header */}
      <header className="bg-mechitv-bg-light border-b border-border py-4 sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center">
                <Football className="h-6 w-6 text-mechitv-accent mr-2" />
                <span className="text-xl font-bold text-gradient">MechiTV</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/matches" className="text-sm hover:text-mechitv-accent">Live Matches</Link>
                <Link to="/leagues" className="text-sm hover:text-mechitv-accent">Leagues</Link>
                <Link to="/tournaments" className="text-sm hover:text-mechitv-accent">Tournaments</Link>
                <Link to="/teams" className="text-sm hover:text-mechitv-accent">Teams</Link>
              </nav>
            </div>
            
            <div className="hidden lg:flex items-center relative max-w-md w-full mx-4">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search teams, leagues or matches..."
                className="pl-9 bg-mechitv-bg border-mechitv-bg-light focus-visible:ring-mechitv-accent/30 focus-visible:ring-offset-0"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="sm" className="hidden md:flex">
                <User className="mr-2 h-4 w-4" /> Sign In
              </Button>
              <Button size="sm" className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 hidden md:flex">
                Subscribe
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default UserLayout;
