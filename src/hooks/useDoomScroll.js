import gsap from "../../gsapconfig";
import { useGSAP } from "@gsap/react";


export function useDoomScroll(mainRef,circleRef){
    useGSAP(()=>{

        gsap.fromTo(circleRef.current,{
            scale:0.4,
        },{
            scale:3,
            scrollTrigger:{
                trigger:mainRef.current,
                start:'top bottom',
                end:'bottom 35%',
                scrub:true,
                // markers:true,
            }
        })

    },{scope:mainRef,dependencies:[mainRef]})
}
