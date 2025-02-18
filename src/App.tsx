
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shaming from "./pages/communities/Shaming";
import Legal from "./pages/communities/Legal";
import Insights from "./pages/communities/Insights";
import VirtualSynagogue from "./pages/communities/Virtual-Synagogue";
import Gmac from "./pages/extensions/Gmac";
import GroupsMonitoring from "./pages/extensions/GroupsMonitoring";
import ReplyComments from "./pages/extensions/ReplyComments";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/communities/shaming" element={<Shaming />} />
            <Route path="/communities/legal" element={<Legal />} />
            <Route path="/communities/insights" element={<Insights />} />
            <Route path="/communities/virtual-synagogue" element={<VirtualSynagogue />} />
            <Route path="/extensions/gmac" element={<Gmac />} />
            <Route path="/extensions/groups-monitoring" element={<GroupsMonitoring />} />
            <Route path="/extensions/reply-comments" element={<ReplyComments />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
