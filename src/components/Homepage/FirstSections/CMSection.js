import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CM from "../../../assets/CM.svg?url";
import CMbg from "../../../assets/CMbg.svg?url";
import AtendeesSection from "../CurtainSection/AttendeesCatSection/AttendeesCatSection";

gsap.registerPlugin(ScrollTrigger);

export default function CMSection() {
 

  return (
    <div 
    style={{
      background: 'linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)',
      borderRadius: '0.75rem',
    }}
    className={`sticky overflow-hidden top-0 w-full h-screen z-10 p-2`}
    >
      <section 
        className="sticky top-0 h-full w-full bg-white z-20 flex items-center justify-center overflow-hidden text-black px-4" 
        style={{ backgroundImage: `url(${CMbg})`, backgroundSize: 'cover', backgroundPosition: 'center',    borderRadius: '0.95rem', }}
       
      >
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-left w-1/2 text-40px space-y-4 px-6 ">
          <p className="w-full px-4 text-4xl">
            “The government is focusing on <b>Integrated Industrial Development</b> in the State, and the contribution of StartupTN to this effort is significant. StartupTN’s activities align perfectly with the State Government’s initiatives to make <b>Tamil Nadu</b> the <span className="bg-gradient-to-r from-blue-500 to-blue-200 text-black px-2 py-0.5 rounded-md">
  Number One State
</span>
 in all fields.”
          </p>
          <span className="font-semibold text-left" style={{ fontSize: '3rem', width: '90%' }}>- Thiru. M.K. Stalin</span>
          <span className="text-lg text-left text-xl" style={{ width: '90%' }} >Hon'ble Chief Minister of Tamil Nadu</span>
        </div>

        {/* Full-Sized Image */}
        <div className="w-1/2 h-full flex items-center justify-center">
          <img
            alt=""
            src={CM}
            className="h-full w-auto object-contain object-center z-10"
          />
        </div>
      </section>
      {/* <div ref={sectionRef}
       style={{
        transformOrigin: "center",
      }} className="absolute opacity-50 custom-gradient custom-size custom-blur custom-translate rounded-full"></div>

      <div ref={dummyref}
  
  className="w-full text-center py-20 pb-20"
 
>
  <p ref={headingRef} className="text-white text-6xl md:text-9xl opacity-80 mix-blend-lighten gradient-text-attend">
    Why Attend
  </p>
</div> */}
{/* <AtendeesSection/> */}
    </div>
  );
}
