import { useRef } from 'react';
import ImageScroller from './ImageScroller';
import { useShowcaseScroll } from '../../../hooks/test_hooks/showcaseScroll';
import bg from '../../../assets/showcasebg.svg?url';
import RainScrollBackground from "../../../hooks/Rainbackground"; // adjust the path

export default function ShowcaseSection() {
  const showcaseRef = useRef(null);
  const imgConRef = useRef(null);

  useShowcaseScroll(showcaseRef, imgConRef);

  return (
    <section
      ref={showcaseRef}
      className="relative h-full w-screen overflow-hidden isolate"
    >
         <RainScrollBackground scrollTargetRef={showcaseRef} />
      {/* Background Image */}
      <img
        alt=""
        src={bg}
        className="absolute inset-0 object-cover object-center w-full h-full -z-10"
      />

      <div  className="w-full h-screen sticky top-0 flex justify-around items-center px-8">
    
      <div className="flex flex-col justify-center space-y-4 w-1/3 text-center text-white">
  <div className="text-8xl font-bold txt">Meet</div>
  <div className="text-8xl font-bold txtcolor" style={{color: '#F5710C'}}>People</div>
  <div className="text-2xl py-10  txtsummary">Meet the right people. Spark the right ideas. <br/> Create the future.</div>
</div>



        {/* Right: Phone Image Scroller */}
        <ImageScroller ref={imgConRef} />
      </div>
    </section>
  );
}
