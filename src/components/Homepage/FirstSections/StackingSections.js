// StackingSections.js
import useStackingAnimation from "../../../hooks/useStackingAnimation";
import StatsSection from "./StatsSection";
import HeroSection from "./HeroSection";
import { useRef } from 'react';
import CMSection from "./CMSection";

export default function StackingSections() {
    const stackcontainer = useRef(null);
    useStackingAnimation(stackcontainer);

    // Define any class names you wish to use
    const className = "custom-class"; 

    return (
       
        <div ref={stackcontainer} className="relative isolate overflow-clip will-change-transform z-20">
            <HeroSection className={`${className}`}/> 
            <StatsSection className={`${className}`}/>
            <CMSection/> 
          
        </div>
        
    );
}
