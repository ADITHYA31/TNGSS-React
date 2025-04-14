// components/HeroSection.js
'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Herobg from 'public/herobg.svg'
import herotext from 'public/hero.svg'



export default function HeroSection({ className = '' }) {
  const heroRef = useRef(null);
  
  return (
    <section 
      ref={heroRef} 
      className={` flex sticky top-0  w-screen h-screen bg-amber-1000 isolate  ${className} justify-center items-center`}
      id="hero-section"

    >
      <Image
        alt=''
        fill
        src={Herobg}
        quality={100}
        fetchPriority='high'
        className=' object-fill object-center -z-10'
      />
      <div className='relative h-96 w-96 rounded-full z-10 bg-radial from-[#018BFD]  to-transparent blur-3xl opacity-60'/>
      {/* <div className='relative h-96 w-96 rounded-full z-10 bg-linear-0 from-red-400 to-blue-400 blur-xl'/> */}

      {/* <Image
      alt=''
      fill
      src={herotext}
      className=' object-cover object-center'
      /> */}
     
    </section>
  );
}