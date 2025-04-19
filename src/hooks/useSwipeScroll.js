import { useGSAP } from "@gsap/react";
import gsap from "../../gsapconfig";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSwipeScroll(mainRef, flagRef, curtainRef) {
    useGSAP(() => {
      // Set initial position
      gsap.set(flagRef.current, {
        x: "55%",
      });
  
      gsap.set(curtainRef.current, {
        y: "0%",
      });
  
      // Animate flags
      gsap.to(flagRef.current, {
        x: "-85%",
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 5%",
          scrub: 0.8,
        },
      });
  
      // Animate curtain smoothly
      gsap.to(curtainRef.current, {
        y: "-200%",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1.2, // smoother, slower transition
        },
      });
    }, { scope: mainRef });
  }
  
