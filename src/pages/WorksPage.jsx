// src/pages/WorksPage.jsx
import React from "react";
import Works from "../components/Works";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-[url('/シンプル背景4.png')] text-[#656565]">
      <header className="w-full flex justify-between items-center px-12 py-5">
        <a href="/" className="text-xl font-bold tracking-widest">KOMEDA DESIGN</a>
      </header>
      <Works />
      <footer className="w-full text-center py-6 text-sm">
        &copy; {new Date().getFullYear()} KOMEDA Design. All rights reserved.
      </footer>
    </div>
  );
}
