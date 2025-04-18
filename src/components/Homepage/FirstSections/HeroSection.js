import { useRef } from 'react';
import Herobg from '../../../assets/herobg.svg?url'
import herotext from '../../../assets/hero.svg?url'
import avatarcir from '../../../assets/avatarcir.svg?url'
import CTAButton from '../../Elements/CTAButton';
import '../../Elements/custom.css'


export default function HeroSection({ className = '',ref }) {
  const heroRef = useRef(null);
  
  return (
    <section 
      ref={heroRef} 
      className={`relative flex flex-col sticky top-0  w-screen h-screen bg-amber-1000 isolate  ${className} justify-center items-center`}
      id="hero-section"

    >
      <img
        alt=''
        fill
        src={Herobg}
        quality={100}
        priority
        className=' object-cover object-center -z-10'
      />
      {/* <div className='relative h-96 w-96 rounded-full z-10 bg-radial from-[#018BFD]  to-transparent blur-3xl opacity-60'/> */}
      {/* <div className='relative h-96 w-96 rounded-full z-10 bg-linear-0 from-red-400 to-blue-400 blur-xl'/> */}
    <div className='herotxt absolute  z-20 w-7xl h-1/2 will-change-transform'>
      <img
      alt=''
      fill
      priority
      src={herotext}
      className='object-center'
      />
    </div>
    <div className=' absolute bottom-0 text-white text-2xl flex justify-between  mt-auto w-full py-3 pb-8 px-12 '>
      <div className=' flex flex-col'>
      <p className='border-amber-700 pb-2'>3-4 May 2025</p>
      <p className='pt-2'>Codissia, Coimbatore</p>
      </div>

     
      <CTAButton src="/#" className=" rounded-2xl ">
            <div className="w-60 h-10 px-6 py-7 flex items-center justify-center "> REGISTER NOW</div>
        </CTAButton>

      <div className='flex gap-3'>
        <div className='  w-28 relative'>

        <img
        src= {avatarcir}
        fill
        className=' object-fill  object-center'
        />
        </div>
      <div>
        <p className='font-bold'>205K+</p>
        <p className=' text-white/50'>Attendees</p>
      </div>
      </div>

    </div>
     
    </section>
  );
}