import { useGSAP } from "@gsap/react";
import gsap from "../../gsapconfig";

export default function useStackingAnimation(containerRef) {

    useGSAP(()=>{

        // const tl = gsap.timeline({
        //     scrollTrigger:{
        //         trigger:'#stats-section',
        //         start: 'top bottom', // Start when the top of the section enters the viewport
        //         end: '20% center', // End when the bottom of the section is 80% in the viewport
        //         scrub: true,
        //         // markers:true
        //     }
        // })
        // gsap.set('.test',{
        //     y:'-100%'
        // },)
        gsap.to(containerRef.current,{
            scale:0.95,
            borderRadius: '0 0 50px 50px',
            ease:'power2.inout',
            scrollTrigger:{
                trigger:containerRef.current,
                start:'bottom 95%',
                end:'bottom 5%',
                scrub:0.8,
                // markers:true,
                // pin:true,
            }
        })

        // gsap.to('.bgimage',{
        //     // opacity:0.4,
        //     // scale:0.5,
        //     ease:'power2.inOut',
        //     scrollTrigger: {
        //         trigger: '#stats-section',
        //         start: 'top bottom', // Start when the top of the section enters the viewport
        //         end: '20% center', // End when the bottom of the section is 80% in the viewport
        //         scrub: true, // Enable scrubbing for smoother animation
        //         // markers:true,
        //     }
        // })

        gsap.to('.herotxt',{
            y:'-185px',
            scale:0.6,
            opacity:0.3,
            ease:'power2.inOut',
            scrollTrigger:{
                trigger: containerRef.current,
                start:'top top',
                end:'+=650',
                scrub:0.6
            }
        })

        // .set(containerRef,{
        //     inner
        // })

        // gsap.timeline({}).add({}).add


    },{scope: containerRef.current,dependencies:[containerRef]});
}