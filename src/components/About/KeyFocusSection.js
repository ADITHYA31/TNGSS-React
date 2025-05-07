// import React, { useState, useEffect } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import icon1 from "../../assets/img/ai-technology.png";
// import icon2 from "../../assets/img/diversity.png";
// import icon3 from "../../assets/img/robustness.png";

// const KeyFocusSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCount] = useState(3); // Fixed at 3 images per slide

//   const items = [
//     {
//       title: "Diversity",
//       description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
//       icon: icon2,
//       read: "Read More"
//     },
//     {
//       title: "Robust",
//       description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
//       icon: icon3,
//       read: "Read More"
//     },
//     {
//       title: "Robust",
//       description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
//       icon: icon3,
//       read: "Read More"
//     },
//     {
//       title: "Sustainability",
//       description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
//       icon: icon3,
//       read: "Read More"
//     },
//     {
//       title: "Ethical AI",
//       description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
//       icon: icon1,
//       read: "Read More"
//     },
//     {
//       title: "Innovation",
//       description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
//       icon: icon2,
//       read: "Read More"
//     }
//   ];

//   useEffect(() => {
//     // Only handle responsive behavior if needed
//     // Removed all auto-scrolling logic
//   }, []);

//   const handleNextSlide = () => {
//     setCurrentIndex(prev => {
//       const next = prev + 1;
//       const maxIndex = Math.ceil(items.length / visibleCount) - 1;
//       return next > maxIndex ? 0 : next;
//     });
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <section className="bg-black text-white py-16 px-4 font-urbanist">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Key Areas to Focus
//         </h2>

//         <div className="relative overflow-hidden focus-slide-animation" key={currentIndex}>
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{
//               transform: `translateX(-${(currentIndex / Math.ceil(items.length / visibleCount)) * 100}%)`,
//               width: `${Math.ceil(items.length / visibleCount) * 100}%`,
//             }}
//           >
//             {items.map((item, index) => (
//               <div
//                 key={`${item.title}-${index}`}
//                 className="w-full sm:w-1/2 lg:w-1/3 px-2"
//               >
//                 <div
//                   className="relative rounded-3xl overflow-visible"
//                   style={{
//                     background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
//                     padding: "2px",
//                     height: "250px",
//                   }}
//                 >
//                   <div className="w-full h-full rounded-3xl bg-black p-6 flex flex-col">
//                     <img
//                       src={item.icon}
//                       alt={item.title}
//                       className="w-12 h-12 mb-4"
//                     />
//                     <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                     <p className="text-sm text-gray-300 mb-4">{item.description}</p>
//                     <a href="#" className="font-semibold underline">
//                       {item.read}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Arrow button */}
//           <button 
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2
//               w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center
//               transition-all duration-300 hover:bg-orange-600 hover:scale-110 z-10 custom-arrow-button right-con-1"
//             onClick={handleNextSlide}
//           >
//             <FaArrowRight className="text-white text-lg" />
//           </button>
//         </div>

//         {/* Dots Navigation */}
//         <div className="flex justify-center mt-8 space-x-2 md:justify-end">
//   {Array.from({ length: Math.ceil(items.length / visibleCount) }).map((_, index) => (
//     <button
//       key={index}
//       onClick={() => goToSlide(index)}
//       className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//         currentIndex === index ? "bg-[#18BFDB] scale-110" : "bg-gray-500"
//       }`}
//     />
//   ))}
// </div>

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop"); // 'mobile', 'tablet', or 'desktop'
  
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
    {
      title: "Diversity",
      description: "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon2,
      read: "Read More"
    },
  ];

  // Detect screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width >= 640 && width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Determine cards per view based on screen size
  const cardsPerView = screenSize === "mobile" ? 1 : screenSize === "tablet" ? 2 : 3;
  const totalSlides = Math.ceil(items.length / cardsPerView);

  const handleNext = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Get current visible items
  const startIdx = currentSlide * cardsPerView;
  const visibleItems = items.slice(startIdx, startIdx + cardsPerView);

  // Responsive grid classes
  const gridClasses = {
    mobile: "grid-cols-1",
    tablet: "md:grid-cols-2",
    desktop: "lg:grid-cols-3"
  };

  return (
    <section className="bg-black text-white py-16 px-4 font-urbanist">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Key Areas to Focus
        </h2>

        {/* Cards Container */}
        <div className="relative focus-slide-animation" key={currentSlide}>
          <div className={`grid ${gridClasses.mobile} ${gridClasses.tablet} ${gridClasses.desktop} gap-6`}>
            {visibleItems.map((item, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="relative rounded-3xl overflow-visible"
                style={{
                  background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                  padding: "2px",
                  height: "250px",
                }}
              >
                <div className="w-full h-full rounded-3xl bg-black p-6 flex flex-col">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                  <a href="#" className="font-semibold underline">{item.read}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow - Only show when needed */}
          {items.length > cardsPerView && (
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center
                transition-all duration-300 hover:bg-orange-600 hover:scale-110 z-10 custom-arrow-button right-con"
              onClick={handleNext}
            >
              <FaArrowRight className="text-white text-lg" />
            </button>
          )}
        </div>

        {/* Dots Navigation - Only show when needed */}
        {items.length > cardsPerView && (
          <div className="flex justify-center mt-8 space-x-2 md:justify-end">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-[#18BFDB] scale-110" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default KeyFocusSection;