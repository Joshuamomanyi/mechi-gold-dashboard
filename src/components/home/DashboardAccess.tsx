import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Users, 
  Trophy,
  ArrowRight
} from "lucide-react";

const DashboardAccess = () => {
  const navigate = useNavigate();

  const dashboards = [
    {
      title: "Player Dashboard",
      description: "Access your personal stats, match history, and team information",
      icon: <User className="h-8 w-8" />,
      path: "/player-dashboard",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Team Admin Panel",
      description: "Manage your team roster, fixtures, and club administration",
      icon: <Users className="h-8 w-8" />,
      path: "/team-admin",
      color: "from-green-600 to-green-800"
    },
    {
      title: "League Admin Panel",
      description: "Oversee league operations, teams, and competition management",
      icon: <Trophy className="h-8 w-8" />,
      path: "/league-admin",
      color: "from-purple-600 to-purple-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-mechitv-bg to-mechitv-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Access Your <span className="text-mechitv-accent">Dashboard</span>
          </h2>
          <p className="text-lg text-mechitv-text max-w-2xl mx-auto">
            Choose your role and access powerful management tools designed for modern football administration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dashboards.map((dashboard, index) => (
            <Card 
              key={index} 
              className="dashboard-card group hover:scale-105 transition-all duration-300 cursor-pointer border-mechitv-border/50 hover:border-mechitv-accent/50"
              onClick={() => navigate(dashboard.path)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${dashboard.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {dashboard.icon}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-mechitv-accent transition-colors duration-300">
                  {dashboard.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-mechitv-text mb-6 leading-relaxed">
                  {dashboard.description}
                </p>
                <Button 
                  className="w-full bg-mechitv-accent text-mechitv-bg hover:bg-mechitv-accent/90 group-hover:shadow-lg transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(dashboard.path);
                  }}
                >
                  Access Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-mechitv-text">
            Need help getting started? 
            <Button variant="link" className="text-mechitv-accent hover:text-mechitv-accent/80 p-0 ml-1">
              Contact Support
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DashboardAccess;