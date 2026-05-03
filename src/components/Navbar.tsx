import { motion } from "motion/react";
import { Image, FileText, Send, Shuffle, Sparkles, Cpu, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { usePersona } from "../context/PersonaContext";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const { persona, setPersona } = usePersona();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Portfolio", path: "/portfolio", icon: Image },
    { name: "Resume", path: "/resume", icon: FileText },
    { name: "Contact", path: "/#contact", icon: Send, isHash: true },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 md:p-6"
    >
      <nav className="glass rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-8 shadow-2xl max-w-[96vw]">
        <Link to="/" className="font-display font-bold text-base md:text-xl tracking-tighter border-r border-glass-border pr-3 md:pr-8 group flex items-center gap-2 shrink-0">
          <span className="whitespace-nowrap lowercase">prashant<span className="text-brand group-hover:animate-pulse">.</span>s</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return item.isHash ? (
              <a
                key={item.name}
                href={item.path}
                className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <item.icon size={16} className="group-hover:text-brand transition-colors" />
                <span>{item.name}</span>
              </a>
            ) : (
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
        </div>

        {/* Persona Switcher — visible on all sizes */}
        <div className="flex items-center border-l border-glass-border pl-2 md:pl-6 gap-1 shrink-0">
          <button
            onClick={() => setPersona('3D')}
            className={`p-1.5 md:p-2 rounded-full transition-all ${persona === '3D' ? 'bg-3d-brand text-white shadow-[0_0_15px_rgba(242,125,38,0.4)]' : 'text-zinc-500 hover:text-3d-brand'}`}
            title="3D / Game Design"
          >
            <Sparkles size={14} />
          </button>
          <button
            onClick={() => setPersona('AI')}
            className={`p-1.5 md:p-2 rounded-full transition-all ${persona === 'AI' ? 'bg-ai-brand text-black shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'text-zinc-500 hover:text-ai-brand'}`}
            title="AI / Web Dev"
          >
            <Cpu size={14} />
          </button>
          <button
            onClick={() => setPersona('BOTH')}
            className={`p-1.5 md:p-2 rounded-full transition-all ${persona === 'BOTH' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
            title="Full Profile"
          >
            <Shuffle size={14} />
          </button>
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
            return item.isHash ? (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 text-sm font-medium text-zinc-400 hover:text-white transition-colors py-1"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </a>
            ) : (
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
        </motion.div>
      )}
    </motion.header>
  );
}
