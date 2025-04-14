import { useGSAP } from "@gsap/react";
import gsap from "../../../gsapconfig";


 export function useParlx(mainRef){
    useGSAP(()=> {

        let runAnim = gsap.timeline({

            scrollTrigger:{
                trigger:mainRef.current,
                start:"top top",
                end:"+=3000",
                scrub:1.2,
                pin:true,
                // markers:true,
            }
        }
        );

        runAnim.add([

            gsap.set('.flags',{
                x:'90%'
            
            }),
            gsap.to('.flags',{
                x:'-3%',
                ease: "power2.inOut",
                // onComplete: function() {

                // }
            }),

        ]).to({},{
            duration:0.1,
        })
        // .add([

        //     gsap.to('',{

        //     })

        // ])
    

    },{scope: mainRef,dependencies:[mainRef]});
 }