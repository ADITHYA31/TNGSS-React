// components/ImageScroller.jsx
import { forwardRef } from 'react';
import meetppl from '../../../assets/meetppl.svg?url';
import meetspcs from '../../../assets/meetingspaces.svg?url';
import byndstage from '../../../assets/beyondstage.svg?url';

const ImageScroller = forwardRef(function ImageScroller({ mobile = false }, ref) {
    return (
      <div
        className={`relative  ${mobile ? ' w-3/4' : 'md:w-1/4 '} mt-10 md:mt-0 overflow-hidden rounded-2xl md:border-4 border-white bg-white transform rotate-12`}
        style={{ height: mobile ? '40%' : '60%' }}
      >
        <div
          ref={ref}
          className={`flex flex-col will-change-transform ${mobile ? 'block' : 'hidden sm:flex'}`}
          style={{ height: mobile ? '200vh' : '400vh' }}
        >
          {[meetppl, meetspcs, byndstage].map((img, i) => (
            <div key={i} className="w-full h-screen">
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    );
  });
  

export default ImageScroller;
