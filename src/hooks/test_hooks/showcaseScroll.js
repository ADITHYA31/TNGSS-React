import { useGSAP } from "@gsap/react";
import gsap from "../../../gsapconfig";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function useShowcaseScroll(mainRef, imagesRef) {
  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "+=3500",
        scrub: true,
        pin: true,
      },
    });
    
  


    const steps = [
      { txt: "Meet", color: "People",summary : "Meet the right people. Spark the right ideas.</br> Create the future." },
      { txt: "Find", color: "Spaces",summary : " Your next investor, co-founder, or mentor</br> could be right across the table." },
      { txt: "Go Beyond", color: "Stage",summary : "Great ideas don’t just happen on stage.</br> Here’s where they get real." },
    ];

    steps.forEach((step, index) => {
      const stepLabel = `step-${index}`;

      timeline.addLabel(stepLabel);

      timeline.to(imagesRef.current, {
        y: `-${(index ) * 25}%`,
        ease: "power3.inOut",
        duration: 1,
      }, stepLabel);

      timeline.to(".txt", {
        text: step.txt,
        ease: "power3.inOut",
        duration: 1,
      }, stepLabel);

      timeline.to(".txtcolor", {
        text: step.color,
        ease: "power3.inOut",
        duration: 1,
      }, stepLabel);
      timeline.to(".txtsummary", {
        text: step.summary,
        ease: "power3.inOut",
        duration: 1,
      }, stepLabel);
    });
  }, { scope: mainRef });
}
