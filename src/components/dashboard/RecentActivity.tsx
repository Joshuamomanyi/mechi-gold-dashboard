
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    user: "Admin",
    initials: "AD",
    action: "Added new match: Liverpool vs Manchester United",
    time: "Just now",
  },
  {
    id: 2,
    user: "Editor",
    initials: "ED",
    action: "Updated Bayern Munich team roster",
    time: "2 hours ago",
  },
  {
    id: 3,
    user: "Admin",
    initials: "AD",
    action: "Created new season: Premier League 2025/26",
    time: "Yesterday",
  },
  {
    id: 4,
    user: "Editor",
    initials: "ED",
    action: "Uploaded highlights for Barcelona vs Real Madrid",
    time: "2 days ago",
  },
];

const RecentActivity = () => {
  return (
    <Card className="dashboard-card">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-medium">Recent Activity</h3>
        <a href="#" className="text-xs text-mechitv-accent hover:underline">
          View all
        </a>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-mechitv-accent/20 text-mechitv-accent text-xs">
                {activity.initials}
              </AvatarFallback>
            </Avatar>
            
            <div>
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;
