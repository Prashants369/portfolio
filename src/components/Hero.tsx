import { motion } from "motion/react";
import { ChevronDown, Gamepad2, Bot, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePersona } from "../context/PersonaContext";

export default function Hero() {
  const { persona, setPersona } = usePersona();
  const navigate = useNavigate();

  if (persona === 'BOTH') {
    return (
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl w-full space-y-8">
          {/* Intro text */}
          <div className="text-center space-y-4 mb-4">
            <p className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.3em]">prashant.s // Portfolio</p>
            <h1 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">
              Choose Your <span className="text-brand">Path</span>
            </h1>
            <p className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto">Two disciplines, one developer. Explore my work in 3D environment design or AI engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* 3D Side */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/5 bg-zinc-900/50 flex flex-col items-center justify-center p-8 md:p-12 text-center cursor-pointer transition-all hover:border-brand/30 min-h-[250px] md:min-h-[400px]"
              onClick={() => setPersona('3D')}
            >
              <div className="absolute inset-0 bg-[url('/projects/druglordsbase/final-renders/HighresScreenshot00002.png')] bg-cover bg-center opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center mx-auto text-brand">
                  <Gamepad2 size={28} />
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter leading-none">3D & Game<br/>Design</h2>
                <p className="text-zinc-400 max-w-xs mx-auto text-xs md:text-sm leading-relaxed">
                  UE5 environments, PCG systems, and technical art.
                </p>
                <div className="flex items-center justify-center gap-2 text-brand font-bold uppercase text-[10px] md:text-xs tracking-widest pt-2">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>

            {/* AI Side */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] border border-white/5 bg-zinc-900/50 flex flex-col items-center justify-center p-8 md:p-12 text-center cursor-pointer transition-all hover:border-ai-brand/30 min-h-[250px] md:min-h-[400px]"
              onClick={() => setPersona('AI')}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative z-10 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-ai-brand/20 flex items-center justify-center mx-auto text-ai-brand">
                  <Bot size={28} />
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter leading-none">AI &<br/>Web Dev</h2>
                <p className="text-zinc-400 max-w-xs mx-auto text-xs md:text-sm leading-relaxed">
                  Automation pipelines, full-stack apps, and AI tools.
                </p>
                <div className="flex items-center justify-center gap-2 text-ai-brand font-bold uppercase text-[10px] md:text-xs tracking-widest pt-2">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

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
            {persona === '3D' ? 'CREATIVE' : 'AI ENGINE'}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-6 relative z-20"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full glass border-brand/20 w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
              prashant.s // {persona === '3D' ? 'Environment Design' : 'AI Engineering'}
            </span>
          </div>
          
          <div className="relative">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-display font-black leading-[0.9] tracking-tighter uppercase">
              {persona === '3D' ? (
                <>PROCEDURAL<br /><span className="text-brand text-glow">ENVIRONMENTS</span></>
              ) : (
                <>AUTONOMOUS<br /><span className="text-brand text-glow">AGENTS</span></>
              )}
            </h1>
            <div className="absolute -left-4 top-0 w-1 h-full bg-brand/20 hidden lg:block" />
          </div>
          
          <p className="text-sm md:text-lg text-zinc-400 max-w-xl leading-relaxed font-sans border-l-2 border-white/5 pl-4 md:pl-6">
            {persona === '3D' ? (
              <>Environment Artist & Game Designer specializing in <span className="text-white font-bold">Unreal Engine 5</span> world-building and procedural ecosystems.</>
            ) : (
              <>Developer building <span className="text-white font-bold">AI automations</span>, full-stack web apps, and generative AI tools.</>
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-6 mt-2">
            <button 
              onClick={() => navigate('/portfolio')}
              className="group relative px-6 md:px-10 py-4 bg-brand text-black font-black rounded-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_rgba(242,125,38,0.3)] text-sm cursor-pointer"
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
          <div className="absolute -inset-2 md:-inset-4 border border-brand/20 rounded-2xl md:rounded-[2.5rem] -rotate-3 pointer-events-none" />
          
          <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] group">
            <img 
              src={persona === '3D' ? "/projects/druglordsbase/final-renders/HighresScreenshot00000.png" : "/projects/ai-factory/factory_dashboard.png"} 
              alt="Hero Artwork" 
              className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100 group-hover:rotate-1"
              referrerPolicy="no-referrer"
            />
            
            {/* Glass Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
            
            <div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 right-4 md:right-10">
              <div className="flex items-center gap-3 mb-2 md:mb-4">
                <div className="h-px w-6 md:w-8 bg-brand" />
                <p className="text-[8px] md:text-[10px] font-mono text-brand uppercase tracking-[0.3em] md:tracking-[0.5em] font-black">
                  {persona === '3D' ? 'Featured Project' : 'AI Dashboard'}
                </p>
              </div>
              <h3 className="font-display font-black text-xl md:text-5xl uppercase tracking-tighter leading-tight group-hover:text-brand transition-colors duration-500">
                {persona === '3D' ? "Drug Lord's Base" : 'AI Factory'}
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
           if (location.pathname === '/') {
             document.getElementById("lab")?.scrollIntoView({ behavior: "smooth" });
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
