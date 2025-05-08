// import React, { useRef, useEffect } from "react";
// import involved1 from "../../assets/img/involved-1.png";
// import involved2 from "../../assets/img/involved-2.png";
// import CTAButton from "../Elements/CTAButton";

// const involvedItems = [
//   { image: involved1 },
//   { image: involved2 },
//   { image: involved1 },
//   { image: involved2 },
//   { image: involved1 },
// ];

// const GetInvolvedSection = () => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const container = scrollRef.current;
//     if (!container) return;

//     let scrollSpeed = 1;

//     function autoScroll() {
//       container.scrollLeft += scrollSpeed;

//       if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
//         container.scrollLeft = 0;
//       }

//       requestAnimationFrame(autoScroll);
//     }

//     autoScroll();
//   }, []);

//   const loopedItems = [...involvedItems, ...involvedItems];

//   return (
//     <section className="w-full bg-black text-white">
//       <div>
//         {/* Header */}
//         <div className="mb-12 flex flex-wrap md:flex-nowrap gap-8 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
//           <div className="w-full md:w-4/12">
//           <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] leading-snug whitespace-pre-line">
//             How to get{"\n"}Involved
//           </h2>

//           </div>
//           <div className="w-full md:w-8/12 text-base sm:text-lg text-gray-300 space-y-4">
//             <p className="mt-6 text-xl sm:text-2xl">
//               Overview—Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <p className="mt-6 text-xl sm:text-2xl">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat.
//             </p>
//           </div>
//         </div>

//         {/* Auto-Scroll Cards */}
//         <div
//           ref={scrollRef}
//           className="overflow-x-auto whitespace-nowrap hide-scrollbar"
//         >
//           <div className="flex gap-6 sm:gap-8 md:gap-20 ml-4 sm:ml-6 md:ml-12">
//             {loopedItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[300px] rounded-2xl border border-blue-400 bg-black/40 p-2 flex-shrink-0"
//               >
//                 <img
//                   src={item.image}
//                   alt={`Involved item ${index + 1}`}
//                   className="rounded-xl w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="mt-12 flex justify-center">
//           <CTAButton className="rounded-2xl">
//             <div className="h-12 px-6 sm:px-10 flex items-center justify-center text-base sm:text-lg font-semibold">
//               JOIN THE ECOSYSTEM
//             </div>
//           </CTAButton>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetInvolvedSection;
import React, { useRef, useEffect,useState } from "react";
import involved1 from "../../assets/img/involved-1.png";
import involved2 from "../../assets/img/involved-2.png";
import CTAButton from "../Elements/CTAButton";

const involvedItems = [
  { image: involved1 },
  { image: involved2 },
  { image: involved1 },
  { image: involved2 },
  { image: involved1 },
];


const GetInvolvedSection = ({data}) => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [scrollSpeed] = useState(0.7);
  const animationRef = useRef(null);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || !isScrolling) return;

    container.scrollLeft += scrollSpeed;
    
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
      container.scrollLeft = 0;
    }
    
    animationRef.current = requestAnimationFrame(handleScroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(handleScroll);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isScrolling]);

  const loopedItems = [...involvedItems, ...involvedItems];

  return (
    <section className="w-full bg-black text-white pb-5 font-urbanist">
      <div>
        {/* Header (unchanged) */}
        <div className="mb-12 flex flex-wrap md:flex-nowrap gap-8 py-16 px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="w-full md:w-4/12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] leading-snug whitespace-pre-line">
              {data?.Heading}
            </h2>
          </div>
          <div className="w-full md:w-8/12 text-base sm:text-lg text-gray-300 space-y-4">
            <p className="mt-6 text-xl sm:text-2xl"
            dangerouslySetInnerHTML={{
            __html: data?.description.replace(/\n/g, '<br  />') || ''
            }}
            />

          </div>
        </div>

        {/* Auto-Scroll Cards */}
        <div
  ref={scrollRef}
  className="overflow-x-auto whitespace-nowrap py-4"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
  onMouseEnter={() => setIsScrolling(false)}
  onMouseLeave={() => setIsScrolling(true)}
>
  <div className="inline-flex gap-4 pl-4">
    {loopedItems.map((item, index) => (
      <div
        key={index}
        className="flex-shrink-0"
        style={{ width: "calc(33.33% - 11px)" }}
        onClick={() => setIsScrolling(false)}
      >
        {/* Gradient Border Wrapper */}
        <div
          className="p-1 rounded-xl"
          style={{
            background:
              "linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)",
          }}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={`Involved item ${index + 1}`}
            className=" object-cover w-full h-auto min-h-[200px] max-h-[300px] hover:cursor-pointer"
          />
        </div>
      </div>
    ))}
  </div>
</div>


        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* CTA Button (unchanged) */}
        <div className="mt-12 flex justify-center">
          <CTAButton className="rounded-2xl">
            <div className="h-12 px-6 sm:px-10 flex items-center justify-center text-base sm:text-lg font-semibold">
              JOIN THE ECOSYSTEM
            </div>
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
