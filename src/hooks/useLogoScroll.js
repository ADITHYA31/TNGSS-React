import gsap from "@/lib/gsapconfig";
import { useGSAP } from "@gsap/react";

export default function useLogoScroll(logosRef) {

    useGSAP(()=>{
        const tl= gsap.timeline({
            scrollTrigger:{
                trigger:logosRef.current,
                start:'top bottom',
                // end:'bottom top',
                scrub:0.8,
                // markers:true
            }
        })
        tl.to('.row1',{
            x:'-40%',
            ease:'power3.inOut',
        },0)
        tl.to('.row2',{
            x:'40%',
            ease:'power3.inOut',
        },0)
    },{scope:logosRef,dependencies:[logosRef]})
}