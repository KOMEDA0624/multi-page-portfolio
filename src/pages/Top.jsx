import React from "react";
import WorksCarousel from "../components/WorksCarousel";

export default function Top() {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('シンプル背景4.png')", // ← public フォルダに画像を置いてパスを指定
      }}
    >
      {/* オプションで中央テキストなど */}
      <div className="flex items-center justify-center w-full h-full bg-black/0 text-white">
        <h1 className="text-4xl md:text-6xl font-bold"></h1>
      </div>
    </div>
  );
}
