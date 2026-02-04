import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SolarInstallationKenya from "./pages/SolarInstallationKenya";
import SolarWaterHeaters from "./pages/SolarWaterHeaters";
import BatteryStorageSystems from "./pages/BatteryStorageSystems";
import CommercialSolarSolutions from "./pages/CommercialSolarSolutions";
import EnergyMonitoring from "./pages/EnergyMonitoring";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solar-installation-kenya" element={<SolarInstallationKenya />} />
            <Route path="/solar-water-heaters" element={<SolarWaterHeaters />} />
            <Route path="/battery-storage-systems" element={<BatteryStorageSystems />} />
            <Route path="/commercial-solar-solutions" element={<CommercialSolarSolutions />} />
            <Route path="/energy-monitoring" element={<EnergyMonitoring />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
