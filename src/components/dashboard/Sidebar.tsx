
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Menu,
  ChevronDown,
  Trophy,
  CalendarDays,
  Users,
  User,
  Radio,
  List,
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
  const location = useLocation();
  const path = location.pathname;

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
              <Link to="/" className={`sidebar-link ${path === '/' ? 'active' : ''}`}>
                <LayoutGrid size={18} />
                <span>Overview</span>
              </Link>
            </nav>
          </div>

          <div className="mb-4">
            <div className="mb-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Management
            </div>
            <nav className="space-y-1">
              <Link to="/competitions" className={`sidebar-link ${path === '/competitions' ? 'active' : ''}`}>
                <Trophy size={18} />
                <span>Competitions</span>
              </Link>
              <Link to="/seasons" className={`sidebar-link ${path === '/seasons' ? 'active' : ''}`}>
                <CalendarDays size={18} />
                <span>Seasons</span>
              </Link>
              <Link to="/teams" className={`sidebar-link ${path === '/teams' ? 'active' : ''}`}>
                <Users size={18} />
                <span>Teams</span>
              </Link>
              <Link to="/players" className={`sidebar-link ${path === '/players' ? 'active' : ''}`}>
                <User size={18} />
                <span>Players</span>
              </Link>
              <Link to="/lineups" className={`sidebar-link ${path === '/lineups' ? 'active' : ''}`}>
                <List size={18} />
                <span>Lineups</span>
              </Link>
              <Link to="/matches" className={`sidebar-link ${path === '/matches' ? 'active' : ''}`}>
                <Radio size={18} />
                <span>Matches</span>
              </Link>
              <Link to="/highlights" className={`sidebar-link ${path === '/highlights' ? 'active' : ''}`}>
                <ListVideo size={18} />
                <span>Highlights</span>
              </Link>
            </nav>
          </div>

          <div className="mb-4">
            <div className="mb-3 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Settings
            </div>
            <nav className="space-y-1">
              <Link to="/settings" className={`sidebar-link ${path === '/settings' ? 'active' : ''}`}>
                <Settings size={18} />
                <span>Preferences</span>
              </Link>
              <Link to="/logout" className="sidebar-link text-red-400 hover:text-red-500 hover:bg-red-950/20">
                <LogOut size={18} />
                <span>Logout</span>
              </Link>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
