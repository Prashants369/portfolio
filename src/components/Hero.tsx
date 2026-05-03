import { motion } from "motion/react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { usePersona } from "../context/PersonaContext";

export default function Hero() {
  const { persona } = usePersona();
  const navigate = useNavigate();
  const location = useLocation();

  const isBoth = persona === 'BOTH';
  
  const heroTitle = isBoth 
    ? { top: "CREATIVE", bottom: "TECHNOLOGIST" }
    : persona === '3D' 
    ? { top: "PROCEDURAL", bottom: "ENVIRONMENTS" }
    : { top: "AUTONOMOUS", bottom: "AGENTS" };

  const heroDesc = isBoth
    ? "Developer & Environment Artist specializing in Unreal Engine 5 worlds and AI automation tools."
    : persona === '3D'
    ? "Environment Artist & Game Designer specializing in Unreal Engine 5 world-building and procedural ecosystems."
    : "Developer building AI automations, full-stack web apps, and generative AI tools.";

  const heroImage = persona === 'AI' 
    ? "/projects/ai-factory/factory_dashboard.png" 
    : "/projects/druglordsbase/final-renders/HighresScreenshot00000.png";

  const heroBadge = isBoth
    ? "prashant.s // Full Stack"
    : persona === '3D'
    ? "prashant.s // Environment Design"
    : "prashant.s // AI Engineering";

  const bgText = isBoth
    ? "TECHNOLOGIST"
    : persona === '3D'
    ? "CREATIVE"
    : "AI ENGINE";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-20 px-4 md:px-6 overflow-hidden bg-zinc-950">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-brand/5 rounded-full blur-[100px] md:blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-brand/10 rounded-full blur-[100px] md:blur-[160px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center relative">
        {/* Massive Background Text */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full pointer-events-none z-0 overflow-visible hidden lg:block">
          <h1 className="text-[14vw] font-display font-black leading-none tracking-tighter uppercase opacity-[0.03] select-none whitespace-nowrap">
            {bgText}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6 relative z-20"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full glass border-white/5 w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              {heroBadge}
            </span>
          </div>
          
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] font-display font-black leading-[0.85] tracking-tighter uppercase">
              {heroTitle.top}<br />
              <span className="text-brand text-glow">{heroTitle.bottom}</span>
            </h1>
            <div className="absolute -left-6 top-2 bottom-2 w-1.5 bg-brand hidden lg:block rounded-full shadow-[0_0_20px_rgba(255,75,75,0.4)]" />
          </div>
          
          <p className="text-sm md:text-lg text-zinc-400 max-w-xl leading-relaxed font-sans border-l-2 border-white/5 pl-4 md:pl-6">
            {heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-6 mt-2">
            <button 
              onClick={() => navigate('/portfolio')}
              className="group relative px-6 md:px-10 py-4 bg-brand text-black font-black rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(var(--brand-rgb),0.3)] text-sm cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                View Portfolio <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button 
              onClick={() => navigate('/resume')}
              className="px-6 md:px-8 py-4 glass border-white/10 font-bold rounded-xl hover:bg-white/5 transition-all hover:border-brand/30 flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              Resume <span className="text-zinc-500 text-xs">/ .PDF</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative aspect-[4/5] lg:ml-[-10%] z-10 mt-4 lg:mt-0 max-h-[60vh] lg:max-h-none"
        >
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border-2 border-brand/40 rounded-3xl md:rounded-[3rem] -rotate-2 pointer-events-none" />
          
          <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] group">
            <img 
              src={heroImage} 
              alt="Hero Artwork" 
              className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 group-hover:rotate-1"
              referrerPolicy="no-referrer"
            />
            
            {/* Glass Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 right-4 md:right-10 text-left">
              <div className="flex items-center gap-3 mb-2 md:mb-4">
                <div className="h-px w-6 md:w-8 bg-brand" />
                <p className="text-[8px] md:text-[10px] font-mono text-brand uppercase tracking-[0.3em] md:tracking-[0.5em] font-black">
                  {persona === 'AI' ? 'Featured Project' : 'Environment Art'}
                </p>
              </div>
              <h3 className="font-display font-black text-xl md:text-5xl uppercase tracking-tighter leading-tight group-hover:text-brand transition-colors duration-500">
                {persona === 'AI' ? 'AI Factory' : "Drug Lord's Base"}
              </h3>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => {
           const nextSection = document.getElementById("portfolio");
           if (nextSection) {
             nextSection.scrollIntoView({ behavior: "smooth" });
           } else {
             navigate('/portfolio');
           }
        }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
