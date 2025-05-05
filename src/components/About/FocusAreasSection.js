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
import React, { useRef, useEffect, useState } from "react";
import area1 from "../../assets/img/area-to-focus-1.png";
import area2 from "../../assets/img/area-to-focus-2.png";
import area3 from "../../assets/img/area-to-focus-3.png";

const focusItems = [
  { 
    title: "Programs & Initiatives", 
    desc: "Connect...", 
    img: area1, 
    bd: "border-blue-500" 
  },
  { 
    title: "Programs & Initiatives", 
    desc: "Connect ...", 
    img: area2, 
    bd: "border-yellow-400" 
  },
  { 
    title: "Programs & Initiatives", 
    desc: "Connect...", 
    img: area3, 
    bd: "border-sky-400" 
  },
  { 
    title: "Programs & Initiatives", 
    desc: "connect...", 
    img: area1, 
    bd: "border-blue-500" 
  },
];

export default function FocusAreasSection() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationRef = useRef(null);
  const scrollPosRef = useRef(0);
  const scrollSpeed = 30; // pixels per second (lower = slower)

  const animateScroll = (timestamp) => {
    if (!containerRef.current || !contentRef.current) return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    
    // Reset position when scrolled all the way
    if (scrollPosRef.current >= content.scrollWidth) {
      scrollPosRef.current = 0;
      container.scrollLeft = 0;
    } else {
      scrollPosRef.current += scrollSpeed / 60; // Divide by ~60fps
      container.scrollLeft = scrollPosRef.current;
    }
    
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animateScroll);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      animationRef.current = requestAnimationFrame(animateScroll);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Duplicate content for seamless looping
  const duplicatedItems = [...focusItems, ...focusItems];

  return (
    <section 
      className="relative bg-black text-white py-16 font-urbanist"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className=" px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Areas to Focus
        </h2>

        {/* News Ticker Style Container */}
{/* News Ticker Style Container */}
<div className="relative overflow-hidden mt-8">
  {/* Continuous Scrolling Content */}
  <div
    ref={containerRef}
    className="flex overflow-x-hidden whitespace-nowrap"
    onMouseEnter={() => setIsPaused(true)}
    onMouseLeave={() => setIsPaused(false)}
    onClick={() => setIsPaused(true)} // ⬅️ this pauses scroll on click
    style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    }}
  >
    <div ref={contentRef} className="flex">
      {duplicatedItems.map((it, i) => (
        <div
          key={i}
          className="inline-block mx-4"
          style={{
            background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
            padding: "2px",
            borderRadius: "1rem", // match tailwind's rounded-2xl
          }}
        >
          {/* Inner card with image and overlay */}
          <div
            className="w-60 md:w-96 lg:w-[500px] h-48 md:h-64 rounded-2xl bg-center bg-cover relative"
            style={{
              backgroundImage: `url(${it.img})`,
              flexShrink: 0,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 rounded-2xl" />
            <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-sm mb-4">{it.desc}</p>
              <a href="#" className="font-semibold underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


      </div>
    </section>
  );
}