 
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

        <div ref={circleRef} className="absolute -top-6  will-change-transform bg-white rounded-full  w-[100vh] h-screen mx-auto"></div>
        
        <div className=" relative flex justify-center items-center h-[60vh] w-screen h-30vh ">
        <p className="text-black sticky top-10 text-6xl text-center md:text-8xl font-bold md:mb-36 md-10 ">Key Highlights</p>
        </div>

        </div>

        <div>
        <ParallelScroll/>
        </div>

        </div>
    );
}