import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate("/private");
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <span className="font-heading text-3xl tracking-[0.15em] text-gold">MERIDIAN</span>
        </div>

        <div className="border border-gold/20 p-8 bg-navy">
          <h1 className="font-heading text-2xl text-navy-foreground text-center mb-2">Private Client Portal</h1>
          <p className="font-body text-xs text-navy-foreground/50 text-center mb-8">
            Access your investment portfolio and exclusive opportunities
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-navy-foreground/20 bg-transparent text-navy-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-navy-foreground/30"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-navy-foreground/20 bg-transparent text-navy-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-navy-foreground/30"
            />
            <button
              type="submit"
              className="w-full bg-gold text-gold-foreground font-body text-sm py-3 tracking-wide hover:bg-gold/90 transition-colors"
            >
              Access Portal
            </button>
          </form>

          <p className="text-center mt-6">
            <a href="/contact" className="font-body text-xs text-gold/70 hover:text-gold transition-colors">
              Request Access
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
