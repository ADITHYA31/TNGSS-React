// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import img from '../../assets/img/this-is-why-grid-background.png';

// const slides = [
//   { title: "Networking Opportunities", image: img },
//   { title: "Investors", image: img },
//   { title: "New Partnerships", image: img },
// ];

// export default function WhySwiper() {
//   return (
//     <div className="w-full h-screen bg-gradient-to-br from-[#0055FF] via-[#07BCCE] via-60% to-[#FF0000] p-4">
//       <section className="h-full w-full bg-black rounded-xl flex flex-col items-center justify-center">
//         <h2 className="text-white text-3xl md:text-4xl font-urbanist font-light mb-8">This is why</h2>

//         <Swiper
//           modules={[Pagination, Autoplay]}
//           slidesPerView={1}
//           spaceBetween={20}
//           autoplay={{ delay: 3000, reverseDirection: true }}
//           pagination={{ clickable: true }}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             1024: { slidesPerView: 2 },
//           }}
//           dir="rtl" // 👈 for right-to-left sliding
//           className="w-full max-w-6xl"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="rounded-2xl overflow-hidden relative h-72 sm:h-96 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               >
//                 <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl" />
//                 <div className="absolute bottom-4 left-4 text-white font-urbanist font-semibold text-lg">
//                   {slide.title}
//                 </div>
//                 <div className="absolute inset-0 rounded-2xl border-[3px] border-transparent"
//                   style={{
//                     borderImage: "linear-gradient(to right, #00A3FF, #F7750C) 1",
//                   }}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </div>
//   );
// }
"use client"
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import img from '../../assets/img/this-is-why-grid-background.png';

export default function CarouselSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    { title: "Networking Opportunities", image: img },
    { title: "Investors", image: img },
    { title: "Global Reach", image: img },
    { title: "Expert Mentors", image: img },
    { title: "Innovation Hub", image: img },
    { title: "Growth Resources", image: img },
    { title: "Funding Access", image: img },
    { title: "Industry Connections", image: img },
    { title: "Market Insights", image: img },
    { title: "Strategic Partners", image: img },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change every 3 seconds
  
    return () => clearInterval(interval); // Clean up on unmount
  }, [slides.length]);

  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light text-center mb-8 md:mb-16">This is why</h2>

        <div className="relative">
          {/* Mobile: Single Slide */}
          <div className="md:hidden">
            <div
              className="w-full relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                padding: "2px",
                height: "300px",
              }}
            >
              <div className="w-full h-full rounded-3xl overflow-hidden relative">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${slides[activeSlide].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                    <h3 className="text-xl md:text-2xl font-medium">{slides[activeSlide].title}</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation Arrows */}
            {/* <div className="flex justify-between mt-4">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide} 
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div> */}
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {slides
              .slice(activeSlide * 2, activeSlide * 2 + 2)
              .map((card, index) => (
                <div
                  key={index}
                  className="w-full relative rounded-3xl overflow-hidden"
                  style={{
                    background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                    padding: "2px",
                    height: "300px",
                  }}
                >
                  <div className="w-full h-full rounded-3xl overflow-hidden relative">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                        <h3 className="text-2xl font-medium">{card.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Desktop Navigation Arrow */}
          <button 
            onClick={nextSlide} 
            className="custom-arrow-button"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Responsive Dots */}
        <div className="flex justify-center md:justify-end gap-2 mt-8">
          {Array.from({ length: isMobile ? slides.length : Math.ceil(slides.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === index ? "bg-[#18BFDB] scale-110" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

