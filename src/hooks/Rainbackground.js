import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rainData from "../assets/rain.json";
import rainDataMob from "../assets/rain_mob.json";


import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function RainScrollBackground({ scrollTargetRef }) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useGSAP(() => {
    let totalFrames = 0;
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
 // Add is mobile state
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: isMobile?rainDataMob:rainData ,
    });

    animationRef.current = anim;

    anim.addEventListener("DOMLoaded", () => {
      totalFrames = anim.totalFrames;

      // ONLY setup scrollTrigger after totalFrames is accurate
      ScrollTrigger.create({
        trigger: scrollTargetRef.current,
        start: "top top",
        end: "+=4500",
        scrub: true,
        onUpdate: (self) => {
          const progress = 1 - self.progress; // reverse direction
          anim.goToAndStop(progress * totalFrames, true);
        },
      });
    });


  }, { dependencies:[scrollTargetRef]});

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none opacity-70"
    />
  );
}
