import { motion } from "motion/react";
import { User, Image, FileText, Send, Shuffle, Sparkles, Cpu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { usePersona } from "../context/PersonaContext";

export default function Navbar() {
  const location = useLocation();
  const { persona, setPersona } = usePersona();

  const navItems = [
    { name: "Portfolio", path: "/portfolio", icon: Image },
    { name: "Resume", path: "/resume", icon: FileText },
    { name: "Contact", path: "/#contact", icon: Send, isHash: true },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      <nav className="glass rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 md:gap-8 shadow-2xl max-w-[95vw] overflow-hidden">
        <Link to="/" className="font-display font-bold text-lg md:text-xl tracking-tighter border-r border-glass-border pr-4 md:pr-8 uppercase group flex items-center gap-2 md:gap-4 shrink-0">
          <span className="whitespace-nowrap">PRASHANT <span className="text-brand group-hover:animate-pulse">S.</span></span>
          {persona !== 'BOTH' && (
            <span className="text-[8px] md:text-[10px] font-mono bg-brand/10 text-brand px-2 py-0.5 rounded-full border border-brand/20 hidden sm:block">
              {persona === '3D' ? 'CREATIVE' : 'AI LAB'}
            </span>
          )}
        </Link>
        
        <div className="flex items-center gap-3 md:gap-6 min-w-0">
          <div className="flex items-center gap-3 md:gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return item.isHash ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="group flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-400 hover:text-white transition-colors shrink-0"
                >
                  <item.icon size={16} className="group-hover:text-brand transition-colors" />
                  <span className="hidden lg:inline">{item.name}</span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`group flex items-center gap-2 text-xs md:text-sm font-medium transition-colors shrink-0 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <item.icon size={16} className={`${isActive ? "text-brand" : "group-hover:text-brand"} transition-colors`} />
                  <span className="hidden lg:inline">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center border-l border-glass-border pl-3 md:pl-6 gap-1 md:gap-2 shrink-0">
            <button
              onClick={() => setPersona('3D')}
              className={`p-1.5 md:p-2 rounded-full transition-all flex items-center gap-2 ${persona === '3D' ? 'bg-3d-brand text-white shadow-[0_0_15px_rgba(242,125,38,0.4)]' : 'text-zinc-500 hover:text-3d-brand'}`}
              title="Creative 3D Mode"
            >
              <Sparkles size={14} className="md:size-[16px]" />
              <span className="text-[10px] font-mono uppercase hidden xl:inline">3D</span>
            </button>
            <button
              onClick={() => setPersona('AI')}
              className={`p-1.5 md:p-2 rounded-full transition-all flex items-center gap-2 ${persona === 'AI' ? 'bg-ai-brand text-black shadow-[0_0_15px_rgba(0,242,255,0.4)]' : 'text-zinc-500 hover:text-ai-brand'}`}
              title="AI Engineering Mode"
            >
              <Cpu size={14} className="md:size-[16px]" />
              <span className="text-[10px] font-mono uppercase hidden xl:inline">AI</span>
            </button>
            <button
              onClick={() => setPersona('BOTH')}
              className={`p-1.5 md:p-2 rounded-full transition-all flex items-center gap-2 ${persona === 'BOTH' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}
              title="Full Stack Mode"
            >
              <Shuffle size={14} className="md:size-[16px]" />
              <span className="text-[10px] font-mono uppercase hidden xl:inline">All</span>
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
