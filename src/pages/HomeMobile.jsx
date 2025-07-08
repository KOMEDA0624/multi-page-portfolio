import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { motion } from "framer-motion";

export default function HomeMobile() {
  const { menuOpen } = useContext(MenuContext);

  return (
    <Layout>
      <div
        className="min-h-screen flex justify-center items-center p-4 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/シンプル背景4.png')" }}
      >
        <motion.img
          src="/logo.png"
          alt="回転画像"
          className="w-70 h-70 rounded-lg animate-spin-slow -mt-36"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            touchAction: "none",
            WebkitTouchCallout: "none",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </div>

      {!menuOpen && (
        <motion.div
          className="fixed bottom-6 left-0 w-full flex justify-center z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Link
            to="/works"
            className="w-80 h-16 flex items-center justify-center text-lg bg-[#fafafa] hover:bg-[#f0f0f0] text-[#656565] hover:text-[#a9a9a9] px-6 py-2 rounded-full border border-[#656565] transition-colors"
          >
            作品一覧はこちらから
          </Link>
        </motion.div>
      )}
    </Layout>
  );
}
