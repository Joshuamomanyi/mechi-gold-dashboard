
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/dashboard/DataTable";
import { User as UserIcon, PlusCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock data for the players
const mockPlayers = [
  { id: 1, name: "Mohammed Bajaber", photo: "👤", club: "Kenya Police" },
  { id: 2, name: "Austin", photo: "👤", club: "—" },
  { id: 3, name: "Austin", photo: "👤", club: "Tusker FC" },
  { id: 4, name: "Mihail Caimacov", photo: "👤", club: "—" }
];

const PlayersPage = () => {
  const [players, setPlayers] = useState(mockPlayers);

  const columns = [
    { key: "id", header: "ID" },
    { 
      key: "name", 
      header: "Player",
      cell: (player: any) => (
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt={player.name} />
            <AvatarFallback className="bg-mechitv-accent/20 text-mechitv-accent">
              {player.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <span>{player.name}</span>
        </div>
      )
    },
    { key: "club", header: "Club" }
  ];

  const handleEdit = (player: any) => {
    console.log("Edit player:", player);
  };

  const handleDelete = (player: any) => {
    console.log("Delete player:", player);
    setPlayers(players.filter(p => p.id !== player.id));
  };

  const handleStats = (player: any) => {
    console.log("View stats for player:", player);
  };

  const handleAddNew = () => {
    console.log("Add new player");
  };

  // Custom action buttons including stats
  const customActions = (player: any) => (
    <>
      <Button
        onClick={() => handleStats(player)}
        size="sm"
        variant="outline"
        className="h-8 bg-blue-500 hover:bg-blue-600 text-white border-none"
      >
        Stats
      </Button>
    </>
  );

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1 flex items-center">
            <UserIcon size={24} className="mr-2 text-mechitv-accent" />
            Player Management
          </h1>
          <p className="text-muted-foreground">
            Add, edit or remove players from the system
          </p>
        </div>
        <Button onClick={handleAddNew} className="bg-mechitv-accent hover:bg-mechitv-accent/90">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Player
        </Button>
      </div>

      <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
        <DataTable 
          data={players} 
          columns={columns} 
          onEdit={handleEdit}
          onDelete={handleDelete}
          actions={{
            edit: true,
            delete: true,
            custom: customActions
          }}
        />
      </div>
    </DashboardLayout>
  );
};

export default PlayersPage;
