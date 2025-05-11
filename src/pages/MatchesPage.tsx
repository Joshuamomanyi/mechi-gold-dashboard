
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/dashboard/DataTable";
import { ArrowLeft, PlusCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for matches
const mockMatches = [
  { id: 1, league: "-arabao", homeTeam: "Bidco United", awayTeam: "Bidco United", homeScore: 0, awayScore: 0, date: "2025-03-29", time: "15:00", status: "countdown" },
  { id: 3, league: "kpl", homeTeam: "Tusker FC", awayTeam: "Bidco United", homeScore: 0, awayScore: 0, date: "2025-03-24", time: "18:07", status: "live" },
  { id: 4, league: "-up", homeTeam: "Bidco United", awayTeam: "Bidco United", homeScore: 0, awayScore: 0, date: "2025-04-22", time: "07:08", status: "finished" },
  { id: 5, league: "kpl", homeTeam: "Leopards", awayTeam: "Shabana FC", homeScore: 3, awayScore: 0, date: "2025-03-21", time: "22:30", status: "live" },
  { id: 6, league: "kpl", homeTeam: "Moldova", awayTeam: "Norway", homeScore: 0, awayScore: 0, date: "2025-03-21", time: "14:00", status: "countdown" },
  { id: 7, league: "kpl", homeTeam: "Kenya", awayTeam: "Gabon", homeScore: 0, awayScore: 0, date: "2025-03-23", time: "16:00", status: "countdown" }
];

const MatchesPage = () => {
  const [matches, setMatches] = useState(mockMatches);

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'live':
        return <Badge className="bg-green-500">Live</Badge>;
      case 'countdown':
        return <Badge className="bg-blue-500">Upcoming</Badge>;
      case 'finished':
        return <Badge className="bg-gray-500">Finished</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const columns = [
    { key: "id", header: "ID" },
    { key: "league", header: "League" },
    { key: "homeTeam", header: "Home Team" },
    { key: "awayTeam", header: "Away Team" },
    { 
      key: "score", 
      header: "Score",
      cell: (match: any) => (
        <span>{match.homeScore} - {match.awayScore}</span>
      )
    },
    { key: "date", header: "Date" },
    { key: "time", header: "Time" },
    { 
      key: "status", 
      header: "Status",
      cell: (match: any) => getStatusBadge(match.status)
    }
  ];

  const handleEdit = (match: any) => {
    console.log("Edit match:", match);
  };

  const handleDelete = (match: any) => {
    console.log("Delete match:", match);
    setMatches(matches.filter(m => m.id !== match.id));
  };

  const handleAddNew = () => {
    console.log("Add new match");
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center mb-2">
            <Link to="/" className="text-mechitv-accent hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Admin Dashboard
            </Link>
          </div>
          <h1 className="text-2xl font-bold">Manage Matches</h1>
        </div>
        <Button onClick={handleAddNew} className="bg-mechitv-accent hover:bg-mechitv-accent/90">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Match
        </Button>
      </div>

      <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
        <DataTable 
          data={matches} 
          columns={columns} 
          onEdit={handleEdit}
          onDelete={handleDelete}
          actions={{
            edit: true,
            delete: true
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default MatchesPage;
