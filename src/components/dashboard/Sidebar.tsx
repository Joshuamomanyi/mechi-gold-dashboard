
import React from "react";
import { cn } from "@/lib/utils";
import { 
  Menu,
  ChevronDown,
  Trophy,
  CalendarDays,
  Users,
  User,
  Radio,
  ListVideo,
  LayoutGrid,
  Settings,
  LogOut
} from "lucide-react";

interface SidebarProps {
  isMobileOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isMobileOpen, toggleSidebar }: SidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-sidebar w-64 border-r border-border z-50 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:z-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b border-border">
          <h1 className="text-xl font-bold text-gradient">MechiTV Admin</h1>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <div className="mb-4">
            <div className="mb-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Dashboard
            </div>
            <nav className="space-y-1">
              <a href="#" className="sidebar-link active">
                <LayoutGrid size={18} />
                <span>Overview</span>
              </a>
            </nav>
          </div>

          <div className="mb-4">
            <div className="mb-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Management
            </div>
            <nav className="space-y-1">
              <a href="#" className="sidebar-link">
                <Trophy size={18} />
                <span>Competitions</span>
              </a>
              <a href="#" className="sidebar-link">
                <CalendarDays size={18} />
                <span>Seasons</span>
              </a>
              <a href="#" className="sidebar-link">
                <Users size={18} />
                <span>Teams</span>
              </a>
              <a href="#" className="sidebar-link">
                <User size={18} />
                <span>Players</span>
              </a>
              <a href="#" className="sidebar-link">
                <Radio size={18} />
                <span>Matches</span>
              </a>
              <a href="#" className="sidebar-link">
                <ListVideo size={18} />
                <span>Highlights</span>
              </a>
            </nav>
          </div>

          <div className="mb-4">
            <div className="mb-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Settings
            </div>
            <nav className="space-y-1">
              <a href="#" className="sidebar-link">
                <Settings size={18} />
                <span>Preferences</span>
              </a>
              <a href="#" className="sidebar-link text-red-400 hover:text-red-500 hover:bg-red-950/20">
                <LogOut size={18} />
                <span>Logout</span>
              </a>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
