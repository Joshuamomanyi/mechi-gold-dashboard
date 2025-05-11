
import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/dashboard/DataTable";
import { ListVideo, PlusCircle, Play, FileImage } from "lucide-react";

// Mock data for highlights
const mockHighlights = [
  { id: 1, match: "Bidco United vs Bidco United", league: "-up", type: "Uploaded", videoUrl: "/video1.mp4" },
  { id: 2, match: "Tusker FC vs Bidco United", league: "kpl", type: "Embedded", videoUrl: "" }
];

const HighlightsPage = () => {
  const [highlights, setHighlights] = useState(mockHighlights);

  const columns = [
    { key: "match", header: "Match" },
    { key: "league", header: "League" },
    { key: "type", header: "Type" },
    { 
      key: "video", 
      header: "Video",
      cell: (highlight: any) => (
        <div className="flex justify-center items-center">
          {highlight.type === "Uploaded" ? (
            <div className="relative bg-gray-800 w-32 h-20 rounded flex justify-center items-center">
              <Play className="text-white absolute" />
            </div>
          ) : (
            <div className="bg-gray-200 w-32 h-20 rounded flex justify-center items-center">
              <FileImage className="text-gray-400" />
            </div>
          )}
        </div>
      ) 
    }
  ];

  const handleEdit = (highlight: any) => {
    console.log("Edit highlight:", highlight);
  };

  const handleDelete = (highlight: any) => {
    console.log("Delete highlight:", highlight);
    setHighlights(highlights.filter(h => h.id !== highlight.id));
  };

  const handleAddNew = () => {
    console.log("Add new highlight");
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1 flex items-center">
            <ListVideo size={24} className="mr-2 text-mechitv-accent" />
            Manage Highlights
          </h1>
          <p className="text-muted-foreground">
            Add, edit or remove video highlights
          </p>
        </div>
        <Button onClick={handleAddNew} className="bg-mechitv-accent hover:bg-mechitv-accent/90">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Highlight
        </Button>
      </div>

      <div className="bg-mechitv-bg-light rounded-lg border border-border p-4">
        <DataTable 
          data={highlights} 
          columns={columns} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </DashboardLayout>
  );
};

export default HighlightsPage;
