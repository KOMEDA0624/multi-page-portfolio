// src/pages/HomeWeb.jsx
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import RotatingImage from "../components/RotatingImage";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const images = import.meta.glob("/src/assets/works/*.{jpg,jpeg,png,gif}", {
  eager: true,
});

export default function HomeWeb() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setIsOpen(true);
  };

  return (
    <>
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative min-h-screen h-screen w-full font-sans text-white flex flex-col"
        >
          <div
            className="absolute inset-0 w-full h-full z-0 bg-white"
            style={{
              backgroundImage: "url('/シンプル背景4.png')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" aria-hidden="true" />
            <Dialog.Panel className="relative z-50 p-4 max-w-8xl mx-auto">
              <img
                src={modalImage}
                alt="拡大画像"
                className="max-w-full max-h-[80vh] mx-auto rounded-xl shadow-lg"
              />
            </Dialog.Panel>
          </Dialog>

          <main className="relative z-10 flex-1 flex items-center justify-center overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
              className="relative w-full px-4 md:px-10 xl:px-20 overflow-visible flex flex-col items-center"
            >
              <button
                ref={prevRef}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                  bg-[#f2f2f2] text-[#656565] border border-[#656565] hover:bg-[#656565] hover:text-white 
                  w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                ref={nextRef}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                  bg-[#f2f2f2] text-[#656565] border border-[#656565] hover:bg-[#656565] hover:text-white 
                  w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <div className="relative w-full max-w-[80%] mx-auto overflow-visible">
                <Swiper
                  modules={[Navigation, EffectCoverflow, Mousewheel]}
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 300,
                    modifier: 2.5,
                    slideShadows: false,
                  }}
                  centeredSlides
                  loop
                  slidesPerView={1.5}
                  spaceBetween={-200}
                  grabCursor
                  mousewheel={true}
                  className="overflow-visible max-w-full"
                >
                  {Object.entries(images).map(([path, module], index) => (
                    <SwiperSlide
                      key={path}
                      className="w-[650px] md:w-[600px] h-[600px] flex justify-center items-center overflow-visible cursor-pointer"
                      onClick={() => openModal(module.default)}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="overflow-visible rounded-2xl"
                      >
                        <img
                          src={module.default}
                          alt={`Work ${index + 1}`}
                          className="w-full h-full object-contain rounded-0 shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Link
                  to="/contact"
                  className="absolute bottom-[-108px] w-96 h-20 flex items-center justify-center text-lg left-1/2 -translate-x-1/2 bg-[#fafafa] hover:bg-[#fafafa] text-[#656565] hover:text-[#a9a9a9] px-6 py-2 rounded-full border border-[#656565] transition-colors"
                >
                  お問い合わせはこちら
                </Link>
              </div>
            </motion.div>
          </main>
        </motion.div>
      </Layout>

      <RotatingImage />
    </>
  );
}
