// src/components/WorksCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// 画像をグロブで読み込み
const images = import.meta.glob("/src/assets/works/*.{jpg,jpeg,png,gif}", {
  eager: true,
});

export default function WorksCarousel() {
  return (
    <div className="relative z-10 px-6 py- max-w-3xl mx-auto">
      <div className="relative overflow-visible">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          loop
          className="rounded-xl"
        >
          {Object.entries(images).map(([path, module], index) => (
            <SwiperSlide key={path}>
              <img
                src={module.default}
                alt={`Work ${index + 1}`}
                className="w-full h-auto object-cover rounded-xl shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
