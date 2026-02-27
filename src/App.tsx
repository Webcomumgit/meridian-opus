import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Investments from "./pages/Investments";
import Portfolio from "./pages/Portfolio";
import PropertyDetail from "./pages/PropertyDetail";
import GoldenVisa from "./pages/GoldenVisa";
import Insights from "./pages/Insights";
import ArticleDetail from "./pages/ArticleDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PrivateArea from "./pages/PrivateArea";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PropertyDetail />} />
            <Route path="/golden-visa" element={<GoldenVisa />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:id" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/private" element={<PrivateArea />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
