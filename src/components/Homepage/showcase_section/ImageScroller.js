import { forwardRef } from 'react';
import meetppl from '../../../assets/meetppl.svg?url'
import meetspcs from '../../../assets/meetingspaces.svg?url'
import byndstage from '../../../assets/beyondstage.svg?url'


export default function ImageScroller({images,className='',ref}) {
    // const className = classNamee;
    // const imgChildRef = useRef(null);
    return(
        <div className={` relative w-[30vw] h-[var(--frame-height)]  [--frame-height:75vh]  overflow-hidden rounded-2xl border-3 border-white rotate-12   ${className}`}>
            <div ref={ref} className="flex flex-col text-4xl text-black will-change-transform">
                <div className="relative w-full h-[var(--frame-height)] bg-white">
                    <img
                    src={meetppl}
                    fill
                    className='object-cover'
                    />
                </div>
                <div className="relative w-full h-[var(--frame-height)] bg-white">
                    <img
                    src={meetspcs}
                    fill
                    className='object-cover '
                    />
                </div>
                <div className="relative w-full h-[var(--frame-height)] bg-white">
                    <img
                        src={byndstage}
                        fill
                        className='object-cover object-center'
                    />
                </div>
                <div className="min-w-full h-[var(--frame-height)] bg-white flex justify-center items-center">4</div>
            </div>
        </div>
    );
}
