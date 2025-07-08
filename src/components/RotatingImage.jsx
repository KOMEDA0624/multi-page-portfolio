import React from "react";
import { motion } from "framer-motion";

export default function RotatingImage() {
  const size = 160; // 画像サイズ
  const duration = 10; // 回転速度（秒）

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="fixed z-10 pointer-events-none select-none"
      style={{
        bottom: "2rem",
        right: "9rem",
        width: `${200}px`,
        height: `${200}px`,
        animation: `spin ${duration}s linear infinite`,
      }}
    >
      <img
        src="/logo.png"
        alt="回転する画像"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        draggable={false}
      />
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </motion.div>
  );
}
