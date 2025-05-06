// import React, { useRef, useEffect } from "react";

// const keyFocusItems = [
//   {
//     title: "Ethical AI",
//     description:
//       "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges...",
//     icon: "🤖",
//   },
//   {
//     title: "Diversity",
//     description:
//       "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges...",
//     icon: "🌐",
//   },
//   {
//     title: "Robust",
//     description:
//       "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges...",
//     icon: "⚙️",
//   },
//   {
//     title: "Sustainability",
//     description:
//       "Empowering long-term innovation and responsibility through sustainable technology and policies.",
//     icon: "🌿",
//   },
// ];

// const KeyFocusSection = () => {
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const el = scrollContainerRef.current;
//     if (!el) return;

//     const handleWheel = (e) => {
//       e.preventDefault();
//       const cardWidth = el.firstChild?.offsetWidth || 300;
//       el.scrollBy({
//         left: e.deltaY > 0 ? cardWidth + 24 : -(cardWidth + 24),
//         behavior: "smooth",
//       });
//     };

//     const handleScroll = () => {
//       const scrollRight = el.scrollLeft + el.clientWidth;
//       const fullyScrolled = scrollRight >= el.scrollWidth - 10;
//       document.body.style.overflowY = fullyScrolled ? "auto" : "hidden";
//     };

//     el.addEventListener("wheel", handleWheel, { passive: false });
//     el.addEventListener("scroll", handleScroll);

//     return () => {
//       el.removeEventListener("wheel", handleWheel);
//       el.removeEventListener("scroll", handleScroll);
//       document.body.style.overflowY = "auto";
//     };
//   }, []);

//   return (
//     <section className="bg-[#0e0e0e] text-white py-16">
//       <div className="text-center text-4xl sm:text-5xl font-semibold mb-12">
//         Key Areas to Focus
//       </div>
//       <div
//         ref={scrollContainerRef}
//         className="flex overflow-x-auto gap-6 md:gap-10 px-6 scroll-smooth snap-x snap-mandatory no-scrollbar"
//       >
//         {keyFocusItems.map((item, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 snap-start w-[300px] sm:w-[320px] md:w-[360px]"
//           >
//             <div className="p-[2px] rounded-[24px] bg-gradient-to-br from-[#2F80ED] via-[#27AE60] to-[#F2994A]">
//               <div className="bg-black rounded-[22px] p-6 h-full">
//                 <div className="text-[2rem] mb-4">{item.icon}</div>
//                 <h3 className="text-white text-2xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-gray-300 mb-6 leading-relaxed">
//                   {item.description}
//                 </p>
//                 <a
//                   href="#"
//                   className="text-white font-semibold text-sm underline underline-offset-4"
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default KeyFocusSection;
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import icon1 from "../../assets/img/ai-technology.png";
import icon2 from "../../assets/img/diversity.png";
import icon3 from "../../assets/img/robustness.png";

const KeyFocusSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const items = [
    {
      title: "Diversity",
      description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon2,
      read: "Read More"
    },
    {
      title: "Robust",
      description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon3,
      read: "Read More"
    },
    {
      title: "Sustainability",
      description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon3,
      read: "Read More"
    },
    {
      title: "Ethical AI",
      description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon1,
      read: "Read More"
    },
    {
      title: "Innovation",
      description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon2,
      read: "Read More"
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => (prev + 1) % (items.length - visibleCount + 1));
      }
    }, 3000);
    
    return () => {
      window.removeEventListener("resize", updateCount);
      clearInterval(interval);
    };
  }, [visibleCount, isPaused, items.length]);

  return (
    <section className="bg-black text-white py-16 px-4 font-urbanist">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Areas to Focus
        </h2>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(currentIndex, currentIndex + visibleCount).map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="relative rounded-3xl overflow-visible" // Changed to overflow-visible
                style={{
                  background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                  padding: "2px",
                  height: "250px",
                }}
              >
                <div className="w-full h-full rounded-3xl bg-black p-6 flex flex-col">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                  <a href="#" className="font-semibold underline">
                    {item.read}
                  </a>
                </div>

                {/* Arrow on last visible card */}
                {index === visibleCount - 1 && (
                  <button 
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2
                      w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center
                      transition-all duration-300 hover:bg-orange-600 hover:scale-110 z-10 custom-arrow-button right-con"
                    onClick={() => setCurrentIndex((prev) => (prev + 1) % (items.length - visibleCount + 1))}
                  >
                    <FaArrowRight className="text-white text-lg" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center md:justify-end mt-6 gap-2">
          {Array.from({ length: items.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-[#18BFDB] scale-110" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFocusSection;

