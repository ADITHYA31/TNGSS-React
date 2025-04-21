import { useGSAP } from "@gsap/react";
import gsap from "../../../gsapconfig";

export function useParlx(mainRef) {
  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    const startX = isMobile ? '5%' : '55%';
    const endX = isMobile ? '-10%' : '-5%';
    const endscroll = isMobile ? '+=1500' : '+=100';

    let runAnim = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: endscroll,
        scrub: 1.2,
        pin: isMobile ? false :true,
        // markers: true,
      }
    });

    runAnim
      .add([
        gsap.set('.flags', { x: startX }),
        gsap.to('.flags', {
          x: endX,
          ease: "power4.inOut"
        })
      ])
      .to({}, { duration: 0.1 });

  }, { scope: mainRef, dependencies: [mainRef] });
}
