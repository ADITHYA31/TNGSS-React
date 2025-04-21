import { useGSAP } from "@gsap/react";
import gsap from "../../../gsapconfig";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function useShowcaseScroll(mainRef, imagesRef, txtRef, txtColorRef, summaryRef) {
  useGSAP(() => {
    if (!mainRef.current || !imagesRef.current) return;

    const isMobile = window.innerWidth < 768;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: isMobile ? "+=1500" : "+=3500",
        scrub: true,
        pin: true
      },
    });

    const steps = [
      {
        txt: "Meet",
        color: "People",
        summary:
          "Join global speakers, investors, accelerators, and startup enablers who are redefining the future of innovation and growth.",
      },
      {
        txt: "Meeting",
        color: "Spaces",
        summary:
          "Collaborative spaces designed for meaningful connections, where ideas flourish and partnerships take shape in real-time.",
      },
      {
        txt: "Beyond",
        color: "The Stage",
        summary:
          "Great ideas don’t just happen on stage. Here’s where they get real.",
      },
    ];

    steps.forEach((step, index) => {
      const label = `step-${index}`;

      timeline.addLabel(label);

      timeline.to(
        imagesRef.current,
        {
          y: `-${index * (isMobile ? 40 : 25)}%`,
          ease: "power3.inOut",
          duration: 1,
        },
        label
      );

      if (txtRef.current && txtColorRef.current && summaryRef.current) {
        timeline.to(
          txtRef.current,
          {
            text: step.txt,
            ease: "power3.inOut",
            duration: 1,
          },
          label
        );

        timeline.to(
          txtColorRef.current,
          {
            text: step.color,
            ease: "power3.inOut",
            duration: 1,
          },
          label
        );

        timeline.to(
          summaryRef.current,
          {
            text: step.summary,
            ease: "power3.inOut",
            duration: 1,
          },
          label
        );
      }
    });

    // Delay refresh to let layout settle
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);
  }, { scope: mainRef });
}
