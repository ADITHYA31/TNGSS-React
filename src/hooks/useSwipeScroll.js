import { useGSAP } from "@gsap/react";
import gsap from "../../gsapconfig";

export function useSwipeScroll(mainRef,flagRef){
    
    useGSAP(()=>{
        gsap.set(flagRef.current,{
            x:'85%',
        })
        gsap.to(flagRef.current,{
            x:'-95%',
            ease:'power3.inOut',
            scrollTrigger:{
                trigger:mainRef.current,
                start:'bottom 95%',
                end:'+=1500',
                scrub:0.8,
                // markers:true,
            }
        })
    },{scope:mainRef,dependencies:[mainRef]})
}