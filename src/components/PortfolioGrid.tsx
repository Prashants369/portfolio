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

  const projects3D = filteredProjects.filter(p => p.persona === '3D');
  const projectsAI = filteredProjects.filter(p => p.persona === 'AI');

  const renderProjectCard = (project: Project, idx: number) => {
    const isGDD = project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('gdd');

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        key={project.id}
      >
        <div 
          onClick={() => navigate(`/project/${project.id}`)}
          onKeyDown={(e) => e.key === 'Enter' && navigate(`/project/${project.id}`)}
          role="link"
          tabIndex={0}
          className="group block cursor-pointer"
        >
          <div className={`relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] mb-6 md:mb-8 bg-zinc-900 border border-white/5 transition-all duration-500 group-hover:border-brand/20 ${project.persona === '3D' ? 'group-hover:shadow-[0_20px_50px_rgba(242,125,38,0.1)]' : 'group-hover:shadow-[0_20px_50px_rgba(0,242,255,0.1)]'}`}>
            
            {isGDD ? (
              /* GDD Document Style Thumbnail */
              <div className="absolute inset-0 bg-[#fdfbf7] p-6 md:p-12 flex flex-col group-hover:scale-105 transition-transform duration-1000">
                {/* Paper texture overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}></div>
                
                {/* Folded Corner Effect */}
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-zinc-100 shadow-[-5px_5px_15px_rgba(0,0,0,0.05)] origin-top-right transition-transform duration-500 group-hover:scale-110" style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}></div>
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#f0ede6] opacity-50" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}></div>

                {/* Document Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4 md:mb-8">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <FileText size={14} className="md:size-[16px]" />
                      <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em]">Personal Archive</span>
                    </div>
                    <span className="text-[8px] md:text-[10px] font-mono text-zinc-300">Personal // Unpublished</span>
                  </div>

                  <div className="flex gap-4 md:gap-8 items-start">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl md:text-4xl font-display font-black text-zinc-900 leading-none mb-4 md:mb-6 tracking-tighter truncate md:whitespace-normal">
                        {project.title.split(':')[0]}
                        <span className="block text-brand text-xs md:text-lg mt-1 md:mt-2 opacity-80">{project.title.split(':')[1]}</span>
                      </h3>

                      <div className="space-y-3 md:space-y-4">
                        <div className="h-1.5 md:h-2 w-3/4 bg-zinc-200/60 rounded"></div>
                        <div className="h-1.5 md:h-2 w-full bg-zinc-200/60 rounded"></div>
                        <div className="h-1.5 md:h-2 w-5/6 bg-zinc-200/60 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Preview on Document - Absolute position to overlap "in front" of paper */}
                  <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 w-28 md:w-64 aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden border-[4px] md:border-[10px] border-white shadow-2xl rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500 bg-zinc-200 z-20">
                    <img 
                      src={project.thumbnail} 
                      alt="Preview" 
                      className="w-full h-full object-cover opacity-95 grayscale-[0.1]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand/5 mix-blend-overlay" />
                  </div>

                  {/* Watermark */}
                  <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 opacity-[0.05] select-none pointer-events-none">
                    <span className="text-5xl md:text-8xl font-display font-black uppercase text-zinc-900 -rotate-12 block">GDD</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Standard Image Thumbnail */
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            )}
            
            {/* Overlay Gradient (Only for images) */}
            {!isGDD && <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />}

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full glass border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 ${project.persona === '3D' ? 'text-3d-brand' : 'text-ai-brand'}`}>
                <ArrowUpRight size={24} className="md:size-[32px]" />
              </div>
            </div>

            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex gap-2">
              <span className={`px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-mono font-black uppercase tracking-widest border backdrop-blur-md ${project.persona === '3D' ? 'bg-3d-brand/10 border-3d-brand/30 text-3d-brand' : 'bg-ai-brand/10 border-ai-brand/30 text-ai-brand'}`}>
                {project.category}
              </span>
            </div>
          </div>
          
          <div className="flex items-start justify-between gap-4 md:gap-6 px-2 md:px-4">
            <div className="space-y-2 md:space-y-3 min-w-0">
              <h4 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter group-hover:text-brand transition-colors truncate">
                {project.title}
              </h4>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.tools.slice(0, 3).map(tool => (
                  <span key={tool} className="text-[8px] md:text-[10px] font-mono text-zinc-600 uppercase tracking-widest border border-white/5 px-2 py-0.5 md:px-3 md:py-1 rounded-full whitespace-nowrap">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <span className={`font-display text-3xl md:text-5xl leading-none opacity-10 font-black italic transition-all group-hover:opacity-100 group-hover:translate-x-2 shrink-0 ${project.persona === '3D' ? 'text-3d-brand' : 'text-ai-brand'}`}>
              /{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
            </span>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20">
          <div>
            <h2 className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4 text-glow">
              {persona === '3D' ? 'Creative Works' : persona === 'AI' ? 'Personal Lab' : 'Portfolio'}
            </h2>
            <h3 className="text-4xl md:text-7xl font-display font-black leading-none uppercase">
              {persona === '3D' ? (
                <>VISUAL <br /><span className="text-brand">ARTIFACTS</span>.</>
              ) : persona === 'AI' ? (
                <>AI <br /><span className="text-brand">SOLUTIONS</span>.</>
              ) : (
                <>THE <br /><span className="text-brand">ARCHIVE</span>.</>
              )}
            </h3>
          </div>
          <p className="max-w-md text-zinc-400 text-sm md:text-lg font-sans leading-relaxed">
            {persona === '3D' ? (
              "A collection of high-fidelity environments and technical art experiments pushed to the limits of real-time rendering."
            ) : persona === 'AI' ? (
              "Personal research into autonomous systems, systemic AI automation, and optimized technical workflows."
            ) : (
              "The intersection of creative vision and technical engineering across multiple independent disciplines."
            )}
          </p>
        </div>

        {persona === 'BOTH' ? (
          <div className="space-y-24 md:space-y-32">
            {/* 3D Section */}
            <div className="space-y-8 md:space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-3d-brand/20"></div>
                <h3 className="text-lg md:text-2xl font-display font-black uppercase text-3d-brand tracking-widest px-2 md:px-4">
                  01. 3D & Game Development
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-3d-brand/20"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
                {projects3D.map((project, idx) => renderProjectCard(project, idx))}
              </div>
            </div>

            {/* AI Section */}
            <div className="space-y-8 md:space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-ai-brand/20"></div>
                <h3 className="text-lg md:text-2xl font-display font-black uppercase text-ai-brand tracking-widest px-2 md:px-4">
                  02. AI Engineering Lab
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-ai-brand/20"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
                {projectsAI.map((project, idx) => renderProjectCard(project, idx))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-20">
            {filteredProjects.map((project, idx) => renderProjectCard(project, idx))}
          </div>
        )}
      </div>
    </section>
  );
}
