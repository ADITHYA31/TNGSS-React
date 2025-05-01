import { useRef } from "react";
// import ParallelScroll from "./ParallelScroll";
// import { useDoomScroll } from "../../../hooks/useDoomScroll";
import backgroundImage from '../../assets/img/usp-background.png';
import { useDoomScroll } from "../../hooks/useDoomScroll";
import ParallelScroll from "./ParallelScroll";

export default function USPSection() {
    const circleRef = useRef(null);
    const mainRef = useRef(null);

    useDoomScroll(mainRef, circleRef);
    return (
        <div className="overflow-x-clip" style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // This makes the background fixed
            minHeight: '80vh',
        }}>

            <div ref={mainRef} className="relative flex justify-center">
                <div className="relative flex justify-center items-center h-[60vh] w-screen h-30vh ">
                    <p className="text-white sticky top-10 text-6xl text-center md:text-8xl font-bold md:mb-36 md-10">Key Highlights</p>
                </div>
            </div>

            <div>
                <ParallelScroll />
            </div>

        </div>
    );
}
