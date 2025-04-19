import { useRef } from "react";
import GlobalPavSection from "./GlobalPavSection";
import { useSwipeScroll } from "../../../hooks/useSwipeScroll";


export default function CurtainSection() {
    const flagsRef = useRef(null);
    const mainRef = useRef(null);
    const curtainRef = useRef(null); // New ref for the curtain overlay
  
    useSwipeScroll(mainRef, flagsRef, curtainRef); // pass curtainRef into hook
  
    return (
        <div className="relative w-full">
        {/* Curtain Layer (sits above) */}
        <div
  ref={curtainRef}
  className="absolute top-0 left-0 w-full h-full bg-black z-40"
  style={{
    height: "50%",   // Full height of section
  }}
/>

      
        {/* Your actual section (revealed underneath) */}
        <div
          ref={mainRef}
          className="relative z-10 min-h-screen bg-white"
        >
          <GlobalPavSection flagsRef={flagsRef} />
        </div>
      </div>
      
    );
  }
  