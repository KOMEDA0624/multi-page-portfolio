// src/components/Works.jsx
import React from "react";

// /src/assets/works 内の画像を一括で読み込む
const images = import.meta.glob("/src/assets/works/*.{jpg,jpeg,png,gif}", { eager: true });

export default function Works() {
return (
<section id="works" className="relative z-10 py-20 px-6 bg-white text-[#656565]">
<h2 className="text-3xl font-bold text-center mb-12 tracking-wide">WORKS</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
{Object.entries(images).map(([path, module], index) => (
<div key={index} className="group relative overflow-hidden rounded-xl shadow-md transform transition-transform hover:scale-105" >
<img
src={module.default}
alt={`Work ${index + 1}`}
className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-80"
/>
<div className="absolute bottom-0 left-0 right-0 bg-white/80 text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#656565] text-sm font-semibold">
WORK {index + 1}
</div>
</div>
))}
</div>
</section>
);
}