import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import PortfolioGrid from "../components/PortfolioGrid";
import { motion } from "motion/react";
import { Sparkles, Gamepad2, Layers, Cpu, Terminal, Bot, FlaskConical, Activity } from "lucide-react";
import { usePersona } from "../context/PersonaContext";
import LiveTelemetry from "../components/lab/LiveTelemetry";
import ProceduralGraph from "../components/lab/ProceduralGraph";

export default function HomePage() {
  const { persona } = usePersona();

  return (
    <>
      <Hero />
      
      {/* Intro Section - Show summaries in BOTH mode, show detailed highlights in single mode */}
      <section className="py-24 px-6 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          {persona === 'BOTH' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-3d-brand">
                  <Gamepad2 size={32} />
                  <h2 className="text-3xl font-display font-bold">THE CREATIVE UNIVERSE</h2>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Deep immersion into Unreal Engine 5.7 development. Specialized in high-fidelity environment design, 
                  PCG frameworks, and cinematic technical art. Building the next generation of digital worlds with 
                  Lumen, Nanite, and advanced procedural ecosystems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UE 5.7", "PCG Framework", "Gaea", "Tech Art", "Level Design"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-3d-brand/10 border border-3d-brand/20 rounded-full text-xs text-3d-brand/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-ai-brand">
                  <Cpu size={32} />
                  <h2 className="text-3xl font-display font-bold">THE RESEARCH ARCHIVE</h2>
                </div>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Architecting autonomous intelligence. Focused on systemic AI orchestration, automated pipelines, 
                  and full-stack engineering. Leveraging LLMs, LangChain, and Python to build scalable, 
                  intelligent solutions for complex modern problems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI Systems", "Automation", "Next.js", "Python", "LLMs"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-ai-brand/10 border border-ai-brand/20 rounded-full text-xs text-ai-brand/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {persona === '3D' ? (
                <>
                  <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
                    <Gamepad2 className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-display font-bold uppercase">Unreal Engine 5.7</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Mastering Lumen, Nanite, and modular environment systems to build high-fidelity, interactive digital worlds.
                    </p>
                  </div>
                  <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
                    <Layers className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-display font-bold uppercase">Procedural Content</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Implementing PCG Graphs and Gaea terrain systems to create vast, optimized ecosystems with organic complexity.
                    </p>
                  </div>
                  <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
                    <Sparkles className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-display font-bold uppercase">Technical Art</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Crafting atmospheric depth through custom shaders and motion matching to drive narrative immersion.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
                    <Bot className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-display font-bold uppercase">Autonomous Systems</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Designing robust AI architectures that coordinate complex tasks using the Soros framework.
                    </p>
                  </div>
                  <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
                    <Cpu className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-display font-bold uppercase">AI Automation</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Building automated pipelines for content generation, social media management, and business intelligence.
                    </p>
                  </div>
                  <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
                    <Terminal className="text-brand mb-4" size={32} />
                    <h3 className="text-2xl font-display font-bold uppercase">Full-Stack Development</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Developing high-performance Next.js dashboards and Python backends integrated with LLM APIs for personal toolkits.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Integration */}
      <PortfolioGrid />

      {/* Lab Section */}
      <section id="lab" className="py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 text-brand font-mono text-xs uppercase tracking-[0.3em] mb-4">
                <FlaskConical size={14} />
                <span>The Experimental Archive</span>
              </div>
              <h3 className="text-5xl md:text-7xl font-display font-black leading-none uppercase">
                ACTIVE <span className="text-brand">RESEARCH</span>.
              </h3>
            </div>
            <p className="max-w-md text-zinc-500 font-sans text-sm leading-relaxed">
              Real-time telemetry and procedural visualizations from ongoing internal research projects. 
              Bridging the gap between active development and finished artifacts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              {persona === 'AI' || persona === 'BOTH' ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-4 py-2 bg-ai-brand/5 border border-ai-brand/20 rounded-full w-fit">
                    <Activity size={12} className="text-ai-brand animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-ai-brand uppercase tracking-widest">Active System Telemetry</span>
                  </div>
                  <div className="p-12 glass rounded-[2rem] border-white/5 flex items-center justify-center text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em] min-h-[200px]">
                    Neural Core Synchronization Active...
                  </div>
                </div>
              ) : null}
              
              {persona === '3D' || persona === 'BOTH' ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 px-4 py-2 bg-3d-brand/5 border border-3d-brand/20 rounded-full w-fit">
                    <Sparkles size={12} className="text-3d-brand" />
                    <span className="text-[10px] font-mono font-bold text-3d-brand uppercase tracking-widest">Procedural Pipeline Visualization</span>
                  </div>
                  <ProceduralGraph />
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-4">
              <LiveTelemetry />
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
