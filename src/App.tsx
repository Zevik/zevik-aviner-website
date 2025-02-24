
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Shaming from "./pages/communities/Shaming";
import Legal from "./pages/communities/Legal";
import Insights from "./pages/communities/Insights";
import VirtualSynagogue from "./pages/communities/Virtual-Synagogue";
import VirtualSquare from "./pages/communities/Virtual-Square";
import Monetization from "./pages/communities/Monetization";
import MarketingWriting from "./pages/communities/MarketingWriting";
import WhyNotHaredim from "./pages/articles/WhyNotHaredim";
import WarOnStereotypicalLanguage from "./pages/articles/WarOnStereotypicalLanguage";
import TheHaredim from "./pages/articles/TheHaredim";
import LanguageOfStereotypes from "./pages/articles/LanguageOfStereotypes";
import SmallBusiness from "./pages/independent/SmallBusiness";
import DepositFund from "./pages/independent/DepositFund";
import CashFund from "./pages/independent/CashFund";
import PracticalGuideGlobalContract from "./pages/independent/PracticalGuideGlobalContract";
import WorkerEmployerRelations from "./pages/independent/WorkerEmployerRelations";
import Gmac from "./pages/extensions/Gmac";
import GroupsMonitoring from "./pages/extensions/GroupsMonitoring";
import ReplyComments from "./pages/extensions/ReplyComments";
import SelfEmployedInIsrael from "./pages/independent/SelfEmployedInIsrael";
import EndEmployment from "./pages/independent/EndEmployment";
import AIJobMarket from "./pages/ai/AIJobMarket";
import AIEra from "./pages/ai/AIEra";
import AITools from "./pages/ai/AITools";

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
            <Route path="/about" element={<About />} />
            <Route path="/communities/shaming" element={<Shaming />} />
            <Route path="/communities/legal" element={<Legal />} />
            <Route path="/communities/insights" element={<Insights />} />
            <Route path="/communities/virtual-synagogue" element={<VirtualSynagogue />} />
            <Route path="/communities/virtual-square" element={<VirtualSquare />} />
            <Route path="/communities/monetization" element={<Monetization />} />
            <Route path="/communities/marketing-writing" element={<MarketingWriting />} />
            <Route path="/articles/why-not-haredim" element={<WhyNotHaredim />} />
            <Route path="/articles/war-on-stereotypical-language" element={<WarOnStereotypicalLanguage />} />
            <Route path="/articles/the-haredim" element={<TheHaredim />} />
            <Route path="/articles/language-of-stereotypes" element={<LanguageOfStereotypes />} />
            <Route path="/independent/small-business" element={<SmallBusiness />} />
            <Route path="/independent/deposit-fund" element={<DepositFund />} />
            <Route path="/independent/cash-fund" element={<CashFund />} />
            <Route path="/independent/practical-guide-global-contract" element={<PracticalGuideGlobalContract />} />
            <Route path="/independent/worker-employer-relations" element={<WorkerEmployerRelations />} />
            <Route path="/independent/self-employed-in-israel" element={<SelfEmployedInIsrael />} />
            <Route path="/independent/end-employment" element={<EndEmployment />} />
            <Route path="/extensions/gmac" element={<Gmac />} />
            <Route path="/extensions/groups-monitoring" element={<GroupsMonitoring />} />
            <Route path="/extensions/reply-comments" element={<ReplyComments />} />
            <Route path="/ai/tools" element={<AITools />} />
            <Route path="/ai/job-market" element={<AIJobMarket />} />
            <Route path="/ai/era" element={<AIEra />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
