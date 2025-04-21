import { useRef } from 'react';
import Herobg from '../../../assets/herobg.svg?url'
import herotext from '../../../assets/Nav_logo.png'
import avatarcir from '../../../assets/avatarcir.svg?url'
import vector from '../../../assets/Vector.svg?url'
import CTAButton from '../../Elements/CTAButton';
import '../../Elements/custom.css'


export default function HeroSection({ className = '',ref }) {
  const heroRef = useRef(null);
  
  return (
    <section 
      ref={heroRef} 
      className={`relative flex flex-col sticky top-0  w-screen h-screen bg-amber-1000 isolate  ${className} justify-center items-center bg-cover bg-center`}
      id="hero-section"
      style={{
         backgroundImage: `url(${Herobg})`,
       }}>
        <video className=' absolute w-full h-full inset-0 z-10 object-cover opacity-25'
        src='../../assets/hero-vid.mp4'
        // width="100%"
        // height="100%"
        // controls
        autoPlay
        muted
        playsInline
        loop
        // preload='auto'


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
      
    <div className='herotxt absolute  z-20  h-1/2 will-change-transform flex flex-col max-w-6xl' style={{width: '75%'}}>
      <img
      alt=''
      fill
      priority
      src={herotext}
      style={{
          
        maxWidth: '50vw'
    
            }}
      className='object-center '
      />
      <p className=' text-center text-3xl mt-6'>October,2025 | Codissia, Coimbatore</p>
    </div>
    <div className=' absolute bottom-0 text-white text-2xl flex justify-center align-end  mt-auto w-full py-3 pb-8 px-12 z-20 '>
      <CTAButton src="https://startuptn.getkameleon.com" className=" rounded-2xl ">
             <div className="w-70 h-10 px-6 py-7 flex items-center justify-center "><img className="px-2" src={vector}/> REGISTER NOW</div>
         </CTAButton>
      {/* <div className=' flex flex-col'>
      <p className='border-amber-700 pb-2'> October, 2025</p>
     
      </div>
  
     <div className='flex flex-col text-center items-center justify-center '>
     <p
     style={{
     transform: `translateY(-100px)`,
     }}
      className='py-4 text-3xl font-semibold   '>Codissia, Coimbatore</p>

     </div> */}
     
      {/* <div className='flex gap-3'>
        <div className='  w-28 relative'>

        <img
        src= {avatarcir}
        fill
        className=' object-fill  object-center'
        />
        </div>
      <div>
        <p className='font-bold'>30K+</p>
        <p className=' text-white/50'>Attendees</p>
      </div>
      </div> */}

    </div>
     
    </section>
  );
}