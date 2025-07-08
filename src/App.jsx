import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About"; 
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen w-full font-sans text-white overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> {/* 小文字に揃えましょう */}
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}
