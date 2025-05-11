
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/dashboard/DataTable";
import { Trophy, PlusCircle } from "lucide-react";

// Mock data for the competitions
const mockCompetitions = [
  { id: 1, name: "FA Cup", slug: "-up", icon: "🏆", country: "England" },
  { id: 2, name: "Carabao", slug: "-arabao", icon: "🏆", country: "England" },
  { id: 3, name: "KPL", slug: "kpl", icon: "🏆", country: "Kenya" }
];

const CompetitionsPage = () => {
  const [competitions, setCompetitions] = useState(mockCompetitions);

  const columns = [
    { key: "id", header: "ID" },
    { key: "icon", header: "Icon" },
    { key: "name", header: "Name" },
    { key: "slug", header: "Slug" },
    { key: "country", header: "Country" }
  ];

  const handleEdit = (competition: any) => {
    console.log("Edit competition:", competition);
  };

  const handleDelete = (competition: any) => {
    console.log("Delete competition:", competition);
    // In a real app, we would call an API here
    setCompetitions(competitions.filter(c => c.id !== competition.id));
  };

  const handleAddNew = () => {
    console.log("Add new competition");
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1 flex items-center">
            <Trophy size={24} className="mr-2 text-mechitv-accent" />
            Manage Competitions
          </h1>
          <p className="text-muted-foreground">
            Add, edit or remove competitions from the system
          </p>
        </div>
        <Button onClick={handleAddNew} className="bg-mechitv-accent hover:bg-mechitv-accent/90">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Competition
        </Button>
      </div>

      <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
        <DataTable 
          data={competitions} 
          columns={columns} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </DashboardLayout>
  );
};

export default CompetitionsPage;
