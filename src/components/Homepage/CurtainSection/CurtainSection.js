 
import { useRef } from "react";
import AtendeesSection from "./AttendeesCatSection/AttendeesCatSection";
import GlobalPavSection from "./GlobalPavSection";
import { useSwipeScroll } from "../../../hooks/useSwipeScroll";


export default function CurtainSection() {
    const flagsRef =useRef(null);
    const mainRef = useRef(null);
    useSwipeScroll(mainRef,flagsRef)
    return(
    <div className="relative   min-h-screen  w-full isolate">
 
        {/* <div className=" relative h-fit  w-full z-10 ">
            

        </div> */}
        {/* <div className=" relative bg-white h-[50vh] w-full z-10"></div> */}
        <div ref={mainRef} className="sticky bottom-0 top-10 w-full h-screen  -z-0 ">
            <GlobalPavSection flagsRef={flagsRef}/>
        </div>

    </div>
    );
}