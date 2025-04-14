import gsap from "@/lib/gsapconfig";
import { useGSAP } from "@gsap/react";

export function useSwipeScroll(mainRef,flagRef){
    
    useGSAP(()=>{
        gsap.set(flagRef.current,{
            x:'95%',
        })
        gsap.to(flagRef.current,{
            x:'-85%',
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