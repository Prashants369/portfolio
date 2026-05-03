import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import PortfolioGrid from "../components/PortfolioGrid";
import { Gamepad2, Cpu, Bot, Terminal, Sparkles } from "lucide-react";
import { usePersona } from "../context/PersonaContext";

export default function HomePage() {
  const { persona } = usePersona();

  return (
    <>
      <Hero />
      
      {/* Intro Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto">
          {persona === 'BOTH' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-3d-brand">
                  <Gamepad2 size={28} />
                  <h2 className="text-2xl md:text-3xl font-display font-bold">3D & GAME DESIGN</h2>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Building immersive environments in Unreal Engine 5 using PCG frameworks,
                  Lumen GI, and modular building kits. Focused on technical art and level design.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UE 5", "PCG", "Gaea", "Tech Art", "Level Design"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-3d-brand/10 border border-3d-brand/20 rounded-full text-xs text-3d-brand/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-ai-brand">
                  <Cpu size={28} />
                  <h2 className="text-2xl md:text-3xl font-display font-bold">AI & WEB DEV</h2>
                </div>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  Building automated pipelines and full-stack web apps with Next.js, FastAPI,
                  and LLM integration. Focused on practical AI tools and workflow automation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI Tools", "Automation", "Next.js", "Python", "LLMs"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-ai-brand/10 border border-ai-brand/20 rounded-full text-xs text-ai-brand/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              {persona === '3D' ? (
                <>
                  <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5 space-y-3">
                    <Gamepad2 className="text-brand" size={28} />
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase">Unreal Engine 5</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Building environments with Lumen, Nanite, and modular systems for high-fidelity real-time worlds.
                    </p>
                  </div>
                  <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5 space-y-3">
                    <Sparkles className="text-brand" size={28} />
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase">PCG Systems</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Using PCG Graphs and Gaea terrain to create vast, optimized ecosystems with organic complexity.
                    </p>
                  </div>
                  <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5 space-y-3">
                    <Gamepad2 className="text-brand" size={28} />
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase">Game Design</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Writing detailed GDDs with tactical gameplay loops, AI behavior systems, and narrative design.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5 space-y-3">
                    <Bot className="text-brand" size={28} />
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase">AI Automation</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Building automated pipelines for content research, image generation, and trend analysis.
                    </p>
                  </div>
                  <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5 space-y-3">
                    <Cpu className="text-brand" size={28} />
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase">Generative AI</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Integrating LLMs, ComfyUI, and Stable Diffusion into practical tools with real outputs.
                    </p>
                  </div>
                  <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border-white/5 space-y-3">
                    <Terminal className="text-brand" size={28} />
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase">Full Stack</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Developing React/Next.js frontends and Python/FastAPI backends with database integration.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Portfolio */}
      <PortfolioGrid />

      <ContactSection />
    </>
  );
}
