 
import { useRef } from "react";
import ParallelScroll from "./ParallelScroll";
import { useDoomScroll } from "../../../hooks/useDoomScroll";

export default function PreFooter() {
    const circleRef= useRef(null);
    const mainRef= useRef(null);

    useDoomScroll(mainRef,circleRef)
    return(
        <div className=" overflow-x-clip">

        <div  ref={mainRef} className=" relative flex justify-center">

        <div ref={circleRef} className="absolute top-0  will-change-transform bg-white rounded-full w-[100vh] h-screen mx-auto"></div>
        
        <div className=" relative flex justify-center items-center h-[70vh] w-screen">
        <p className="text-black text-6xl md:text-8xl font-bold ">Key Events</p>
        </div>

        </div>

        <div>
        <ParallelScroll/>
        </div>

        </div>
    );
}