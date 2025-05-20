
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserLayout from "./components/layout/UserLayout";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/NewsPage";

// Admin pages
import AdminIndex from "./pages/Index"; // Renamed to distinguish from the main HomePage
import CompetitionsPage from "./pages/CompetitionsPage";
import SeasonsPage from "./pages/SeasonsPage";
import TeamsPage from "./pages/TeamsPage";
import PlayersPage from "./pages/PlayersPage";
import LineupsPage from "./pages/LineupsPage";
import MatchesPage from "./pages/MatchesPage";
import HighlightsPage from "./pages/HighlightsPage";
import SettingsPage from "./pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* User-facing routes */}
          <Route path="/" element={<UserLayout><HomePage /></UserLayout>} />
          <Route path="/news" element={<UserLayout><NewsPage /></UserLayout>} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminIndex />} />
          <Route path="/admin/competitions" element={<CompetitionsPage />} />
          <Route path="/admin/seasons" element={<SeasonsPage />} />
          <Route path="/admin/teams" element={<TeamsPage />} />
          <Route path="/admin/players" element={<PlayersPage />} />
          <Route path="/admin/lineups" element={<LineupsPage />} />
          <Route path="/admin/matches" element={<MatchesPage />} />
          <Route path="/admin/highlights" element={<HighlightsPage />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
