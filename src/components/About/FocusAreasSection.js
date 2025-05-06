// import React, { useRef, useEffect, useState } from 'react';

// const focusItems = [
//   { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-1.png'), borderColor: '#2f80ed' },
//   { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-2.png'), borderColor: '#f2994a' },
//   { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-3.png'), borderColor: '#56ccf2' },
//   { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-1.png'), borderColor: '#2f80ed' },
//   { title: 'Programs & Initiatives', description: 'Connect...', image: require('../../assets/img/area-to-focus-2.png'), borderColor: '#f2994a' },
// ];

// const FocusAreasSection = () => {
//   const containerRef = useRef(null);
//   const scrollRef = useRef(null);
//   const [locked, setLocked] = useState(true);

//   useEffect(() => {
//     const container = containerRef.current;
//     const section = scrollRef.current;

//     const handleWheel = (e) => {
//         const inSection =
//           window.scrollY + window.innerHeight > section.offsetTop &&
//           window.scrollY < section.offsetTop + section.offsetHeight;
  
//         if (!inSection) return;
  
//         const scrollContainer = container;
//         const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
//         const atStart = scrollContainer.scrollLeft <= 0;
//         const atEnd = scrollContainer.scrollLeft >= maxScrollLeft - 1;
  
//         // If we are not at edges, prevent vertical scroll
//         if (!(atStart && e.deltaY < 0) && !(atEnd && e.deltaY > 0)) {
//           e.preventDefault();
//           scrollContainer.scrollBy({
//             left: e.deltaY,
//             behavior: 'smooth',
//           });
//         }
//       };

//     container.addEventListener('wheel', handleWheel, { passive: false });
//     return () => container.removeEventListener('wheel', handleWheel);
//   }, [locked]);

//   const sectionStyle = {
//     backgroundColor: 'black',
//     color: 'white',
//     padding: '4rem 0',
//     fontFamily: 'Urbanist, sans-serif',
//     overflow: 'hidden',
//   };

//   const cardStyle = (borderColor) => ({
//     minWidth: '300px',
//     marginRight: '1.5rem',
//     flex: '0 0 auto',
//     border: `2px solid ${borderColor}`,
//     borderRadius: '20px',
//     overflow: 'hidden',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '400px',
//     position: 'relative',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'flex-end',
//     padding: '1.5rem',
//     cursor: 'pointer',
//   });

//   const overlayStyle = {
//     background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
//     position: 'absolute',
//     top: 0, left: 0, right: 0, bottom: 0,
//     borderRadius: '20px',
//   };

//   const scrollContainerStyle = {
//     display: 'flex',
//     overflowX: 'auto',
//     scrollBehavior: 'smooth',
//     paddingBottom: '1rem',
//     paddingLeft: '1rem',
//   };

//   return (
//     <div style={sectionStyle} ref={containerRef}>
//       <div className="container">
//         <h2 className="text-center fw-bold mb-5">Key Areas to Focus</h2>
//         <div ref={scrollRef} style={scrollContainerStyle}>
//           {focusItems.map((item, index) => (
//             <div key={index} style={{
//               ...cardStyle(item.borderColor),
//               backgroundImage: `url(${item.image})`,
//               minWidth: index === focusItems.length - 1 ? '300px' : 'calc(100% / 3)',
//             }}>
//               <div style={overlayStyle}></div>
//               <div style={{ position: 'relative', zIndex: 2 }}>
//                 <h5 className="fw-bold">{item.title}</h5>
//                 <p style={{ fontSize: '0.9rem' }}>{item.description}</p>
//                 <a href="#" className="text-white fw-semibold">Read More</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FocusAreasSection;
// import React, { useRef, useEffect, useState } from "react";
// import area1 from "../../assets/img/area-to-focus-1.png";
// import area2 from "../../assets/img/area-to-focus-2.png";
// import area3 from "../../assets/img/area-to-focus-3.png";

// const focusItems = [
//   { 
//     title: "Programs & Initiatives", 
//     desc: "Connect...", 
//     img: area1, 

//   },
//   { 
//     title: "Programs & Initiatives", 
//     desc: "Connect ...", 
//     img: area2, 

//   },
//   { 
//     title: "Programs & Initiatives", 
//     desc: "Connect...", 
//     img: area3, 

//   },
//   { 
//     title: "Programs & Initiatives", 
//     desc: "connect...", 
//     img: area1, 

//   },
// ];

// export default function FocusAreasSection() {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const animationRef = useRef(null);
//   const scrollPosRef = useRef(0);
//   const scrollSpeed = 30; // pixels per second (lower = slower)

