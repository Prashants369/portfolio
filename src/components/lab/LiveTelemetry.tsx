import { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Zap, Activity } from 'lucide-react';
import { motion } from "motion/react";

const LOG_MESSAGES = [
  "[SYSTEM] Initializing Agent Engine v16.2.0...",
  "[SCOUT] Scanning Instagram trends for 'Luxury Minimalism'...",
  "[CREATOR] Logic Gate: DNA Alignment check passed.",
  "[VISUAL] Workflow queued: flux-9b-refine-i2i.json",
  "[MEMORY] Synaptic consolidation in progress (REM cycle)...",
  "[AUDITOR] Quality Gate: Resolution verified (2048x2048).",
  "[SYSTEM] GPU Temperature: 68°C | Usage: 94%",
  "[GHOST] Latent posting enabled. Waiting for engagement peak.",
  "[POSTING] Signal received: 48 new interactions in 120s.",
  "[ANALYST] Predictive shadowing: Engagement +12% projected.",
  "[PERSONA] DNA update: Added 'Neo-Brutalist' aesthetic weight.",
  "[OPENCLAW] Tool execution: Web Search (HackerNews top trends).",
];

export default function LiveTelemetry() {
  const [logs, setLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMsg = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
      const timestamp = new Date().toLocaleTimeString('en-GB', { hour12: false });
      setLogs(prev => [...prev.slice(-14), `[${timestamp}] ${randomMsg}`]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="glass rounded-[2rem] border-white/5 overflow-hidden flex flex-col h-[400px]">
      <div className="bg-zinc-900/50 px-6 py-4 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal size={14} className="text-ai-brand" />
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-400">System Telemetry</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Cpu size={12} className="text-zinc-600" />
            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-tighter">94% LOAD</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-ai-brand" />
            <span className="text-[9px] font-mono text-ai-brand uppercase tracking-tighter animate-pulse">LIVE</span>
          </div>
        </div>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex-1 p-6 font-mono text-[10px] space-y-2 overflow-y-auto scrollbar-hide"
      >
        {logs.length === 0 ? (
          <p className="text-zinc-700 italic">Waiting for signal...</p>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="flex gap-4 animate-in fade-in slide-in-from-left-4 duration-500">
              <span className="text-zinc-600 whitespace-nowrap">{log.split(']')[0]}]</span>
              <span className={log.includes('[SYSTEM]') ? 'text-white font-bold' : log.includes('[FAIL]') ? 'text-red-400' : 'text-zinc-400'}>
                {log.split(']')[1]}
              </span>
            </div>
          ))
        )}
      </div>
      
      <div className="p-4 bg-zinc-900/20 border-t border-white/5 flex gap-4">
        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-ai-brand"
            animate={{ width: ["20%", "94%", "88%", "96%"] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-brand"
            animate={{ width: ["40%", "15%", "60%", "30%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}
