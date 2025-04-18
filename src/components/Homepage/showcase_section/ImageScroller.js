// components/ImageScroller.jsx
import { forwardRef } from 'react';
import meetppl from '../../../assets/meetppl.svg?url';
import meetspcs from '../../../assets/meetingspaces.svg?url';
import byndstage from '../../../assets/beyondstage.svg?url';

const ImageScroller = forwardRef(function ImageScroller(_, ref) {
  return (
    <div className="relative  w-1/4 h-2/3 overflow-hidden rounded-2xl border-4 border-white bg-white transform rotate-12">
      <div
        ref={ref}
        className="flex flex-col will-change-transform"
        style={{ height: '400vh' }} // 3 images x full screen height
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
