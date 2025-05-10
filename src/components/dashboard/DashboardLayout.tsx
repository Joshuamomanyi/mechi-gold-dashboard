
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-mechitv-bg text-foreground">
      <Sidebar isMobileOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="lg:ml-64 min-h-screen flex flex-col">
        <Topbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
