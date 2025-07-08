import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const imageMap = {
  "雑談配信画面": import.meta.glob("/src/assets/works/talk/*.{jpg,jpeg,png}", { eager: true }),
  "ゲーム配信画面": import.meta.glob("/src/assets/works/game/*.{jpg,jpeg,png}", { eager: true }),
  "スケジュール表": import.meta.glob("/src/assets/works/schedule/*.{jpg,jpeg,png}", { eager: true }),
  "歌枠配信画面": import.meta.glob("/src/assets/works/sing/*.{jpg,jpeg,png}", { eager: true }),
  "待機画面": import.meta.glob("/src/assets/works/op/*.{jpg,jpeg,png}", { eager: true }),
  "終了画面": import.meta.glob("/src/assets/works/ed/*.{jpg,jpeg,png}", { eager: true }),
  "縦型配信画面": import.meta.glob("/src/assets/works/vertical/*.{jpg,jpeg,png}", { eager: true }),
  "宣伝画像": import.meta.glob("/src/assets/works/promo/*.{jpg,jpeg,png}", { eager: true }),
};

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("雑談配信画面");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = Object.entries(imageMap[activeCategory]).map(([path, mod]) => ({
    src: mod.default,
    path,
  }));

  return (
    <Layout>
      <div className="min-h-screen relative px-4 pt-28 text-black">
        {/* 背景画像 */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{ backgroundImage: "url('/シンプル背景4.png')" }}
        />

        {/* コンテンツ */}
        <div className="relative z-10">
          {/* WORKSと実績のフェードイン */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center mt-2 mb-20 "
          >
            <h2 className="text-6xl font-light tracking-widest mt-20 text-[#656565]">
              WORKS
            </h2>
            <p className="text-sm font-semibold text-[#656565] mt-2">実績</p>
          </motion.div>

          {/* カテゴリタブ（モバイルは2列グリッド、PCは横並びフレックス） */}
          <div
            className="max-w-7xl mx-auto mb-10 pt-12
              grid grid-cols-2 gap-4
              sm:flex sm:flex-wrap sm:justify-center sm:gap-4
            "
          >
            {Object.keys(imageMap).map((label) => (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`px-4 py-2 rounded-full font-medium text-sm relative transition
                  ${
                    activeCategory === label
                      ? "bg-transparent text-[#535353]"
                      : "text-[#535353] hover:text-[#a9a9a9]"
                  }`}
              >
                {label}
                {activeCategory === label && (
                  <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-4 h-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#535353"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* グリッド画像 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto pt-8">
            {images.length === 0 ? (
              <p className="text-center col-span-3 text-gray-500">画像が見つかりません。</p>
            ) : (
              images.map((img, idx) => (
                <motion.div
                  key={img.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: idx * 0.2 }}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage(img.src)}
                >
                  <img
                    src={img.src}
                    alt=""
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 border border-[#656565]"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
                </motion.div>
              ))
            )}
          </div>

          {/* モーダル */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="拡大表示"
                className="max-w-full max-h-full object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          )}

          {/* フッター */}
          <footer className="mt-20 text-sm text-[#656565] text-center border-t border-[#656565] py-6">
            &copy; {new Date().getFullYear()} KOMEDA Design. All rights reserved.
          </footer>
        </div>
      </div>
    </Layout>
  );
}
