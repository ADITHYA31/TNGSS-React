import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rainData from "../assets/rain.json";

gsap.registerPlugin(ScrollTrigger);

export default function RainScrollBackground({ scrollTargetRef }) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let totalFrames = 0;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: rainData,
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

    return () => {
      anim.destroy();
    };
  }, [scrollTargetRef]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none opacity-70"
    />
  );
}
