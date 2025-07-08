import React, { useEffect, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";
import { MenuContext } from "../context/MenuContext";

export default function Header() {
  const location = useLocation();
  const isTop = location.pathname === "/";
  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // スクロールでヘッダーの表示／非表示を制御
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // メニュー開閉時に背景スクロールを禁止
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerMotionProps = isTop
    ? {
        initial: { x: 50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 1.5, ease: "easeOut" },
      }
    : {};

  const navLinks = [
    { label: "TOP", to: "/" },
    { label: "WORKS", to: "/works" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", to: "/contact" },
  ];

  return (
    <motion.header
      {...headerMotionProps}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 sm:px-12 sm:py-4 text-[#656565] font-termina bg-transparent"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    >
      {/* ロゴ：左寄せ（Webでは少し右に） */}
      <Link
        to="/"
        className="flex items-center space-x-2 cursor-pointer ml-4 sm:ml-5 h-20 font-dmsans"
      >
        <span className="text-xl tracking-wider">KOMEDA OVERLAY DESIGN</span>
      </Link>

      {/* ハンバーガーメニュー：右寄せ（Webでは少し左に） */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="absolute top-8 right-8 sm:top-10 sm:right-14 z-[100] text-[#656565] focus:outline-none"
        aria-label="メニュー切り替え"
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* メニューオーバーレイ */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* 背景オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* メニュー本体 */}
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-50 flex justify-center items-center"
              style={{
                backgroundImage: `url("/シンプル背景6.png")`,
              }}
            >
              <ul className="flex flex-col items-center gap-10">
                {navLinks.map(({ label, to }, i) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                    className="text-5xl font-light font-dmsans text-[#656565] tracking-wider text-center"
                  >
                    <Link
                      to={to}
                      onClick={() => setMenuOpen(false)}
                      className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#656565] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      {/* ホーム以外のページではスクロールトップボタン表示 */}
      {location.pathname !== "/" && <ScrollToTopButton />}
    </motion.header>
  );
}
