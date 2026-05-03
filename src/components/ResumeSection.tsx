import { experiences, skills, SOCIAL_LINKS } from "../data";
import { Download, Briefcase, GraduationCap, Code, Cpu, Gamepad2, Sparkles, Layers, Terminal, Bot, Mail, MapPin, Linkedin, Github, Copy, Check } from "lucide-react";
import { usePersona } from "../context/PersonaContext";
import { useState } from "react";

export default function ResumeSection() {
  const { persona, setPersona } = usePersona();
  const [copied, setCopied] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Game Engines": return <Gamepad2 size={16} className="text-brand" />;
      case "3D Art & Tools": return <Layers size={16} className="text-brand" />;
      case "Programming": return <Code size={16} className="text-brand" />;
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

  const getTitle = () => {
    if (persona === '3D') return 'Environment Artist & Game Designer';
    if (persona === 'AI') return 'AI Developer & Full Stack Engineer';
    return 'Creative Technologist';
  };

  const getSummary = () => {
    if (persona === '3D') return "Environment Artist and Game Designer building high-fidelity worlds in Unreal Engine 5. Focused on PCG frameworks, modular environments, and technical art workflows. Currently completing BCA at Christ College, Rajkot.";
    if (persona === 'AI') return "AI Developer building automated research pipelines and full-stack web applications. Experienced with Next.js, FastAPI, LLM integration, and generative AI workflows. Currently completing BCA at Christ College, Rajkot.";
    return "Creative technologist working across 3D environment design and AI automation. Building high-fidelity UE5 worlds and intelligent full-stack systems. Currently completing BCA at Christ College, Rajkot.";
  };

  const copyAsText = () => {
    const text = `
PRASHANT SAGATHIYA
${getTitle()}
${SOCIAL_LINKS.email} | ${SOCIAL_LINKS.linkedin}
Junagadh, Gujarat, India

SUMMARY
${getSummary()}

PROJECTS & EXPERIENCE
${filteredExperiences.map(exp => `
${exp.role}
${exp.company} | ${exp.period}
${exp.description.map(d => `- ${d}`).join('\n')}
`).join('\n')}

SKILLS
${filteredSkills.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n')}

EDUCATION
BCA — Computer Applications
Christ College, Rajkot (Graduating 2026)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="resume-container">
      {/* SCREEN VIEW */}
      <section id="resume" className="py-12 md:py-24 px-4 md:px-6 bg-zinc-950 min-h-screen print:hidden">
        <div className="max-w-4xl mx-auto">
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 md:mb-12">
            <div className="inline-flex p-1 bg-zinc-900 rounded-xl border border-white/5">
              {[
                { id: '3D', label: '3D / Game' },
                { id: 'BOTH', label: 'Full Profile' },
                { id: 'AI', label: 'AI / Web' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPersona(p.id as any)}
                  className={`px-3 md:px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${persona === p.id ? 'bg-white text-black' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={copyAsText}
                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 transition-all rounded-lg font-bold uppercase text-[9px] tracking-widest border border-white/5"
              >
                {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} className="text-zinc-500" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button 
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-brand text-black hover:opacity-90 transition-all rounded-lg font-bold uppercase text-[9px] tracking-widest"
              >
                <Download size={14} />
                <span>PDF</span>
              </button>
            </div>
          </div>

          {/* Professional Resume Body */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Header */}
            <div className="p-6 md:p-12 border-b border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-none">
                    Prashant <br /> Sagathiya
                  </h1>
                  <p className="text-brand font-mono text-xs uppercase tracking-[0.2em] font-bold">
                    {getTitle()}
                  </p>
                </div>
                
                <div className="flex flex-col gap-2 text-zinc-400 font-mono text-[10px] uppercase tracking-widest">
                  <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={12} className="text-brand shrink-0" /> <span className="truncate">{SOCIAL_LINKS.email}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-brand shrink-0" /> Junagadh, Gujarat, India
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors"><Linkedin size={14} /></a>
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors"><Github size={14} /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content — stacks vertically on mobile */}
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 p-6 md:p-12 space-y-8 md:space-y-12">
                <div className="space-y-3">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] font-black text-zinc-500 border-b border-white/5 pb-2">Summary</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {getSummary()}
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] font-black text-zinc-500 border-b border-white/5 pb-2">Expertise</h3>
                  <div className="space-y-5">
                    {filteredSkills.map((skillGroup) => (
                      <div key={skillGroup.category} className="space-y-2">
                        <div className="flex items-center gap-2">
                          {getCategoryIcon(skillGroup.category)}
                          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-zinc-300">{skillGroup.category}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {skillGroup.items.map(item => (
                            <span key={item} className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-zinc-500 border border-white/5 uppercase">{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] font-black text-zinc-500 border-b border-white/5 pb-2">Education</h3>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-white uppercase">BCA — Computer Applications</p>
                    <p className="text-[10px] text-zinc-500 font-mono">Christ College, Rajkot</p>
                    <p className="text-[9px] text-brand/70 font-mono mt-1">Graduating 2026</p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="w-full md:w-2/3 p-6 md:p-12 space-y-12 md:space-y-16">
                <div className="space-y-8 md:space-y-10">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] font-black text-zinc-500 border-b border-white/5 pb-2">Projects & Experience</h3>
                  <div className="space-y-10 md:space-y-12">
                    {filteredExperiences.map((exp) => (
                      <div key={exp.id} className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4">
                          <div>
                            <h4 className="text-lg md:text-xl font-display font-bold uppercase tracking-tight text-white">{exp.role}</h4>
                            <p className="text-[10px] font-mono text-brand uppercase tracking-widest">{exp.company}</p>
                          </div>
                          <span className="text-[9px] font-mono text-zinc-600 bg-white/5 px-2 py-0.5 rounded-full whitespace-nowrap w-fit">{exp.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-zinc-400 text-xs leading-relaxed flex items-start gap-3">
                              <span className="mt-1.5 w-1 h-1 bg-brand rounded-full shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINT VIEW (Clean & Minimal) */}
      <div className="hidden print:block font-sans text-black bg-white w-full">
        <div className="border-b-2 border-black pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Prashant Sagathiya</h1>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">
              {getTitle()}
            </p>
          </div>
          <div className="text-right text-[9px] font-bold uppercase tracking-widest space-y-1">
            <p>{SOCIAL_LINKS.email}</p>
            <p>Junagadh, Gujarat, India</p>
            <p>linkedin.com/in/prashant-sagathiya</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 space-y-8">
            <div className="space-y-2">
              <h2 className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1">Profile</h2>
              <p className="text-[9px] leading-relaxed text-zinc-700">
                {getSummary()}
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1">Skills</h2>
              {filteredSkills.map(s => (
                <div key={s.category} className="space-y-1">
                  <p className="text-[8px] font-black uppercase">{s.category}</p>
                  <p className="text-[8px] text-zinc-600 uppercase">{s.items.join(' • ')}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h2 className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1">Education</h2>
              <p className="text-[9px] font-black uppercase">BCA — Computer Applications</p>
              <p className="text-[8px] text-zinc-600">Christ College, Rajkot (Graduating 2026)</p>
            </div>
          </div>
          <div className="col-span-8 space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1">Projects & Experience</h2>
            {filteredExperiences.map(exp => (
              <div key={exp.id} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-[11px] font-black uppercase">{exp.role}</h3>
                  <span className="text-[8px] font-bold text-zinc-500 uppercase">{exp.period}</span>
                </div>
                <p className="text-[9px] font-bold text-zinc-800 uppercase italic">{exp.company}</p>
                <ul className="space-y-1.5">
                  {exp.description.map((d, i) => (
                    <li key={i} className="text-[9px] text-zinc-700 leading-tight flex items-start gap-2">
                      <span className="mt-1 w-1 h-1 bg-zinc-300 rounded-full shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @page {
          size: A4;
          margin: 15mm;
        }
        @media print {
          body * { visibility: hidden !important; }
          .print\\:block, .print\\:block * { visibility: visible !important; }
          .print\\:block {
            position: absolute !important;
            left: 0 !important; top: 0 !important;
            width: 100% !important;
            display: block !important;
            background: white !important;
            color: black !important;
            padding: 0 !important; margin: 0 !important;
          }
        }
      `}} />
    </div>
  );
}
