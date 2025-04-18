import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CM from "../../../assets/CM.svg?url";
import CMbg from "../../../assets/CMbg.svg?url";
import AtendeesSection from "../CurtainSection/AttendeesCatSection/AttendeesCatSection";

gsap.registerPlugin(ScrollTrigger);

export default function CMSection() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null); // Ref for the whole section to animate background
  const dummyref = useRef(null);
  useEffect(() => {
    // Fade-out effect for "Why Attend" section with scroll
    gsap.fromTo(
      headingRef.current,
      { opacity: 1 },  // Start with full opacity
      {
        opacity: 0.1,  // Fade to 0 (fully transparent)
        scrollTrigger: {
          trigger: dummyref.current,  // Target this element
          start: "top top",  // Fade as soon as it hits the top of the viewport
          end: "bottom bottom",  // End when the bottom of the element hits the center of the viewport
          scrub: 0.8, // Smooth transition with a little delay
          toggleActions: "play reverse play reverse",  // Reverse fade on scroll up
        },
      }
    );

    // Animate gradient color of the section
    gsap.fromTo(
      sectionRef.current,
      {background: `conic-gradient(from 0deg,#F5710C 0%,#F5710C 45%,#018BFD 60%,#018BFD 100%)`}, // Start with the initial radial gradient
      {
        background: 'conic-gradient(from 0deg,#F5710C 0%,#F5710C 45%,#018BFD 60%,#018BFD 100%)',  // Lighter gradient as scroll happ
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",  // Start from the top of the section
          end: "bottom center",  // End when the section reaches the center of the viewport
          scrub: 0.4,  // Smooth gradient transition with a slight delay
        },
      }
    );
  }, []);

  return (
    <div 
    className="w-full text-center pb-00"
  
    >
      <section 
        className="sticky top-0 h-screen w-full my-28 bg-white z-20 flex items-center justify-center overflow-hidden text-black px-4" 
        style={{ backgroundImage: `url(${CMbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
       
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
      <div className="absolute opacity-50 custom-gradient custom-size custom-blur custom-translate rounded-full"></div>

      <div ref={dummyref}
  
  className="w-full text-center py-20 pb-20"
 
>
  <p ref={headingRef} className="text-white text-5xl md:text-9xl font-bold opacity-80 mix-blend-lighten">
    Why Attend
  </p>
</div>
<AtendeesSection/>
    </div>
  );
}
