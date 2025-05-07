"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import area1 from "../../assets/img/area-to-focus-1.png";
import area2 from "../../assets/img/area-to-focus-2.png";
import area3 from "../../assets/img/area-to-focus-3.png";

const focusItems = [
  { title: "Programs & Initiatives", desc: "Correct", img: area1, linkText: "Read More" },
  { title: "Skill Development", desc: "Learn & Grow", img: area2, linkText: "Read More" },
  { title: "Community Events", desc: "Janus.", img: area3, linkText: "Read More" },
  { title: "Innovation Hub", desc: "Explore ideas", img: area1, linkText: "Read More" },
  { title: "Skill Development", desc: "Correct", img: area1, linkText: "Read More" },
  { title: "Innovation Hub", desc: "Learn & Grow", img: area2, linkText: "Read More" },
  { title: "Programs & Initiatives", desc: "Janus.", img: area3, linkText: "Read More" },
  { title: "Innovation Hub", desc: "Explore ideas", img: area1, linkText: "Read More" },
];

export default function FocusAreasSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerSlide = isMobile ? 1 : isTablet ? 2 : 4;
  const totalSlides = Math.ceil(focusItems.length / itemsPerSlide);

  const getVisibleItems = () => {
    const start = currentSlide * itemsPerSlide;
    return focusItems.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="bg-black text-white py-16 font-urbanist px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Areas to Focus
        </h2>

        <div className="relative">
          <div
            key={currentSlide}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 focus-slide-animation"
          >
            {getVisibleItems().map((item, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden group"
                style={{
                  background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                  padding: "2px",
                  height: "300px",
                }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden relative bg-black">
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm mt-1">{item.desc}</p>
                      <a href="#" className="font-semibold underline mt-1">
                        {item.linkText}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 space-x-2 md:justify-end ">
  {Array.from({ length: totalSlides }).map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`w-3 h-3 rounded-full ${
        index === currentSlide ? "bg-[#18BFDB] scale-110" : "bg-gray-500"
      }`}
    ></button>
  ))}
</div>

          {/* Right arrow to go to next slide manually */}
          {getVisibleItems().length > 0 && (
            <button
              className="custom-arrow-button"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            >
              <FaArrowRight className="text-white  absolute right-[-20px] top-1/2 transform -translate-y-1/2 flex justify-center items-center mt-2"  />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

