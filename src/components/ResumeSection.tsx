import { motion } from "motion/react";
import { experiences, skills, SOCIAL_LINKS } from "../data";
import { Download, Briefcase, GraduationCap, Code, Cpu, Gamepad2, Sparkles, Layers, Terminal, Zap, Bot, Mail, MapPin, Globe, Languages, Linkedin, Github, Copy, Check } from "lucide-react";
import { usePersona } from "../context/PersonaContext";
import { useState } from "react";

export default function ResumeSection() {
  const { persona, setPersona } = usePersona();
  const [copied, setCopied] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Game Engines": return <Gamepad2 size={16} className="text-brand" />;
      case "Environment & 3D Art": return <Layers size={16} className="text-brand" />;
      case "Programming & Logic": return <Code size={16} className="text-brand" />;
      case "AI & Modern Workflows": return <Cpu size={16} className="text-brand" />;
      case "AI & Automation": return <Bot size={16} className="text-brand" />;
      case "Full Stack Web": return <Terminal size={16} className="text-brand" />;
      default: return <Code size={16} className="text-brand" />;
    }
  };

  const filteredExperiences = experiences.filter(exp =>
    persona === 'BOTH' ? true : (exp.persona === persona || exp.persona === 'BOTH')
  );

  const filteredSkills = skills.filter(skill =>
    persona === 'BOTH' ? true : (skill.persona === persona || skill.persona === 'BOTH')
  );

  const copyAsText = () => {
    const text = `
PRASHANT SAGATHIYA
${persona === '3D' ? 'Environment Artist & Game Designer' : persona === 'AI' ? 'AI Systems Architect' : 'Creative Technologist'}
${SOCIAL_LINKS.email} | ${SOCIAL_LINKS.linkedin}
Junagadh, Rajkot, Gujarat

SUMMARY
${persona === '3D' 
  ? "Dynamic Game Designer & Environment Artist specialized in high-fidelity world-building and systemic gameplay. Expert in authoring comprehensive Game Design Documents (GDD) and architecting procedural ecosystems in Unreal Engine 5."
  : persona === 'AI'
  ? "Systems Architect focused on autonomous multi-agent orchestration and Text Generation AI. Engineering production-ready AI factories and LLM-powered reasoning engines."
  : "Creative technologist operating at the intersection of high-fidelity 3D visualization and autonomous AI systems."
}

EXPERIENCE
${filteredExperiences.map(exp => `
${exp.role} @ ${exp.company}
${exp.period}
${exp.description.map(d => `- ${d}`).join('\n')}
`).join('\n')}

SKILLS
${filteredSkills.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

EDUCATION
BCA // Computer Applications
Christ College, Rajkot (Graduating 2026)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="resume-container">
      {/* SCREEN VIEW */}
      <section id="resume" className="py-20 px-6 bg-zinc-950/50 min-h-screen print:hidden">
        <div className="max-w-5xl mx-auto">
          
          {/* Digital/Print Toggle & Persona Switcher */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <div className="inline-flex p-1 bg-zinc-900/50 rounded-2xl border border-white/5 backdrop-blur-xl">
              <button
                onClick={() => setPersona('3D')}
                className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${persona === '3D' ? 'bg-3d-brand text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Game Design
              </button>
              <button
                onClick={() => setPersona('BOTH')}
                className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${persona === 'BOTH' ? 'bg-brand text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                Full Stack
              </button>
              <button
                onClick={() => setPersona('AI')}
                className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${persona === 'AI' ? 'bg-ai-brand text-black shadow-lg shadow-ai-brand/20' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                AI
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={copyAsText}
                className="flex items-center gap-3 px-6 py-3 bg-zinc-900/50 hover:bg-zinc-800 transition-all rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] border border-white/5 group cursor-pointer"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-zinc-500 group-hover:text-brand" />}
                <span>{copied ? 'Copied!' : 'Copy as Text'}</span>
              </button>

              <button 
                onClick={() => window.print()}
                className="flex items-center gap-3 px-8 py-3 glass hover:bg-white/5 transition-all rounded-xl font-bold uppercase text-[10px] tracking-[0.2em] border-white/10 group cursor-pointer"
              >
                <Download size={16} className="text-brand animate-pulse" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* RESUME START */}
          <div className="bg-zinc-900/30 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
            
            {/* Top Header */}
            <div className={`p-12 md:p-20 border-b border-white/5 relative overflow-hidden ${persona === '3D' ? 'bg-3d-brand/5' : persona === 'AI' ? 'bg-ai-brand/5' : 'bg-brand/5'}`}>
               <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                 <div>
                   <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-none mb-4">
                     Prashant <br />
                     <span className="text-brand">Sagathiya</span>.
                   </h1>
                   <div className="flex flex-wrap gap-4 items-center mt-6">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-black uppercase tracking-widest border backdrop-blur-md ${persona === '3D' ? 'bg-3d-brand/10 border-3d-brand/30 text-3d-brand' : persona === 'AI' ? 'bg-ai-brand/10 border-ai-brand/30 text-ai-brand' : 'bg-brand/10 border-brand/30 text-brand'}`}>
                        {persona === '3D' ? 'Environment Artist & Game Designer' : persona === 'AI' ? 'AI Systems Architect' : 'Creative Technologist'}
                      </span>
                      <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                        <MapPin size={12} /> Junagadh, Rajkot, Gujarat
                      </div>
                   </div>
                 </div>

                 <div className="space-y-4 text-left md:text-right">
                    <div className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center md:justify-end gap-3 hover:text-brand transition-colors group">
                        {SOCIAL_LINKS.email} <Mail size={14} className="text-zinc-600 group-hover:text-brand shrink-0" />
                      </a>
                      <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-3 hover:text-brand transition-colors group">
                        LinkedIn Profile <Linkedin size={14} className="text-zinc-600 group-hover:text-brand shrink-0" />
                      </a>
                      <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-3 hover:text-brand transition-colors group">
                        GitHub Archive <Github size={14} className="text-zinc-600 group-hover:text-brand shrink-0" />
                      </a>
                    </div>
                 </div>
               </div>
               
               {/* Background noise/decor */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2 opacity-50" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Sidebar */}
              <div className="lg:col-span-4 border-r border-white/5 p-12 space-y-16">
                
                {/* Summary */}
                <div className="space-y-6">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] font-black text-zinc-500">Summary</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                    {persona === '3D' 
                      ? "Dynamic Game Designer & Environment Artist specialized in high-fidelity world-building and systemic gameplay. Expert in authoring comprehensive Game Design Documents (GDD) and architecting procedural ecosystems in Unreal Engine 5. Focused on narrative-driven tactical experiences and technical art workflows."
                      : persona === 'AI'
                      ? "Systems Architect focused on autonomous multi-agent orchestration and Text Generation AI. Engineering production-ready AI factories and LLM-powered reasoning engines for automated content and decision systems."
                      : "Creative technologist operating at the intersection of high-fidelity 3D visualization and autonomous AI systems. Bridging generative logic and cinematic aesthetics."
                    }
                  </p>
                </div>

                {/* Skills Area */}
                <div className="space-y-12">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] font-black text-zinc-500">Competencies</h4>
                  <div className="space-y-10">
                    {filteredSkills.map((skillGroup) => (
                      <div key={skillGroup.category} className="space-y-4">
                        <div className="flex items-center gap-3">
                          {getCategoryIcon(skillGroup.category)}
                          <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold text-zinc-300">
                            {skillGroup.category}
                          </h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] text-zinc-400 border border-white/5 uppercase tracking-tighter">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-10">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] font-black text-zinc-500">Education</h4>
                  <div className="relative pl-6 border-l border-brand/20 space-y-2">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-brand" />
                    <h5 className="text-xl font-display font-bold uppercase tracking-tight text-white">BCA // Computer Applications</h5>
                    <p className="text-xs font-mono text-brand/80">Christ College, Rajkot</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2 font-mono bg-white/5 w-fit px-3 py-1 rounded-full">Graduating 2026</p>
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-10">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] font-black text-zinc-500">Languages</h4>
                  <div className="grid grid-cols-1 gap-6">
                     {[
                       { name: "English", level: "Intermediate", percent: "65%" },
                       { name: "Gujarati", level: "Native", percent: "100%" },
                       { name: "Hindi", level: "Fluent", percent: "90%" }
                     ].map((lang) => (
                       <div key={lang.name} className="space-y-2">
                         <div className="flex items-center justify-between">
                           <span className="text-xs font-mono font-bold text-zinc-300 uppercase tracking-widest">{lang.name}</span>
                           <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">{lang.level}</span>
                         </div>
                         <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: lang.percent }}
                             transition={{ duration: 1, ease: "easeOut" }}
                             className="h-full bg-brand/30" 
                           />
                         </div>
                       </div>
                     ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Experience */}
              <div className="lg:col-span-8 p-12 md:p-20 space-y-20">
                
                <div className="space-y-12">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] font-black text-zinc-500">Project Experience</h4>
                  <div className="space-y-20">
                    {filteredExperiences.map((exp) => (
                      <div key={exp.id} className="relative pl-0 group">
                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
                          <div>
                            <h5 className="text-4xl font-display font-black uppercase tracking-tight group-hover:text-brand transition-colors">{exp.role}</h5>
                            <p className="text-sm font-mono mt-1 text-zinc-400 uppercase tracking-widest">{exp.company}</p>
                          </div>
                          <span className="text-[10px] font-mono text-zinc-600 border border-white/5 px-3 py-1 rounded-full whitespace-nowrap">{exp.period}</span>
                        </div>
                        
                        <ul className="space-y-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-zinc-400 text-sm leading-relaxed flex items-start gap-4 group/item">
                              <span className="mt-2 w-1.5 h-px bg-brand/30 group-hover/item:w-4 transition-all flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lab Projects Summary - Compact */}
                <div className="pt-20 border-t border-white/5 space-y-12">
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] font-black text-zinc-500">Technical Impact</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <h6 className="text-brand font-mono text-[10px] uppercase tracking-widest mb-2 font-black">Procedural Ecosystems</h6>
                      <p className="text-zinc-400 text-xs leading-relaxed">Architected PCG jungle density workflows reducing world-building time by 70% in UE5.</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <h6 className="text-brand font-mono text-[10px] uppercase tracking-widest mb-2 font-black">AI & Text Generation</h6>
                      <p className="text-zinc-400 text-xs leading-relaxed">Developed autonomous multi-agent swarms using Text Generation AI (LLMs) for 100% automated presence.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINT VIEW ONLY */}
      <div className="hidden print:block font-sans text-black bg-white w-full selection:bg-brand/20">
        
        {/* Premium Header */}
        <div className="flex justify-between items-start border-b-2 border-black pb-8 mb-10">
          <div className="space-y-2">
            <h1 className="text-5xl font-black uppercase tracking-tighter text-black leading-none">Prashant Sagathiya</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest">
                {persona === '3D' ? 'Environment Artist & Game Designer' : persona === 'AI' ? 'AI Systems Architect' : 'Creative Technologist'}
              </span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest italic">Portfolio Resume 2026</span>
            </div>
          </div>
          <div className="text-right space-y-1">
            <div className="text-xs font-black uppercase tracking-widest text-black flex items-center justify-end gap-2">
              {SOCIAL_LINKS.email} <Mail size={12} />
            </div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-end gap-2">
              Junagadh, Rajkot, Gujarat <MapPin size={10} />
            </div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center justify-end gap-2">
              linkedin.com/in/prashant-sagathiya <Linkedin size={10} />
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-12">
          <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4 text-zinc-400 border-l-4 border-black pl-4">Objective & Summary</h3>
          <p className="text-[11px] leading-relaxed text-zinc-800 font-medium max-w-4xl text-justify">
            {persona === '3D' 
              ? "Forward-thinking Game Designer & Environment Artist with a focus on high-fidelity world-building and systemic gameplay logic. Expert in authoring detailed Game Design Documents (GDD) and architecting complex procedural ecosystems in Unreal Engine 5. Dedicated to creating immersive, narrative-driven experiences through a blend of technical art and tactical design."
              : persona === 'AI'
              ? "AI Systems Architect specializing in autonomous multi-agent orchestration and Text Generation AI. Experienced in engineering production-ready AI factories and LLM-powered reasoning engines for automated content and decision systems. Focused on the intersection of generative logic and scalable system architecture."
              : "Versatile Creative Technologist operating at the intersection of high-fidelity 3D visualization and autonomous AI systems. Bridging the gap between generative logic and cinematic aesthetics to deliver cutting-edge digital experiences."
            }
          </p>
        </div>

        <div className="grid grid-cols-12 gap-12">
          
          {/* Left Column - Skills, Education, Languages */}
          <div className="col-span-4 space-y-12">
            
            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 border-l-4 border-black pl-4 mb-6">Expertise</h3>
              <div className="space-y-4">
                {filteredSkills.map((skillGroup) => (
                  <div key={skillGroup.category} className="break-inside-avoid mb-4">
                    <h4 className="font-black text-[9px] text-black uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black" /> {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5 pl-3.5">
                      {skillGroup.items.map(skill => (
                        <span key={skill} className="px-2 py-0.5 border border-zinc-200 bg-zinc-50 text-black text-[9px] font-bold uppercase tracking-tight rounded-sm whitespace-nowrap">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 break-inside-avoid">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 border-l-4 border-black pl-4 mb-6">Education</h3>
              <div className="pl-4 relative border-l border-zinc-100">
                <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-black" />
                <h4 className="font-black text-[11px] text-black uppercase tracking-tight">BCA // Computer Applications</h4>
                <div className="text-[10px] text-zinc-800 font-bold uppercase tracking-wider mt-1">Christ College, Rajkot</div>
                <div className="text-[9px] text-zinc-400 mt-1 uppercase tracking-widest font-black">2023 — 2026</div>
              </div>
            </div>

            <div className="space-y-6 break-inside-avoid-page">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 border-l-4 border-black pl-4 mb-6">Communication</h3>
              <div className="space-y-3 pl-4">
                {[
                  { name: "English", level: "Intermediate" },
                  { name: "Gujarati", level: "Native" },
                  { name: "Hindi", level: "Fluent" }
                ].map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center border-b border-zinc-100 pb-1 break-inside-avoid">
                    <span className="uppercase tracking-widest text-[10px] font-black text-black">{lang.name}</span>
                    <span className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold italic">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
            
          </div>

          {/* Right Column - Professional Experience */}
          <div className="col-span-8">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 border-l-4 border-black pl-4 mb-8">Selected Projects & Experience</h3>
            <div className="space-y-10">
              {filteredExperiences.map((exp) => (
                <div key={exp.id} className="break-inside-avoid relative pl-6 border-l-2 border-zinc-100">
                  <div className="absolute -left-[6px] top-0 w-2.5 h-2.5 bg-black" />
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-black text-[12px] text-black uppercase tracking-tight leading-none">{exp.role}</h4>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-50 px-2 py-0.5 rounded-full border border-zinc-100">{exp.period}</span>
                  </div>
                  <div className="text-[10px] font-black text-brand mb-4 uppercase tracking-[0.2em]">{exp.company}</div>
                  <ul className="text-[10px] text-zinc-700 space-y-2 text-justify">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 bg-zinc-300 rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-zinc-100 flex justify-between items-center opacity-50 break-inside-avoid">
          <span className="text-[8px] font-black uppercase tracking-widest">Digitally Verified Resume</span>
          <span className="text-[8px] font-black uppercase tracking-widest">© 2026 Prashant Sagathiya</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: A4;
          margin: 15mm 15mm 15mm 15mm;
        }
        @media print {
          /* Hide EVERYTHING by default */
          body * {
            visibility: hidden !important;
          }
          
          /* Show ONLY the print block and its contents */
          .print\\:block, .print\\:block * {
            visibility: visible !important;
          }

          /* Force the print block to the top */
          .print\\:block {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            display: block !important;
            background-color: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .break-inside-avoid, .break-inside-avoid-page {
            page-break-inside: avoid !important;
            break-inside: avoid-page !important;
            display: block !important;
            position: relative !important;
          }

          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid !important;
          }

          html, body {
            background-color: white !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            -webkit-print-color-adjust: exact;
          }
          
          /* Fix for grid breaking across pages */
          .grid {
            display: block !important;
          }
          
          .grid > .col-span-4 {
            width: 32% !important;
            float: left !important;
            margin-right: 5% !important;
          }
          
          .grid > .col-span-8 {
            width: 63% !important;
            float: left !important;
          }
          
          .grid::after {
            content: "";
            display: table !important;
            clear: both !important;
          }
        }
      `}} />
    </div>
  );
}
