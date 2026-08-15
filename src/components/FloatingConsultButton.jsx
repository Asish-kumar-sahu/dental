import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Calendar } from "lucide-react";
import { siteConfig } from "../config/siteConfig";

export default function FloatingConsultButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { contact, theme } = siteConfig;
  const defaultAppointmentMessage = encodeURIComponent(
    "Hi Dr. Shreya's Dental Abode, I would like to book an appointment. Please share the available time slots."
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <>
                <motion.a
                  initial={{ opacity: 0, scale: 0, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  href={`https://wa.me/917022132084?text=${defaultAppointmentMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setExpanded(false)}
                  className="flex items-center gap-3 pl-5 pr-4 py-3 rounded-full shadow-lg text-white text-sm font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
                  }}
                >
                  Book Consultation
                  <Calendar size={16} />
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0, y: 10 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  href={`https://wa.me/${contact.whatsapp}?text=${defaultAppointmentMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 pl-5 pr-4 py-3 rounded-full shadow-lg text-white text-sm font-semibold"
                  style={{ background: "#25D366" }}
                >
                  WhatsApp Us
                  <MessageCircle size={16} fill="white" />
                </motion.a>
              </>
            )}
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            className="rounded-full shadow-2xl flex items-center justify-center text-white relative"
            style={{
              background: expanded
                ? theme.textPrimary
                : `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
              width: 60,
              height: 60,
              boxShadow: `0 10px 30px ${theme.accent}60`,
            }}
            aria-label="Quick actions"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={expanded ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {expanded ? (
                  <span className="text-2xl leading-none">×</span>
                ) : (
                  <Calendar size={22} />
                )}
              </motion.div>
            </AnimatePresence>

            {!expanded && (
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{ background: theme.accent }}
              />
            )}
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
