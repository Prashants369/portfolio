import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { ArrowLeft, Calendar, User, Briefcase, ChevronRight, ChevronLeft, FileText, Box } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const baseProject = projects.find((p) => p.id === id);
  
  const [activeVariantId, setActiveVariantId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (baseProject?.variants && baseProject.variants.length > 0) {
      setActiveVariantId(baseProject.variants[0].id);
    } else {
      setActiveVariantId(null);
    }
  }, [id, baseProject]);

  if (!baseProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-brand hover:underline bg-transparent border-none cursor-pointer"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const activeVariant = baseProject.variants?.find(v => v.id === activeVariantId);
  
  const project = {
    ...baseProject,
    ...(activeVariant ? {
      title: activeVariant.title,
      category: activeVariant.category,
      description: activeVariant.description,
      longDescription: activeVariant.longDescription || baseProject.longDescription,
      gallery: activeVariant.gallery || baseProject.gallery,
      sections: activeVariant.sections || baseProject.sections,
      tools: activeVariant.tools || baseProject.tools,
    } : {})
  };

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 md:pt-32 pb-24 md:pb-32 px-4 md:px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
          <button 
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white group transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back to Portfolio</span>
          </button>

          {/* Variant Switcher */}
          {baseProject.variants && baseProject.variants.length > 0 && (
            <div className="inline-flex p-1 bg-zinc-900/50 rounded-xl border border-white/5 backdrop-blur-xl">
              {baseProject.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVariantId(v.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${activeVariantId === v.id ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {v.id === 'environment' ? <Box size={12} /> : <FileText size={12} />}
                  {v.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeVariantId || 'base'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border ${baseProject.persona === '3D' ? 'bg-3d-brand/10 border-3d-brand/30 text-3d-brand' : 'bg-ai-brand/10 border-ai-brand/30 text-ai-brand'}`}>
                      {project.category}
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-black leading-none mb-4 md:mb-6 tracking-tighter uppercase">
                    {project.title}
                  </h1>
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl">
                    {project.description}
                  </p>
                </div>

                <div className="lg:col-span-4 glass p-6 md:p-8 rounded-xl md:rounded-2xl border-white/5 h-fit space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-brand shrink-0" size={16} />
                    <div>
                      <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Year</p>
                      <p className="font-bold text-sm">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="text-brand shrink-0" size={16} />
                    <div>
                      <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Role</p>
                      <p className="font-bold text-sm">{project.role || "Developer"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-brand shrink-0" size={16} />
                    <div>
                      <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Type</p>
                      <p className="font-bold text-sm">Personal Project</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/5">
                    <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-2">Tools</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map(tool => (
                        <span key={tool} className="text-[9px] font-mono px-2 py-1 bg-zinc-900 border border-white/5 rounded text-zinc-400">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Carousel */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="mb-12 md:mb-16 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">Gallery</h3>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        const el = document.getElementById('project-carousel');
                        if (el) el.scrollBy({ left: -window.innerWidth * 0.5, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-black transition-all"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('project-carousel');
                        if (el) el.scrollBy({ left: window.innerWidth * 0.5, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-black transition-all"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
                
                <div 
                  id="project-carousel"
                  className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {project.gallery?.map((img, i) => (
                    <div 
                      key={i}
                      className="flex-none w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[40vw] aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/5 shadow-xl snap-center group bg-zinc-900"
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} ${i + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About */}
            {project.longDescription && (
              <div className="mb-12 md:mb-16">
                <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight mb-4">About This Project</h2>
                <div className="w-10 h-0.5 bg-brand mb-6" />
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl">
                  {project.longDescription}
                </p>
              </div>
            )}

            {/* Sections */}
            {project.sections && project.sections.length > 0 && (
              <div className="space-y-16 md:space-y-24 mb-16 md:mb-24">
                {project.sections.map((section, sIndex) => {
                  const hasImages = section.images && section.images.length > 0;
                  
                  return (
                    <div key={sIndex}>
                      {/* Section Header */}
                      <div className="mb-6 md:mb-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand font-bold">
                            {String(sIndex + 1).padStart(2, '0')}
                          </span>
                          <div className="h-px flex-1 bg-white/5" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold uppercase tracking-tight mb-3">
                          {section.title}
                        </h3>
                        {section.description && (
                          <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                            {section.description.split('\n\n')[0]}
                          </p>
                        )}
                      </div>

                      {/* Section Images */}
                      {hasImages && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.images.map((img, i) => (
                            <motion.div 
                              key={i} 
                              whileInView={{ opacity: 1, y: 0 }}
                              initial={{ opacity: 0, y: 20 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              className="rounded-xl overflow-hidden border border-white/5 group bg-zinc-900"
                            >
                              <img 
                                src={img} 
                                alt={`${section.title} ${i + 1}`} 
                                className="w-full aspect-video object-cover transition-transform group-hover:scale-105 duration-500" 
                                referrerPolicy="no-referrer"
                                loading="lazy"
                              />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Next Project */}
            <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 group/next">
              <div>
                <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Next Project</p>
                <h4 className="text-2xl md:text-3xl font-display font-black uppercase group-hover/next:text-brand transition-colors">
                  {nextProject.title}
                </h4>
              </div>
              <button 
                onClick={() => navigate(`/project/${nextProject.id}`)}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full glass border-brand/20 flex items-center justify-center hover:bg-brand hover:text-black transition-all group-hover/next:scale-110 bg-transparent cursor-pointer shrink-0"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
