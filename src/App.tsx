import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import PortfolioPage from "./pages/PortfolioPage";
import ResumePage from "./pages/ResumePage";
import ScrollToTop from "./components/ScrollToTop";
import { motion, useScroll, useSpring } from "motion/react";

import { PersonaProvider } from "./context/PersonaContext";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <PersonaProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="relative min-h-screen atmosphere-bg">
          {/* Scroll Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-brand z-[100] origin-left"
            style={{ scaleX }}
          />

          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
          </main>
          
          {/* Background grain / texture overlay */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-[99]" 
               style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />
        </div>
      </BrowserRouter>
    </PersonaProvider>
  );
}
