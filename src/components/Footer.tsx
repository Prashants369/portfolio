import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "../data";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 md:mt-24 border-t border-[#18382a] bg-[#06110c]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-10 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20">
        <div className="max-w-md space-y-4">
          <Link
            to="/"
            className="inline-block border border-[#d4f5e2]/80 px-3 py-1.5 font-display font-extrabold text-sm tracking-[0.08em] uppercase text-[#d4f5e2]"
          >
            P.SAGATHIYA
          </Link>
          <p className="text-sm leading-relaxed text-[#8bbfa0]">
            Building 3D worlds in Unreal Engine 5 and shipping AI / full-stack tools. MCA at Silver Oak University, Ahmedabad.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:gap-12">
          <div className="flex flex-col gap-3">
            <h5 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#658273] mb-1">
              Navigation
            </h5>
            <Link to="/" className="text-sm text-[#8bbfa0] hover:text-brand transition-colors">Home</Link>
            <Link to="/portfolio" className="text-sm text-[#8bbfa0] hover:text-brand transition-colors">Work</Link>
            <Link to="/resume" className="text-sm text-[#8bbfa0] hover:text-brand transition-colors">Resume</Link>
            <a href="/#contact" className="text-sm text-[#8bbfa0] hover:text-brand transition-colors">Contact</a>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#658273] mb-1">
              Nodes
            </h5>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#8bbfa0] hover:text-brand transition-colors"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#8bbfa0] hover:text-brand transition-colors"
            >
              LinkedIn <ArrowUpRight size={12} />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-[#8bbfa0] hover:text-brand transition-colors"
            >
              Email <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 border-t border-[#18382a] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[11px] text-[#658273]">
        <p>© {new Date().getFullYear()} Prashant Sagathiya. All system routes active.</p>
        <p className="flex items-center gap-2 font-mono font-bold uppercase tracking-[0.14em] text-[#8bbfa0] text-[9px]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#5ce0a0]" />
          System status: online
        </p>
      </div>
    </footer>
  );
}
