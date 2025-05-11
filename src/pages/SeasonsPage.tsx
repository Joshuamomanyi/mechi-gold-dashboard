
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarDays, PlusCircle } from "lucide-react";
import DataTable from "@/components/dashboard/DataTable";

// Mock data for seasons
const mockSeasons = [
  { 
    id: 3, 
    competition: "FA Cup", 
    season: "2024/25", 
    start: "2024-09-16", 
    end: "2025-05-16" 
  },
];

// Mock competitions for the select
const mockCompetitions = [
  { id: 1, name: "FA Cup" },
  { id: 2, name: "Carabao" },
  { id: 3, name: "KPL" }
];

const SeasonsPage = () => {
  const [seasons, setSeasons] = useState(mockSeasons);
  const [competition, setCompetition] = useState("");
  const [seasonName, setSeasonName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const columns = [
    { key: "id", header: "ID" },
    { key: "competition", header: "Competition" },
    { key: "season", header: "Season" },
    { key: "start", header: "Start" },
    { key: "end", header: "End" }
  ];

  const handleAddSeason = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Add season", { competition, seasonName, startDate, endDate });
    // This would typically make an API call
  };

  const handleEdit = (season: any) => {
    console.log("Edit season:", season);
  };

  const handleDelete = (season: any) => {
    console.log("Delete season:", season);
    setSeasons(seasons.filter(s => s.id !== season.id));
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-1 flex items-center">
          <CalendarDays size={24} className="mr-2 text-mechitv-accent" />
          Manage Seasons
        </h1>
        <p className="text-muted-foreground">
          Add, edit or remove seasons for competitions
        </p>
      </div>

      <div className="bg-mechitv-bg-light rounded-lg border border-border p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Add New Season</h2>
        <form onSubmit={handleAddSeason} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Competition</label>
            <Select onValueChange={setCompetition}>
              <SelectTrigger>
                <SelectValue placeholder="-- Select competition --" />
              </SelectTrigger>
              <SelectContent>
                {mockCompetitions.map(comp => (
                  <SelectItem key={comp.id} value={comp.name}>
                    {comp.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Season Name (e.g. "2024/25")</label>
            <Input 
              value={seasonName} 
              onChange={(e) => setSeasonName(e.target.value)} 
              placeholder="Season name" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Start Date (optional)</label>
              <Input 
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">End Date (optional)</label>
              <Input 
                type="date" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)} 
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-mechitv-accent hover:bg-mechitv-accent/90">
            Add Season
          </Button>
        </form>
      </div>

      <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
        <h2 className="text-xl font-bold mb-4">Existing Seasons</h2>
        <DataTable 
          data={seasons} 
          columns={columns} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </DashboardLayout>
  );
};

export default SeasonsPage;
