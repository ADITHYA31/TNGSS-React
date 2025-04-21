import { useGSAP } from "@gsap/react";
import gsap from "../../gsapconfig";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useSwipeScroll(mainRef, flagRef, curtainRef,contentHead) {
    useGSAP(() => {
      // Set initial position
  
      gsap.set(curtainRef.current, {
        y: "0%",
      });
  
      // Animate flags
      gsap.set(flagRef.current,{
        x:'98%',
    })
    gsap.to(flagRef.current,{
        x:'-65%',
        ease:'power3.inOut',
        scrollTrigger:{
            trigger:mainRef.current,
            start:'bottom 70%',
            end:'+=2000',
            scrub:0.7,
            // markers:true,
        }
    })
      // Animate curtain smoothly
      // gsap.to(curtainRef.current, {
      //   y: "-100%",
      //   ease: "power2.inOut",
      //   scrollTrigger: {
      //     trigger: curtainRef.current,
      //     start: "center center",
      //     end: "bottom bottom",
      //     scrub: 1.4, // smoother, slower transition
      //   },
      // });
    }, { scope: mainRef });
  }
  
