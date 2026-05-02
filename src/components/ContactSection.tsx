import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, Github, Twitter, ExternalLink, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SOCIAL_LINKS } from "../data";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SOCIAL_LINKS.email}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Portfolio Message from ${data.name}`,
          _template: "table"
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[2rem] p-6 md:p-16 border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em] mb-4">Get in Touch</h2>
              <h3 className="text-4xl md:text-7xl font-display font-black leading-none mb-8 uppercase">
                READY TO <br /><span className="text-brand">COLLABORATE?</span>
              </h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md mb-12">
                Currently looking for new opportunities in AI engineering, game development, and technical art. Let's build something legendary together.
              </p>
              
              <div className="flex flex-col gap-6">
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-4 group max-w-full overflow-hidden">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full glass border-brand/20 flex items-center justify-center group-hover:bg-brand group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email Me</p>
                    <p className="text-lg md:text-xl font-display font-bold truncate">{SOCIAL_LINKS.email}</p>
                  </div>
                </a>
                
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                    { icon: Github, href: SOCIAL_LINKS.github, label: "GitHub" },
                    { icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
                  ].filter(s => s.href !== "#").map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full glass border-white/5 flex items-center justify-center hover:bg-brand hover:text-black transition-all hover:-translate-y-1"
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="w-full text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-black uppercase mb-2">Message Sent!</h4>
                      <p className="text-zinc-400 text-sm font-mono uppercase tracking-widest">I'll get back to you shortly.</p>
                    </div>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-[10px] font-mono text-brand uppercase tracking-[0.3em] hover:underline underline-offset-8"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 w-full"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-2">Name</label>
                        <input type="text" name="name" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand/50 transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-2">Email</label>
                        <input type="email" name="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand/50 transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 ml-2">Message</label>
                      <textarea name="message" required rows={4} placeholder="Let's talk about your next project..." className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand/50 transition-colors resize-none" />
                    </div>
                    <button 
                      disabled={status === 'sending'}
                      type="submit" 
                      className={`w-full py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(var(--brand-rgb),0.3)] uppercase tracking-widest text-sm flex items-center justify-center gap-3 ${status === 'sending' ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-brand text-black hover:scale-[1.02] active:scale-95'}`}
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-500 border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    {status === 'error' && (
                      <p className="text-red-500 text-[10px] font-mono uppercase tracking-widest text-center flex items-center justify-center gap-2">
                        <AlertCircle size={12} /> Something went wrong. Please try again.
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12 text-zinc-600 text-[10px] md:text-xs font-mono uppercase tracking-widest text-center md:text-left">
          <p>© {new Date().getFullYear()} Prashant Sagathiya. Portfolio // v2.0</p>
          <div className="flex gap-8">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">LinkedIn</a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
