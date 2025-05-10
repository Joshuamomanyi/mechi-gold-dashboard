
import React from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingMatches from "@/components/dashboard/UpcomingMatches";
import { 
  CalendarDays, 
  Trophy, 
  Users, 
  ListVideo 
} from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Welcome to MechiTV Dashboard</h1>
        <p className="text-muted-foreground">
          Manage all your sports content in one place
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Competitions"
          value={24}
          icon={<Trophy size={20} className="text-mechitv-accent" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="Active Seasons"
          value={8}
          icon={<CalendarDays size={20} className="text-mechitv-accent" />}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard 
          title="Registered Teams"
          value={168}
          icon={<Users size={20} className="text-mechitv-accent" />}
          trend={{ value: 24, isPositive: true }}
        />
        <StatCard 
          title="Video Highlights"
          value={532}
          icon={<ListVideo size={20} className="text-mechitv-accent" />}
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UpcomingMatches />
        <RecentActivity />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
