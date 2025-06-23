 
import { useRef } from "react";
import ParallelScroll from "./ParallelScroll";
import { useDoomScroll } from "../../../hooks/useDoomScroll";

export default function PreFooter() {
    const circleRef= useRef(null);
    const mainRef= useRef(null);
    const headingRef= useRef(null);

    useDoomScroll(mainRef,circleRef,headingRef)
    return(
        <div className=" overflow-x-clip relative ">

        <p ref={headingRef} className=" text-black   sticky flex justify-center items-center  z-10 top-40 text-6xl h-[60vh] w-screen h-30vh text-center md:text-8xl font-bold md:mb-36 md-10 ">Key Highlights</p>

        <div  ref={mainRef} className="flex absolute  top-0 justify-center items-center h-[60vh] bg-white sm:bg-transparent w-screen h-30vh">
        <div ref={circleRef} className="absolute -top-6  will-change-transform bg-white rounded-full  w-[100vh] h-screen mx-auto"></div>
        </div>

        <ParallelScroll/>

        </div>
    );
}