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
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else {
      // For desktop, ensure we don't go beyond the last pair
      const maxSlide = Math.ceil(slides.length / 2) - 1;
      setActiveSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    } else {
      // For desktop, ensure we loop back from first to last pair
      const maxSlide = Math.ceil(slides.length / 2) - 1;
      setActiveSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setActiveSlide((prevIndex) => (prevIndex + 1) % slides.length);
      } else {
        const maxSlide = Math.ceil(slides.length / 2) - 1;
        setActiveSlide((prevIndex) => (prevIndex + 1) % (maxSlide + 1));
      }
    }, 3000);
  
    return () => clearInterval(interval);
  }, [slides.length, isMobile]);

  // Get visible slides based on device
  const getVisibleSlides = () => {
    if (isMobile) {
      return [slides[activeSlide]];
    } else {
      const startIndex = activeSlide * 2;
      return [
        slides[startIndex],
        slides[(startIndex + 1) % slides.length] // Use modulo to loop back
      ];
    }
  };

  const visibleSlides = getVisibleSlides();

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
                    backgroundImage: `url(${visibleSlides[0].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                    <h3 className="text-xl md:text-2xl font-medium">{visibleSlides[0].title}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {visibleSlides.map((card, index) => (
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
          {Array.from({ 
            length: isMobile ? slides.length : Math.ceil(slides.length / 2) 
          }).map((_, index) => (
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