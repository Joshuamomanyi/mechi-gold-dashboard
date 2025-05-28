
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  User, 
  Menu, 
  Bell,
  Flag,
  Play,
  MessageSquare,
  X,
  Ticket,
  ShoppingBag
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Create a custom SoccerIcon component as replacement for Football
const SoccerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm6 5.8-2.8 4.8-1.4-1.4-4.8 2.8-1 4-4-1 2.8-4.8-1.4-1.4 4.8-2.8 1-4 4 1z"></path>
  </svg>
);

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
                <SoccerIcon className="h-6 w-6 text-mechitv-accent mr-2" />
                <span className="text-xl font-bold text-gradient">MechiTV</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/" className="text-sm hover:text-mechitv-accent">Home</Link>
                <Link to="/highlights" className="text-sm hover:text-mechitv-accent">
                  <span className="flex items-center">
                    <Play className="h-4 w-4 mr-1" />
                    Highlights
                  </span>
                </Link>
                <Link to="/news" className="text-sm hover:text-mechitv-accent">News</Link>
                <Link to="/ticketing" className="text-sm hover:text-mechitv-accent">
                  <span className="flex items-center">
                    <Ticket className="h-4 w-4 mr-1" />
                    Tickets
                  </span>
                </Link>
                <Link to="/store" className="text-sm hover:text-mechitv-accent">
                  <span className="flex items-center">
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Store
                  </span>
                </Link>
                <Link to="/community" className="text-sm hover:text-mechitv-accent">
                  <span className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Community
                  </span>
                </Link>
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
              <Button variant="outline" size="sm" className="hidden md:flex">
                <User className="mr-2 h-4 w-4" /> Login
              </Button>
              <Button size="sm" className="bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 hidden md:flex">
                Sign Up
              </Button>
              
              {/* Mobile Menu Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[75vw] sm:w-[350px] bg-mechitv-bg-light p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-border">
                      <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center">
                          <SoccerIcon className="h-5 w-5 text-mechitv-accent mr-2" />
                          <span className="text-lg font-bold text-gradient">MechiTV</span>
                        </Link>
                      </div>
                    </div>
                    
                    <nav className="flex flex-col p-4 space-y-4">
                      <Link to="/" className="flex items-center p-2 rounded-md hover:bg-mechitv-bg">
                        Home
                      </Link>
                      <Link to="/highlights" className="flex items-center p-2 rounded-md hover:bg-mechitv-bg">
                        <Play className="h-4 w-4 mr-2" />
                        Highlights
                      </Link>
                      <Link to="/news" className="flex items-center p-2 rounded-md hover:bg-mechitv-bg">
                        News
                      </Link>
                      <Link to="/ticketing" className="flex items-center p-2 rounded-md hover:bg-mechitv-bg">
                        <Ticket className="h-4 w-4 mr-2" />
                        Tickets
                      </Link>
                      <Link to="/store" className="flex items-center p-2 rounded-md hover:bg-mechitv-bg">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Store
                      </Link>
                      <Link to="/community" className="flex items-center p-2 rounded-md hover:bg-mechitv-bg">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Community
                      </Link>
                    </nav>
                    
                    <div className="mt-auto p-4 border-t border-border">
                      <div className="flex gap-2 mb-4">
                        <Button variant="outline" size="sm" className="flex-1">
                          <User className="mr-2 h-4 w-4" /> Login
                        </Button>
                        <Button size="sm" className="flex-1 bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90">
                          Sign Up
                        </Button>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
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
