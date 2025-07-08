import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

export default function About() {
  const links = [
    { href: "https://x.com/KOMEDA__h", alt: "X", icon: "/Xグレー.png" },
    { href: "https://youtube.com/playlist?list=PL8BOqiET4n_Hf35qxvbwJZMhVhTUiUJRD&si=i44aZBZawF0AMiXc", alt: "YouTube", icon: "/youtubeグレー.png" },
    { href: "https://www.twitch.tv/komeda_h", alt: "twitch", icon: "/Twitchグレー.png" },
    { href: "https://komedah.booth.pm/", alt: "booth", icon: "/boothグレー.png" },
    { href: "https://osu.ppy.sh/users/2952775", alt: "osu!", icon: "/osu!グレー.png" },
  ];

  return (
    <Layout>
      {/* 背景画像 */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: "url('/シンプル背景4.png')" }}
      />

      <div className="min-h-screen px-6 py-28 max-w-5xl mx-auto text-[#656565]">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-6xl font-light tracking-widest mt-20 text-[#656565]">ABOUT</h2>
          <p className="text-sm font-semibold mt-2">自己紹介</p>
        </motion.div>

        {/* 画像と文章横並び */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-stretch"
        >
          {/* 左：画像＋リンク */}
          <div className="md:w-1/3 w-full flex flex-col items-center">
            <div className="w-full max-w-[300px]">
              <img
                src="/komeda-icon3.png"
                alt="KOMEDAの写真"
                className="w-full rounded-2xl border border-[#656565] object-cover aspect-square"
              />
            </div>
            <div className="flex space-x-6 mt-6">
              {links.map(({ href, alt, icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                  className="w-8 h-8 block hover:opacity-80 transition-opacity"
                >
                  <img src={icon} alt={alt} className="w-full h-full object-contain" />
                </a>
              ))}
            </div>
          </div>

          {/* 右：文章 */}
          <div className="md:w-2/3 w-full flex flex-col justify-center">
            <div className="leading-relaxed text-lg space-y-5">
              <h3 className="text-4xl font-bold text-[#444]">KOMEDA</h3>
              <p>
                はじめまして、KOMEDAと申します。<br />
                ゲームUIの制作経験もあり、その経験を活かしたオリジナルデザインが得意です。
                2022年7月から本格的にフリーランスとして活動を開始しました。
              </p>
              <p>
                これまでに約250名以上の配信者様の画面デザインを担当し、和風、サイバー系、
                女性らしい可愛らしい雰囲気などジャンルを問わず幅広く対応してきました。<br />
                特に、キャラクターのモチーフをふんだんに使ったオリジナルデザインを得意としており、
                個性豊かな世界観づくりにこだわっています。
              </p>
              <p>
                「配信活動をもっと楽しく、もっと自分らしく見せたい」<br />
                そんな想いをカタチにするお手伝いができれば嬉しいです。
              </p>
            </div>
          </div>
        </motion.section>
      </div>

      {/* 画面幅いっぱいに広がるfooter */}
      <footer className="w-full text-sm text-[#656565] text-center border-t border-[#656565] py-6">
        &copy; {new Date().getFullYear()} KOMEDA Design. All rights reserved.
      </footer>
    </Layout>
  );
}
