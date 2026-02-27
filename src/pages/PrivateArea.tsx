import { Link, useNavigate } from "react-router-dom";
import { FileText, Phone, Mail } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { properties } from "@/data/properties";
import { useEffect } from "react";

const documents = [
  { name: "Q4 2023 Portfolio Report", date: "15 Jan 2024" },
  { name: "Tax Summary — FY 2023", date: "28 Feb 2024" },
  { name: "Golden Visa Status Update", date: "12 Mar 2024" },
  { name: "Investment Committee Minutes", date: "5 Apr 2024" },
];

const PrivateArea = () => {
  const { isLoggedIn, clientName, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  const myProperties = properties.slice(0, 2);
  const opportunities = properties.slice(3, 5);

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Private nav */}
      <nav className="bg-navy h-16 flex items-center px-6 justify-between">
        <Link to="/private" className="font-heading text-xl tracking-[0.15em] text-gold">MERIDIAN</Link>
        <div className="hidden md:flex items-center gap-8">
          <span className="font-body text-sm text-navy-foreground/70">Portfolio</span>
          <span className="font-body text-sm text-navy-foreground/70">Documents</span>
          <span className="font-body text-sm text-navy-foreground/70">Opportunities</span>
        </div>
        <button onClick={() => { logout(); navigate("/login"); }} className="font-body text-sm text-gold hover:text-gold/80 transition-colors">
          Sign Out
        </button>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="font-heading text-3xl mb-1">Welcome, {clientName}</h1>
        <p className="font-body text-sm text-muted-foreground mb-10">Your private investment dashboard</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* My Portfolio */}
          <div className="border border-gold/20 bg-card p-6">
            <h2 className="font-heading text-xl mb-6">My Portfolio</h2>
            <div className="space-y-4">
              {myProperties.map((p) => (
                <div key={p.id} className="flex gap-4 items-start">
                  <div className="w-20 h-16 flex-shrink-0 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-heading text-base">{p.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{p.price}</p>
                  </div>
                  <span className="font-body text-[10px] uppercase tracking-[0.1em] bg-navy text-gold px-2 py-1 flex-shrink-0">
                    Active Investment
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="border border-gold/20 bg-card p-6">
            <h2 className="font-heading text-xl mb-6">Documents</h2>
            <div className="space-y-3">
              {documents.map((d) => (
                <div key={d.name} className="flex items-center gap-3 py-2 border-b border-lightgrey last:border-0">
                  <FileText size={16} className="text-gold flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-body text-sm">{d.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{d.date}</p>
                  </div>
                  <span className="font-body text-xs text-gold cursor-pointer hover:underline">Download</span>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusive Opportunities */}
          <div className="border border-gold/20 bg-card p-6">
            <h2 className="font-heading text-xl mb-6">Exclusive Opportunities</h2>
            <div className="space-y-4">
              {opportunities.map((p) => (
                <div key={p.id} className="border border-lightgrey p-4">
                  <span className="font-body text-[10px] uppercase tracking-[0.15em] text-gold">
                    PRIVATE — Not publicly listed
                  </span>
                  <div className="flex gap-4 mt-3">
                    <div className="w-20 h-16 flex-shrink-0 overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-heading text-base">{p.name}</p>
                      <p className="font-body text-xs text-muted-foreground">{p.location}</p>
                      <p className="font-heading text-sm text-gold mt-1">{p.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Advisor */}
          <div className="border border-gold/20 bg-card p-6">
            <h2 className="font-heading text-xl mb-6">Your Advisor</h2>
            <div className="flex gap-4 items-start">
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Advisor" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-heading text-lg">António Ferreira</p>
                <p className="font-body text-xs uppercase tracking-[0.1em] text-gold mb-3">Managing Director</p>
                <div className="space-y-1">
                  <p className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <Phone size={14} className="text-gold" /> +351 21 000 0000
                  </p>
                  <p className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                    <Mail size={14} className="text-gold" /> antonio@meridian.pt
                  </p>
                </div>
                <button className="mt-4 border border-gold text-gold font-body text-xs px-4 py-2 tracking-wide hover:bg-gold/10 transition-colors">
                  Contact Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateArea;
