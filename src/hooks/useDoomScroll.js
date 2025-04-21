import gsap from "../../gsapconfig";
import { useGSAP } from "@gsap/react";

export function useDoomScroll(mainRef, circleRef) {
  useGSAP(() => {
    const isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint

    gsap.fromTo(
      circleRef.current,
      {
        scale: 0.4,
      },
      {
        scale: isMobile ? 1.2 : 3, // Less scale on mobile
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top bottom",
          end: "bottom 75%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, { scope: mainRef, dependencies: [mainRef] });
}
