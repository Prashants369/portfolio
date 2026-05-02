import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { ArrowLeft, Calendar, User, Briefcase, ChevronRight, FileText, Layout, Box } from "lucide-react";
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
  
  // Merge base and variant data
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
      className="pt-32 pb-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <button 
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white group transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest">Back to Portfolio</span>
          </button>

          {/* Variant Switcher */}
          {baseProject.variants && baseProject.variants.length > 0 && (
            <div className="inline-flex p-1 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-xl sticky top-32 z-50 shadow-2xl">
              {baseProject.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVariantId(v.id)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeVariantId === v.id ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {v.id === 'environment' ? <Box size={14} /> : <FileText size={14} />}
                  {v.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeVariantId || 'base'}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Header */}
            <div className="mb-20">
              {project.category.toLowerCase().includes('design') || project.category.toLowerCase().includes('gdd') ? (
                /* GDD Document Style Hero */
                <div className="relative bg-[#fdfbf7] p-12 md:p-20 rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl">
                  {/* Paper texture overlay */}
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }}></div>
                  
                  {/* Folded Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 shadow-[-10px_10px_20px_rgba(0,0,0,0.05)] origin-top-right" style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}></div>
                  
                  {/* Staple Visual */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-1 bg-zinc-300/50 rounded-full shadow-inner"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-zinc-200 pb-8">
                      <div className="flex items-center gap-3 text-zinc-400">
                        <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center">
                          <FileText size={20} className="text-zinc-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-[0.3em] font-black">Project Archive</p>
                          <p className="text-[10px] font-mono uppercase text-zinc-400">Document No. {project.id.toUpperCase()}-X9</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-mono uppercase text-zinc-300 font-bold tracking-widest italic">Personal Project // Unpublished</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                      <div className="lg:col-span-8">
                        <h1 className="text-6xl md:text-8xl font-display font-black text-zinc-900 leading-none mb-8 tracking-tighter">
                          {project.title.split(':').map((part, i) => (
                            <span key={i} className={i === 1 ? "block text-brand text-4xl mt-4" : ""}>
                              {part.trim()}
                            </span>
                          ))}
                        </h1>
                        <p className="text-xl text-zinc-600 leading-relaxed font-sans max-w-2xl italic border-l-4 border-brand/20 pl-8 py-2 mb-12">
                          "{project.description}"
                        </p>

                        {/* Visual Preview on Document */}
                        <div className="relative w-full max-w-xl aspect-video rounded-2xl overflow-hidden border-8 border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-zinc-200 group-hover:scale-[1.02] mt-4 mb-12 lg:mb-0">
                           <img 
                              src={project.thumbnail} 
                              alt="GDD Preview" 
                              className="w-full h-full object-cover grayscale-[0.2] opacity-90"
                              referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-brand/5 mix-blend-overlay" />
                           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                              <p className="text-[8px] font-mono text-zinc-500 font-bold uppercase tracking-widest">Fig. 01 // REF_ARCHIVE</p>
                           </div>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-4 bg-zinc-50/50 p-8 rounded-2xl border border-zinc-100 space-y-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-start border-b border-zinc-200 pb-2 gap-4">
                            <span className="text-[10px] font-mono uppercase text-zinc-400 shrink-0 mt-0.5">Subject</span>
                            <span className="text-xs font-bold text-zinc-900 text-right leading-tight">{project.category}</span>
                          </div>
                          <div className="flex justify-between items-start border-b border-zinc-200 pb-2 gap-4">
                            <span className="text-[10px] font-mono uppercase text-zinc-400 shrink-0 mt-0.5">Phase</span>
                            <span className="text-xs font-bold text-zinc-900 text-right leading-tight">{project.year} Release</span>
                          </div>
                          <div className="flex justify-between items-start border-b border-zinc-200 pb-2 gap-4">
                            <span className="text-[10px] font-mono uppercase text-zinc-400 shrink-0 mt-0.5">Origin</span>
                            <span className="text-xs font-bold text-zinc-900 text-right leading-tight">Personal // {project.role}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map(tool => (
                            <span key={tool} className="text-[9px] font-mono px-3 py-1 bg-white border border-zinc-200 text-zinc-500 rounded-full uppercase tracking-tighter font-bold">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* GDD Watermark in Background */}
                    <div className="absolute bottom-10 right-10 opacity-[0.03] select-none pointer-events-none rotate-12">
                       <span className="text-[20rem] font-display font-black text-zinc-950 leading-none">DOC</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Standard Header */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-8">
                    <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-8 tracking-tighter">
                      {project.title.split(' ').map((word, i) => (
                        <span key={i} className={i === project.title.split(' ').length - 1 ? "text-brand" : ""}>
                          {word}{" "}
                        </span>
                      ))}
                    </h1>
                    <p className="text-xl text-zinc-400 leading-relaxed font-sans max-w-2xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 space-y-8 glass p-8 rounded-2xl border-white/5 h-fit">
                    <div className="flex items-center gap-4">
                      <Calendar className="text-brand" size={18} />
                      <div>
                        <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Year</p>
                        <p className="font-bold">{project.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <User className="text-brand" size={18} />
                      <div>
                        <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Role</p>
                        <p className="font-bold">{project.role || "Lead Artist"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Briefcase className="text-brand" size={18} />
                      <div>
                        <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">Client</p>
                        <p className="font-bold">{project.client || "Personal Project"}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest mb-3">Tools Used</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map(tool => (
                          <span key={tool} className="text-[10px] font-mono px-2 py-1 bg-zinc-900 border border-white/5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

        {/* Project Gallery Carousel */}
        <div className="mb-20 space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-500">Visual Artifacts</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  const el = document.getElementById('project-carousel');
                  if (el) el.scrollBy({ left: -window.innerWidth * 0.6, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-black transition-all"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('project-carousel');
                  if (el) el.scrollBy({ left: window.innerWidth * 0.6, behavior: 'smooth' });
                }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-black transition-all"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div 
            id="project-carousel"
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {project.gallery?.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex-none w-[85vw] md:w-[60vw] lg:w-[50vw] aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl snap-center group bg-zinc-900"
              >
                <img 
                  src={img} 
                  alt={`Final Render ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Project <br />Breakdown.</h2>
            <div className="w-12 h-1 bg-brand" />
          </div>
          <div className="lg:col-span-8">
             <div className="prose prose-invert max-w-none">
                {project.longDescription?.split('\n\n').map((para, i) => (
                  <p key={i} className="text-zinc-400 text-lg leading-relaxed mb-6">
                    {para}
                  </p>
                ))}
             </div>
          </div>
        </div>

        {/* Storyboard & System Sections */}
        {project.sections && project.sections.length > 0 && (
          <div className="space-y-40 mb-32">
            {project.sections.map((section, sIndex) => {
              const hasImages = section.images && section.images.length > 0;
              
              return (
                <div key={sIndex} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                  <div className={`lg:col-span-5 ${!hasImages ? 'lg:col-span-12' : 'sticky top-32'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-10 h-[1px] bg-brand" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand font-bold">
                        Phase {String(sIndex + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tight leading-tight mb-8">
                      {section.title}
                    </h3>
                    {section.description && (
                      <div className={`prose prose-invert max-w-none ${!hasImages ? 'grid grid-cols-1 md:grid-cols-2 gap-12' : ''}`}>
                        {section.description.split('\n\n').map((para, pIndex) => (
                          <p key={pIndex} className="text-zinc-400 text-lg leading-relaxed font-sans">
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  {hasImages && (
                    <div className="lg:col-span-7 space-y-12">
                      {section.images.map((img, i) => (
                        <motion.div 
                          key={i} 
                          whileInView={{ opacity: 1, y: 0, scale: 1 }}
                          initial={{ opacity: 0, y: 40, scale: 0.95 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="rounded-3xl overflow-hidden border border-white/5 group bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-8">
                            <p className="text-white font-mono text-xs uppercase tracking-widest">{section.title} Artifact {i + 1}</p>
                          </div>
                          <img 
                            src={img} 
                            alt={`${section.title} ${i}`} 
                            className="w-full aspect-[16/10] object-cover transition-transform group-hover:scale-105 duration-1000" 
                            referrerPolicy="no-referrer"
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

        {/* Next Project Footer */}
        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 group/next">
          <div>
            <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-widest mb-2">Next Artifact</p>
            <h4 className="text-4xl font-display font-black uppercase group-hover/next:text-brand transition-colors">
              {nextProject.title}
            </h4>
          </div>
          <button 
            onClick={() => navigate(`/project/${nextProject.id}`)}
            className="w-20 h-20 rounded-full glass border-brand/20 flex items-center justify-center hover:bg-brand hover:text-black transition-all group-hover/next:scale-110 bg-transparent cursor-pointer"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</motion.div>
);
}
