
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/dashboard/DataTable";
import { Users, PlusCircle } from "lucide-react";

// Mock data for the teams
const mockTeams = [
  { id: 1, name: "Bidco United", icon: "🔵", competitions: "—" },
  { id: 8, name: "Muranga Seal", icon: "🔶", competitions: "—" },
  { id: 15, name: "Bandari FC", icon: "⚪", competitions: "—" },
  { id: 16, name: "Sofapaka", icon: "⚪", competitions: "—" },
  { id: 17, name: "Mathare United", icon: "🟢", competitions: "—" },
  { id: 20, name: "FC Talanta", icon: "🔴", competitions: "—" },
  { id: 21, name: "Mara Sugar FC", icon: "⚪", competitions: "—" },
  { id: 22, name: "Posta Rangers", icon: "🔴", competitions: "—" }
];

const TeamsPage = () => {
  const [teams, setTeams] = useState(mockTeams);

  const columns = [
    { key: "id", header: "ID" },
    { key: "name", header: "Team Name" },
    { 
      key: "icon", 
      header: "Icon",
      cell: (team: any) => (
        <div className="flex justify-center items-center">
          <span className="text-2xl">{team.icon}</span>
        </div>
      ) 
    },
    { key: "competitions", header: "Competitions" }
  ];

  const handleEdit = (team: any) => {
    console.log("Edit team:", team);
  };

  const handleDelete = (team: any) => {
    console.log("Delete team:", team);
    setTeams(teams.filter(t => t.id !== team.id));
  };

  const handleAddNew = () => {
    console.log("Add new team");
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1 flex items-center">
            <Users size={24} className="mr-2 text-mechitv-accent" />
            Manage Teams
          </h1>
          <p className="text-muted-foreground">
            Add, edit or remove teams from the system
          </p>
        </div>
        <Button onClick={handleAddNew} className="bg-mechitv-accent hover:bg-mechitv-accent/90">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Team
        </Button>
      </div>

      <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
        <DataTable 
          data={teams} 
          columns={columns} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </DashboardLayout>
  );
};

export default TeamsPage;
