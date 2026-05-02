import PortfolioGrid from "../components/PortfolioGrid";
import ContactSection from "../components/ContactSection";
import { motion } from "motion/react";

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32"
    >
      <PortfolioGrid />
      <ContactSection />
    </motion.div>
  );
}
