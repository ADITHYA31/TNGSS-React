import { useRef, useEffect } from 'react';
import Herobg from '../../../assets/herobg.svg?url'
import startupwhite from '../../../assets/startup-white.png'
import herobannerlogo from '../../../assets/Group.svg?url'
import vector from '../../../assets/Vector.svg?url'
import CTAButton from '../../Elements/CTAButton';
import '../../Elements/custom.css';

export default function HeroSection({ className = '' }) {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className={`relative flex flex-col sticky top-0 w-screen h-screen bg-amber-1000 isolate ${className} justify-center items-center bg-cover bg-center`}
      id="hero-section"
      style={{
         backgroundImage: `url(${Herobg})`,
       }}>
        <video 
          // ref={videoRef}
          className=' absolute w-full h-full inset-0 z-10 object-cover opacity-25'
          src='../../assets/hero-vid.mp4'
          autoPlay
          muted
          playsInline
          loop
        >
        </video>
    
      {/* <img
        alt=''
        fill
        src={Herobg}
        quality={100}
        priority
        className=' object-cover object-center -z-10'
        style={{
          
    maxHeight: '800px'

        }}
      /> */}
      {/* <div className='relative h-96 w-96 rounded-full z-10 bg-radial from-[#018BFD]  to-transparent blur-3xl opacity-60'/> */}
      {/* <div className='relative h-96 w-96 rounded-full z-10 bg-linear-0 from-red-400 to-blue-400 blur-xl'/> */}
      

      <div className="animate-floatUpBounce herotxt relative z-20 h-30vh h-[50vh] will-change-transform flex justify-center items-center text-center md:mb-10 px-4 md:px-10" style={{ width: '100%',flexDirection: 'row' }}>
  
  {/* StartupTN Top Logo */}
  <div className="mr-2 logo-3d-wrapper">
  <img
    alt="StartupTN Logo"
    src={herobannerlogo}
    style={{ maxWidth: '300px', minWidth: '220px' }}
    className="object-contain logo-3d-img"
  />
</div>



  {/* Main Layout */}
  <div className="flex items-center  w-full max-w-6xl" style={{
    flexDirection: 'column',
    textAlign: 'left',
    justifyContent: 'center',
    maxWidth: '380px'
  }}>
    
    {/* Left Graphic */}
    <div className="hidden md:block mr-6 w-full">
      <img
        src={startupwhite}
        alt="Decorative Shape"
        className="max-w-[200px] object-contain"
        style={{ maxWidth: '300px' }}
      />
    </div>

    {/* Text Block */}
    <div className="flex flex-col items-start md:items-start text-left w-full">
      <p className="text-white font-bold text-left leading-tight">
        <span className="font-montserrat font-bold block text-4xl md:text-7xl">GLOBAL</span>
        <span className="font-montserrat  block text-2xl md:text-6xl">STARTUP</span>
        <span className="font-montserrat  block text-2xl md:text-5xl">SUMMIT -2025</span>
      </p>
      <p className="text-white text-xl md:text-2xl tracking-widest mt-2 animate-floatUpBounce">
        DISRUPT TO RISE
      </p>
    </div>

 
</div>
      
    </div>
    <p className=' text-center text-3xl mt-6'>October, 2025 | Codissia, Coimbatore</p>
    <div className=' absolute bottom-0 text-white text-2xl flex justify-center align-end  mt-auto w-full py-3 pb-8 px-12 z-20 '>
      <CTAButton src="https://startuptn.getkameleon.com" className=" rounded-2xl ">
             <div className="w-70 h-10 px-6 py-7 flex items-center justify-center "><img className="px-2" src={vector}/> REGISTER NOW</div>
         </CTAButton>

    </div>
     
    </section>
  );
}
