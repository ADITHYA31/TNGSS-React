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
import React, { useState, useEffect ,useRef} from "react";
import icon1 from "../../assets/img/ai-technology.png";
import icon2 from "../../assets/img/diversity.png";
import icon3 from "../../assets/img/robustness.png";


const KeyFocusSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  const items = [
    {
      title: "Ethical AI",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon1,
      read: "Read More"
    },
    {
      title: "Diversity",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon2,
      read: "Read More"
    },
    {
      title: "Robust",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon3,
      read: "Read More"
    },
    {
      title: "Sustainability",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon3,
      read: "Read More"
    },
  ];

  const gradients = [
    "linear-gradient(135deg, #0055FF, #18BFDB)",
    "linear-gradient(135deg, #18BFDB, #F5710C)",
    "linear-gradient(135deg, #F5710C, #EC473E)",
    "linear-gradient(135deg, #EC473E, #0055FF)",
  ];

  // Update visibleCount on resize
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Auto-advance every 3s when not paused
  useEffect(() => {
    const maxIndex = items.length - visibleCount;
    const iv = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1));
      }
    }, 3000);
    return () => clearInterval(iv);
  }, [visibleCount, items.length, isPaused]);

  // Handle pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = 'running';
    }
  };

  // Handle click to stop/start
  const handleCardClick = () => {
    setIsPaused(prev => !prev);
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = isPaused ? 'running' : 'paused';
    }
  };

  const looped = [...items, ...items];

  return (
    <section className="bg-black text-white py-16 px-4 overflow-hidden">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Areas to Focus
        </h2>

        <div 
          className="relative w-full overflow-hidden mt-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={marqueeRef}
            className="flex animate-marquee"
            style={{ animationDuration: "20s" }} // adjust speed here
          >
            {looped.map((item, idx) => (
              <div
                key={idx}
                className={`
                  flex-shrink-0 
                  w-full sm:w-1/2 lg:w-1/3 
                  px-2 sm:px-4 lg:px-6
                  transition-transform duration-300 hover:scale-105
                  cursor-pointer
                `}
                onClick={handleCardClick}
              >
                <div 
                  className="p-[2px] rounded-xl mb-4 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  style={{
                    background: ["#0055FF","#18BFDB","#F5710C","#EC473E"][idx % 4],
                  }}
                >
                  <div className="bg-black rounded-xl p-6 h-full hover:bg-gray-900 transition-colors duration-300">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-12 h-12 mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                    <p className="text-white-300 text-sm mt-3 font-bold hover:text-blue-400 transition-colors duration-300">
                      {item.read}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
};

export default KeyFocusSection;

