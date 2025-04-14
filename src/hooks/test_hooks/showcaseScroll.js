
import gsap from "@/lib/gsapconfig";
import { useGSAP } from "@gsap/react";


export function useShowcaseScroll(mainRef,imagesRef){

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: mainRef.current,
                start:'top top',
                end:'+=4500',
                scrub:true,
                // markers:true,
                pin:true,
            }
        })

        tl.add([
            // gsap.to(mainRef.current,{
            //     opacity:0,
            // }),
            gsap.to(imagesRef.current,{
                delay:0.2,
                ease:'power4.inOut',
                y: '-25%',
            }),
            gsap.to('.txt',{
                delay:0.2,
                text:'meeting',
            }),
            gsap.to('.txtcolor',{
                delay:0.2,
                text:'spaces',
            })
        ]).add([
            gsap.to(imagesRef.current,{
                delay:0.2,
                
                ease:'power4.inOut',
                 y: '-50%'
            }),
            gsap.to('.txt',{
                delay:0.2,
                text:'Beyond',
            }),
            gsap.to('.txtcolor',{
                delay:0.2,
                
                text:'The stage',
            })
        ]).add([
            gsap.to({},{duration:0.2,ease:'power4.inOut'})
        ])
        // .add([
        //     gsap.to(imagesRef.current,{
        //         delay:0.3,
        //         ease:'power2.out',
        //         y: '-75%'
        //     }),
        // ])

    },{scope:mainRef,dependencies:[mainRef]});

}