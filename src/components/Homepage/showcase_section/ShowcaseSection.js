import { useRef,useState,useEffect } from 'react';
import ImageScroller from './ImageScroller';
import { useShowcaseScroll } from '../../../hooks/test_hooks/showcaseScroll';
import bg from '../../../assets/showcasebg.svg?url';
import RainScrollBackground from "../../../hooks/Rainbackground"; // adjust the path
import logo from '../../../assets/logobutton.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function ShowcaseSection() {
    const showcaseRef = useRef(null);
    const imgConRef = useRef(null);
    const txtRef = useRef(null);
const txtColorRef = useRef(null);
const summaryRef = useRef(null);

useShowcaseScroll(showcaseRef, imgConRef, txtRef, txtColorRef, summaryRef);

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const timeout = setTimeout(() => {
            ScrollTrigger.refresh();
          }, 800); // Delay to ensure layout is painted
        
          return () => clearTimeout(timeout);
      }, []);

     

    // useShowcaseScroll(showcaseRef, imgConRef);

    return (
        <section
            ref={showcaseRef}
            className="relative h-[300vh] w-screen overflow-hidden isolate"
        >
            <RainScrollBackground scrollTargetRef={showcaseRef} />
            {/* Background Image */}
            <img
                alt=""
                src={bg}
                className="absolute inset-0 object-cover object-center w-full h-full -z-10"
            />

            {/* <div className="w-full h-screen sticky top-0 flex justify-around items-center px-8">

                <div className="flex flex-col justify-center space-y-4 w-full md:w-1/3 text-center text-white">
                    <div className="text-4xl md:text-8xl font-bold txt">Meet</div>
                    <div className="text-4xl  md:text-8xl font-bold txtcolor" style={{ color: '#F5710C' }}>People</div>

                    <a className='text-center flex justify-center' href=''><img style={{ maxWidth: '400px' }} src={logo} /></a>

                    <div className="text-2xl py-10  txtsummary">Meet the right people. Spark the right ideas. <br /> Create the future.</div>
                </div>


                <ImageScroller ref={imgConRef} />
            </div> */}

{isMobile === null ? null : (
  isMobile ? (
    <div className="min-h-screen w-full flex flex-col items-center text-center text-white px-6 py-10 relative z-10">
    <div className="sticky top-0 h-screen flex flex-col items-center text-center text-white px-6 py-10">
    <div ref={txtRef} className="text-4xl font-bold">Meet</div>
<div ref={txtColorRef} className="text-4xl font-bold" style={{ color: '#F5710C' }}>People</div>
<ImageScroller ref={imgConRef} mobile />
      <img className="mt-4 w-3/4 max-w-xs" src={logo} alt="CTA Button" />
<div ref={summaryRef} className="text-xl py-4 leading-relaxed">
  Meet the right people. Spark the right ideas.<br />Create the future.
</div>
{/* 
      <div className="text-4xl font-bold txt">Meet</div>
      <div className="text-4xl font-bold txtcolor mb-20" style={{ color: '#F5710C' }}>People</div>
      
      <div className="text-xl py-4 txtsummary leading-relaxed">
        Meet the right people. Spark the right ideas.<br />Create the future.
      </div> */}
    </div>
  </div>
  ) : (
    <div className="hidden md:flex w-full h-screen sticky top-0 justify-around items-center px-8 z-10">
    <div className="flex flex-col justify-center space-y-4 w-full md:w-1/3 text-white text-center">
    <div ref={txtRef} className="text-6xl font-bold">Meet</div>
      <div ref={txtColorRef} className="text-6xl font-bold" style={{ color: '#F5710C' }}>
        People
      </div>
      <a className="flex justify-center" href="">
        <img className="w-3/4 max-w-md" src={logo} alt="CTA Button" />
      </a>
      <div ref={summaryRef} className="text-lg py-6 leading-relaxed">
        Meet the right people. Spark the right ideas. <br /> Create the future.
      </div>
    </div>

    <ImageScroller ref={imgConRef} />
  </div>
  )
)}

            


        </section>
    );
}
