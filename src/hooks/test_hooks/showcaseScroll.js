import { useGSAP } from "@gsap/react";
import gsap from "../../../gsapconfig";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";
import rectangleAnimation from "../../assets/reactangl2.json";

gsap.registerPlugin(ScrollTrigger);

export function useShowcaseScroll(mainRef, txtRef, txtColorRef, summaryRefDesktop, summaryRefMobile, lottieRef) {

  useGSAP(() => {
    if (
      !mainRef?.current ||
      !txtRef?.current ||
      !txtColorRef?.current ||
      !summaryRefDesktop?.current ||
      !summaryRefMobile?.current ||
      !lottieRef?.current
    ) {
      return;
    }

    const isMobile = window.innerWidth < 768;

    const lottieInstance = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: rectangleAnimation,
    });

    lottieInstance.addEventListener("DOMLoaded", () => {
      const totalFrames = lottieInstance.getDuration(true);
      const frameObj = { frame: 0 };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "bottom bottom",
          end:  "+=1000",
          scrub: true,
          pin: true,
        },
      });

      timeline.to(frameObj, {
        frame: totalFrames - 1,
        ease: "none",
        onUpdate: () => {
          const current = Math.round(frameObj.frame);
          lottieInstance.goToAndStop(current, true);
        
          const updateText = (txt, colorTxt, summaryTxt) => {
            txtRef.current.innerText = txt;
            txtColorRef.current.innerText = colorTxt;
            if (summaryRefDesktop.current) summaryRefDesktop.current.innerText = summaryTxt;
            if (summaryRefMobile.current) summaryRefMobile.current.innerText = summaryTxt;
          };
        
          if (current < totalFrames * 0.33) {
            updateText(
              "Meet",
              "People",
              "Join global speakers, investors, accelerators, and startup enablers who are redefining the future of innovation and growth."
            );
          } else if (current >= totalFrames * 0.33 && current < totalFrames * 0.66) {
            updateText(
              "Meeting",
              "Spaces",
              "Collaborative spaces designed for meaningful connections, where ideas flourish and partnerships take shape in real-time."
            );
          } else if (current >= totalFrames * 0.66 && current < totalFrames * 0.99) {
            updateText(
              "Beyond",
              "The Stage",
              "Great ideas don’t just happen on stage. Here’s where they get real."
            );
          }
        }
        
      });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    });

    return () => {
      lottieInstance?.destroy();
    };
  }, { scope: mainRef });
}




// 
// timeline.to(
//   txtRef.current,
//   {
//     text: step.txt,
//     ease: "power3.inOut",
//     duration: 1,
//   },
//   label
// );

// timeline.to(
//   txtColorRef.current,
//   {
//     text: step.color,
//     ease: "power3.inOut",
//     duration: 1,
//   },
//   label
// );

// timeline.to(
//   summaryRef.current,
//   {
//     text: step.summary,
//     ease: "power3.inOut",
//     duration: 1,
//   },
//   label
// );