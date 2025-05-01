import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img from '../../assets/img/this-is-why-grid-background.png';

const slides = [
  { title: "Networking Opportunities", image: img },
  { title: "Investors", image: img },
  { title: "New Partnerships", image: img },
];

export default function WhySwiper() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-[#0055FF] via-[#07BCCE] via-60% to-[#FF0000] p-4">
      <section className="h-full w-full bg-black rounded-xl flex flex-col items-center justify-center">
        <h2 className="text-white text-3xl md:text-4xl font-urbanist font-light mb-8">This is why</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3000, reverseDirection: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          dir="rtl" // 👈 for right-to-left sliding
          className="w-full max-w-6xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="rounded-2xl overflow-hidden relative h-72 sm:h-96 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl" />
                <div className="absolute bottom-4 left-4 text-white font-urbanist font-semibold text-lg">
                  {slide.title}
                </div>
                <div className="absolute inset-0 rounded-2xl border-[3px] border-transparent"
                  style={{
                    borderImage: "linear-gradient(to right, #00A3FF, #F7750C) 1",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