//   const animateScroll = (timestamp) => {
//     if (!containerRef.current || !contentRef.current) return;
    
//     const container = containerRef.current;
//     const content = contentRef.current;
    
//     // Reset position when scrolled all the way
//     if (scrollPosRef.current >= content.scrollWidth) {
//       scrollPosRef.current = 0;
//       container.scrollLeft = 0;
//     } else {
//       scrollPosRef.current += scrollSpeed / 60; // Divide by ~60fps
//       container.scrollLeft = scrollPosRef.current;
//     }
    
//     if (!isPaused) {
//       animationRef.current = requestAnimationFrame(animateScroll);
//     }
//   };

//   useEffect(() => {
//     if (!isPaused) {
//       animationRef.current = requestAnimationFrame(animateScroll);
//     }
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//     };
//   }, [isPaused]);

//   // Duplicate content for seamless looping
//   const duplicatedItems = [...focusItems, ...focusItems];

//   return (
//     <section 
//       className="relative bg-black text-white py-16 font-urbanist"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div className=" px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Key Areas to Focus
//         </h2>

//         {/* News Ticker Style Container */}
// {/* News Ticker Style Container */}
// <div className="relative overflow-hidden mt-8">
//   {/* Continuous Scrolling Content */}
//   <div
//     ref={containerRef}
//     className="flex overflow-x-hidden whitespace-nowrap"
//     onMouseEnter={() => setIsPaused(true)}
//     onMouseLeave={() => setIsPaused(false)}
//     onClick={() => setIsPaused(true)} // ⬅️ this pauses scroll on click
//     style={{
//       scrollbarWidth: "none",
//       msOverflowStyle: "none",
//     }}
//   >
//     <div ref={contentRef} className="flex">
//       {duplicatedItems.map((it, i) => (
//         <div
//           key={i}
//           className="inline-block mx-4"
//           style={{
//             background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
//             padding: "2px",
//             borderRadius: "1rem", // match tailwind's rounded-2xl
//           }}
//         >
//           {/* Inner card with image and overlay */}
//           <div
//             className="w-60 md:w-96 lg:w-[500px] h-48 md:h-64 rounded-2xl bg-center bg-cover relative"
//             style={{
//               backgroundImage: `url(${it.img})`,
//               flexShrink: 0,
//             }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 rounded-2xl" />
//             <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
//               <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
//               <p className="text-sm mb-4">{it.desc}</p>
//               <a href="#" className="font-semibold underline">
//                 Read More
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>


//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import area1 from "../../assets/img/area-to-focus-1.png";
import area2 from "../../assets/img/area-to-focus-2.png";
import area3 from "../../assets/img/area-to-focus-3.png";

const focusItems = [
  { 
    title: "Programs & Initiatives", 
    desc: "Correct", 
    img: area1,
    linkText: "Read More"
  },
  { 
    title: "Skill Development", 
    desc: "Learn & Grow", 
    img: area2,
    linkText: "Read More"
  },
  { 
    title: "Community Events", 
    desc: "Janus.", 
    img: area3,
    linkText: "Read More"
  },
  { 
    title: "Innovation Hub", 
    desc: "Explore ideas", 
    img: area1,
    linkText: "Read More"
  },
  { 
    title: "Skill Development", 
    desc: "Correct", 
    img: area1,
    linkText: "Read More"
  },
  { 
    title: "Innovation Hub", 
    desc: "Learn & Grow", 
    img: area2,
    linkText: "Read More"
  },
  { 
    title: "Programs & Initiatives", 
    desc: "Janus.", 
    img: area3,
    linkText: "Read More"
  },
  { 
    title: "Innovation Hub", 
    desc: "Explore ideas", 
    img: area1,
    linkText: "Read More"
  },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

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
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`}>
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

          {/* Custom Arrow Button - positioned outside the cards */}
          {getVisibleItems().length > 0 && (
            <button
              className="custom-arrow-button"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            >
              <FaArrowRight className="text-white" />
            </button>
          )}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center md:justify-end mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-[#18BFDB] scale-110" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Buttons at the bottom */}
   
      </div>

      <style jsx>{`
        .custom-arrow-button {
          position: absolute;
          right: -1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 3rem;
          height: 3rem;
          background-color: #f97316;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: background-color 0.3s ease;
          border: none;
          cursor: pointer;
          opacity: 0.7;
        }
        .custom-arrow-button:hover {
          opacity: 1;
          background-color: #ea580c;
        }
      `}</style>
    </section>
  );
}

