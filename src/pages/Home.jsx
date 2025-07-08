import React, { useEffect, useState } from "react";
import HomeWeb from "./HomeWeb.jsx";
import HomeMobile from "./HomeMobile.jsx";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px未満ならスマホ
    };

    handleResize(); // 初回チェック
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <HomeMobile /> : <HomeWeb />;
}
