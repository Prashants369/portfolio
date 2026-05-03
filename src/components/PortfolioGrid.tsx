import { motion } from "motion/react";
import { projects } from "../data";
import { ArrowUpRight, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePersona } from "../context/PersonaContext";
import { Project } from "../types";

export default function PortfolioGrid() {
  const { persona } = usePersona();
  const navigate = useNavigate();

  const filteredProjects = projects.filter(project => 
    persona === 'BOTH' ? true : project.persona === persona
  );

  const renderProjectCard = (project: Project, idx: number) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.08 }}
        key={project.id}
      >
        <div 
          onClick={() => navigate(`/project/${project.id}`)}
          onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.id}`)}
          role="link"
          tabIndex={0}
          className="group block cursor-pointer"
        >
          {/* Thumbnail */}
          <div className={`relative aspect-[16/10] overflow-hidden rounded-xl md:rounded-2xl mb-4 md:mb-6 bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-brand/20 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]`}>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Hover Icon */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full glass border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 text-brand">
                <ArrowUpRight size={22} />
              </div>
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4">
              <span className={`px-2.5 py-1 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md ${project.persona === '3D' ? 'bg-3d-brand/10 border-3d-brand/30 text-3d-brand' : 'bg-ai-brand/10 border-ai-brand/30 text-ai-brand'}`}>
                {project.persona === '3D' ? '3D / Game' : 'AI / Web'}
              </span>
            </div>
          </div>
          
          {/* Card Info */}
          <div className="space-y-1.5 px-1">
            <h4 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight group-hover:text-brand transition-colors leading-tight">
              {project.title}
            </h4>
            <p className="text-zinc-500 text-xs md:text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tools.slice(0, 3).map(tool => (
                <span key={tool} className="text-[8px] md:text-[9px] font-mono text-zinc-600 uppercase tracking-wider border border-white/5 px-2 py-0.5 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-10 md:mb-16">
          <div>
            <h2 className="text-zinc-500 font-mono text-xs uppercase tracking-[0.3em] mb-3">
              {persona === 'BOTH' ? 'All Projects' : persona === '3D' ? '3D & Game Projects' : 'AI & Web Projects'}
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-black leading-none uppercase">
              SELECTED <span className="text-brand">WORK</span>.
            </h3>
          </div>
          <p className="max-w-md text-zinc-400 text-sm font-sans leading-relaxed">
            {persona === 'BOTH' 
              ? "Personal projects spanning environment design, game systems, AI automation, and full-stack development."
              : persona === '3D'
              ? "UE5 environments, PCG systems, and technical art — from blockout to final render."
              : "AI automation tools, full-stack dashboards, and generative AI pipelines."
            }
          </p>
        </div>

        {/* Unified Grid — always the same layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, idx) => renderProjectCard(project, idx))}
        </div>
      </div>
    </section>
  );
}
