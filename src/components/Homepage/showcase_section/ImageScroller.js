import { forwardRef } from 'react';
import meetppl from '../../../assets/meetppl.svg'
import meetspcs from '../../../assets/meetingspaces.svg'
import byndstage from '../../../assets/beyondstage.svg'

// Use forwardRef to pass down the ref to the parent component
const ImageScroller = forwardRef(({ images, className = '' }, forwardedRef) => {
    return (
        <div
            ref={forwardedRef}
            className={`relative w-[30vw] h-[75vh] overflow-hidden rounded-2xl border-3 border-white rotate-12 ${className}`}
        >
            <div className="flex flex-col text-4xl text-black will-change-transform">
                {/* Image Section 1 */}
                <div className="relative w-full h-[75vh] bg-white">
                    <img
                        src={meetppl}
                        className="object-cover w-full h-full"
                        alt="Meet People"
                    />
                </div>
                {/* Image Section 2 */}
                <div className="relative w-full h-[75vh] bg-white">
                    <img
                        src={meetspcs}
                        className="object-cover w-full h-full"
                        alt="Meeting Spaces"
                    />
                </div>
                {/* Image Section 3 */}
                <div className="relative w-full h-[75vh] bg-white">
                    <img
                        src={byndstage}
                        className="object-cover w-full h-full object-center"
                        alt="Beyond Stage"
                    />
                </div>
                {/* Placeholder Section */}
                <div className="min-w-full h-[75vh] bg-white flex justify-center items-center">
                    <p>4</p>
                </div>
            </div>
        </div>
    );
});

export default ImageScroller;
