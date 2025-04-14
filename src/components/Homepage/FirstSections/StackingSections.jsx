'use client'
import useStackingAnimation from "@/hooks/useStackingAnimation";
import StatsSection from "./StatsSection";
import HeroSection from "./HeroSection";
import { useRef } from 'react';
import CMSection from "./CMSection";


export default function StackingSections() {
    const stackcontainer = useRef(null);
    useStackingAnimation(stackcontainer);

    const className = "custom-class"; 

    return(
    <div ref={stackcontainer} className="relative isolate overflow-clip bg-black will-change-transform">
        <HeroSection className={`${className}`}/> 
        <StatsSection className={`${className}`}/>
        <CMSection/> 
    </div>
    );

}