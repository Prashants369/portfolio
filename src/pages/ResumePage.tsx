import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import { motion } from "motion/react";

export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32"
    >
      <ResumeSection />
      <ContactSection />
    </motion.div>
  );
}
