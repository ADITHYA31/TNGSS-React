import { useShowcaseScroll } from '../../../hooks/test_hooks/showcaseScroll';
import bg from '../../../assets/showcasebg.svg?url'
import { useRef } from 'react';
import ImageScroller from './ImageScroller';

export default function ShowcaseSection() {
    const showcaseRef = useRef(null);
    const imgcon=useRef(null)
    useShowcaseScroll(showcaseRef,imgcon);

    return(
        <section ref={showcaseRef} className=" relative min-h-screen w-screen overflow-hidden isolate">
            <img
            alt=''
            src={bg}
            fill
            className=' object-cover object-center -z-10'
            />
            <div className=' w-full h-full flex justify-around items-center'>
            <div className=' flex flex-col items-center'>
            <div className='w-full h-full overflow-hidden '>
                <span className='txt text-7xl font-semibold '> Meet</span>
            </div>
            <div className='w-full h-full overflow-hidden'>
                <span className='txtcolor text-7xl font-semibold text-[#F5710C] '>People</span>
            </div>
            </div>
            <ImageScroller ref={imgcon} />
            </div>
        </section>
    );
}
