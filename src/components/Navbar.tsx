import { motion } from "motion/react";
import { Image, FileText, Send, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { usePersona } from "../context/PersonaContext";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { persona, setPersona } = usePersona();
  const [mobileOpen, setMobileOpen] = useState(false);

  const goContact = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  const navItems = [
    { name: "Work", path: "/portfolio", icon: Image },
    { name: "Resume", path: "/resume", icon: FileText },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-6"
    >
      <nav className="bg-[rgba(10,17,14,0.72)] backdrop-blur-2xl rounded-full px-4 md:px-7 py-2 md:py-3.5 flex items-center gap-2 md:gap-8 border border-[rgba(92,224,160,0.12)] shadow-2xl max-w-[96vw]">
        <Link to="/" className="font-display font-black text-lg md:text-2xl tracking-tighter border-r border-white/10 pr-4 md:pr-10 group flex items-center gap-2 shrink-0">
          <span className="whitespace-nowrap lowercase">prashant<span className="text-brand group-hover:animate-pulse">.</span>s</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center gap-2 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                <item.icon size={16} className={`${isActive ? "text-brand" : "group-hover:text-brand"} transition-colors`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <button
            onClick={goContact}
            className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            <Send size={16} className="group-hover:text-brand transition-colors" />
            <span>Contact</span>
          </button>
        </div>

        <div className="flex items-center border-l border-white/10 pl-2 md:pl-6 gap-1 shrink-0">
          {[
            { id: "3D" as const, label: "3D" },
            { id: "BOTH" as const, label: "All" },
            { id: "AI" as const, label: "AI" },
          ].map((p) => (
            <button
              key={p.id}
              onClick={() => setPersona(p.id)}
              className={`px-2.5 py-1.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest transition-all ${
                persona === p.id ? "bg-brand text-black" : "text-zinc-500 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-1.5 text-zinc-400 hover:text-white transition-colors ml-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 right-3 glass rounded-2xl p-4 flex flex-col gap-3 shadow-2xl min-w-[180px] md:hidden"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 text-sm font-medium transition-colors py-1 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                <item.icon size={16} className={isActive ? "text-brand" : ""} />
                <span>{item.name}</span>
              </Link>
            );
          })}
          <button
            onClick={goContact}
            className="flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors py-1 bg-transparent border-none cursor-pointer text-left"
          >
            <Send size={16} />
            <span>Contact</span>
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
