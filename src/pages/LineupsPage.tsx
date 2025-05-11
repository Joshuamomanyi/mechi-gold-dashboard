
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DataTable from "@/components/dashboard/DataTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Mock data for lineups
const mockLineups = [
  { id: 1, teams: "Bidco United vs Bidco United", homeFormation: "Not Set", awayFormation: "Not Set" },
  { id: 3, teams: "Tusker FC vs Bidco United", homeFormation: "4-4-2", awayFormation: "4-3-3" },
  { id: 4, teams: "Bidco United vs Bidco United", homeFormation: "Not Set", awayFormation: "Not Set" },
  { id: 5, teams: "Leopards vs Shabana FC", homeFormation: "4-3-3", awayFormation: "4-3-3" },
  { id: 6, teams: "Moldova vs Norway", homeFormation: "3-4-3", awayFormation: "3-4-3" },
  { id: 7, teams: "Kenya vs Gabon", homeFormation: "4-3-3", awayFormation: "4-3-3" }
];

const LineupsPage = () => {
  const [lineups, setLineups] = useState(mockLineups);

  const columns = [
    { key: "id", header: "Match ID" },
    { key: "teams", header: "Teams" },
    { key: "homeFormation", header: "Home Formation" },
    { key: "awayFormation", header: "Away Formation" }
  ];

  const handleEdit = (lineup: any) => {
    console.log("Edit lineup:", lineup);
  };

  const handleCreate = (lineup: any) => {
    console.log("Create lineup:", lineup);
  };

  // Custom action button based on whether lineup is set
  const customActions = (lineup: any) => {
    if (lineup.homeFormation === "Not Set" || lineup.awayFormation === "Not Set") {
      return (
        <Button
          onClick={() => handleCreate(lineup)}
          size="sm"
          variant="outline"
          className="h-8 bg-mechitv-accent hover:bg-mechitv-accent/90 text-black border-none"
        >
          Create
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => handleEdit(lineup)}
          size="sm"
          variant="outline"
          className="h-8 bg-amber-500 hover:bg-amber-600 text-black border-none"
        >
          Edit
        </Button>
      );
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <Link to="/" className="text-mechitv-accent hover:underline flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Admin Dashboard
          </Link>
        </div>
        <h1 className="text-2xl font-bold">Manage Lineups</h1>
      </div>

      <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
        <DataTable 
          data={lineups} 
          columns={columns}
          actions={{
            edit: false,
            delete: false,
            custom: customActions
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default LineupsPage;
