import { motion } from "motion/react";

export default function ProceduralGraph() {
  return (
    <div className="glass rounded-[2rem] border-white/5 overflow-hidden h-[400px] relative p-8 flex flex-col justify-center">
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #f27d26 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
      
      <div className="relative z-10 space-y-8">
        {[
          { name: "Input: Gaea Heightmap", type: "Texture", color: "#f27d26" },
          { name: "PCG: Jungle Distribution", type: "Graph", color: "#22c55e" },
          { name: "Lumen: Global Illumination", type: "Dynamic", color: "#3b82f6" },
          { name: "Output: Final Render", type: "Viewport", color: "#ffffff" },
        ].map((node, i) => (
          <motion.div 
            key={node.name}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center gap-6"
          >
            <div className={`w-3 h-3 rounded-full shadow-[0_0_10px_rgba(242,125,38,0.5)]`} style={{ backgroundColor: node.color }} />
            <div className="flex-1 glass p-4 rounded-xl border-white/5 flex items-center justify-between group hover:border-brand/30 transition-all cursor-crosshair">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-zinc-300">{node.name}</span>
              <span className="text-[8px] font-mono text-zinc-600 border border-white/5 px-2 py-0.5 rounded uppercase">{node.type}</span>
            </div>
            {i < 3 && (
              <div className="absolute left-[13px] top-[12px] bottom-[-28px] w-px bg-gradient-to-b from-brand/50 to-transparent" />
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="absolute bottom-6 right-8 text-[8px] font-mono text-zinc-700 uppercase tracking-[0.4em] rotate-90 origin-right">
        Workflow Pipeline v5.7
      </div>
    </div>
  );
}
