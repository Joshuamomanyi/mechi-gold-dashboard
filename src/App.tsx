
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserLayout from "./components/layout/UserLayout";
import NotFound from "./pages/NotFound";
import NewsPage from "./pages/NewsPage";
import BlogPostPage from "./pages/BlogPostPage";
import HighlightsPage from "./pages/HighlightsPage";
import CommunityPage from "./pages/CommunityPage";
import SinglePostPage from "./pages/SinglePostPage";
import SingleHighlightPage from "./pages/SingleHighlightPage";
import TicketingPage from "./pages/TicketingPage";
import JerseyStorePage from "./pages/JerseyStorePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import ContactPage from "./pages/ContactPage";

// Admin pages
import AdminIndex from "./pages/Index"; // Renamed to distinguish from the main HomePage
import CompetitionsPage from "./pages/CompetitionsPage";
import SeasonsPage from "./pages/SeasonsPage";
import TeamsPage from "./pages/TeamsPage";
import PlayersPage from "./pages/PlayersPage";
import LineupsPage from "./pages/LineupsPage";
import MatchesPage from "./pages/MatchesPage";
import HighlightsAdminPage from "./pages/HighlightsPage";
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
          <Route path="/news/:id" element={<BlogPostPage />} />
          <Route path="/post/:id" element={<SinglePostPage />} />
          <Route path="/highlights" element={<UserLayout><HighlightsPage /></UserLayout>} />
          <Route path="/highlight/:id" element={<SingleHighlightPage />} />
          <Route path="/community" element={<CommunityPage />} /> {/* Community page has its own layout */}
          <Route path="/ticketing" element={<UserLayout><TicketingPage /></UserLayout>} />
          <Route path="/store" element={<UserLayout><JerseyStorePage /></UserLayout>} />
          <Route path="/cart" element={<UserLayout><CartPage /></UserLayout>} />
          <Route path="/checkout" element={<UserLayout><CheckoutPage /></UserLayout>} />
          <Route path="/privacy-policy" element={<UserLayout><PrivacyPolicyPage /></UserLayout>} />
          <Route path="/terms-of-use" element={<UserLayout><TermsOfUsePage /></UserLayout>} />
          <Route path="/contact" element={<UserLayout><ContactPage /></UserLayout>} />
          
          {/* Admin routes */}
          <Route path="/admin" element={<AdminIndex />} />
          <Route path="/admin/competitions" element={<CompetitionsPage />} />
          <Route path="/admin/seasons" element={<SeasonsPage />} />
          <Route path="/admin/teams" element={<TeamsPage />} />
          <Route path="/admin/players" element={<PlayersPage />} />
          <Route path="/admin/lineups" element={<LineupsPage />} />
          <Route path="/admin/matches" element={<MatchesPage />} />
          <Route path="/admin/highlights" element={<HighlightsAdminPage />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
