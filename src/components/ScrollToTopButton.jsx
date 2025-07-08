// src/components/ScrollToTopButton.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // 初期表示チェック
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            type: "tween",
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="
          fixed bottom-0 right-0 z-50 cursor-pointer
            w-28 h-56 sm:w-44 sm:h-96
            p-0 border-none bg-none
          "
          aria-label="Scroll to top"
          style={{
            background: "none",
            border: "none",
            padding: 0,
          }}
        >
          <img
            src="/scroll-top.png"
            alt="Scroll to top"
            className="w-full h-full object-contain block"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
