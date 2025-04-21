import { useRef } from 'react';
import Herobg from '../../../assets/herobg.svg?url';
import herotext from '../../../assets/hero.svg?url';
import avatarcir from '../../../assets/avatarcir.svg?url';
import vector from '../../../assets/Vector.svg?url';
import CTAButton from '../../Elements/CTAButton';
import '../../Elements/custom.css';

export default function HeroSection({ className = '' }) {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className={`relative flex flex-col sticky top-0 w-screen h-screen bg-amber-1000 isolate ${className} justify-center items-center bg-cover bg-center h-60vh`}
      id="hero-section"
      style={{
        backgroundImage: `url(${Herobg})`,
      }}
    >
      {/* Hero Text */}
      <div className="herotxt absolute z-20 h-1/2 will-change-transform w-11/12 md:w-3/4 h-30vh">
        <img alt="" fill priority src={herotext} className="object-center" />
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 w-full px-4 md:px-12 md:pb-6 text-white flex flex-col  md:flex-row justify-between items-center md:items-end space-y-6 md:space-y-0 md:space-x-0 h-30vh">
        {/* Left - Date */}
        <div className="text-xl md:text-2xl md:mb-5 mb-6">
          <p className="border-amber-700 md:pb-2">October, 2025</p>
        </div>

        {/* Center - Location & Button */}
        <div className="flex flex-col items-center justify-center">
          <p
            className="text-xl md:text-3xl font-semibold md:mb-6"
            style={{ transform: 'translateY(-60px)' }}
          >
            Codissia, Coimbatore
          </p>
          <div className="block md:hidden"> 
          <CTAButton src="https://startuptn.getkameleon.com" className="rounded-2xl">
          <div className="w-70 h-10 px-6 py-7 flex items-center justify-center text-base">
            <img className="px-2" src={vector} />
            REGISTER NOW
          </div>
        </CTAButton>
</div>

        </div>

        {/* Right - Avatar & Stats */}
        <div className="flex items-center gap-3">
          <div className="w-20 md:w-28 relative">
            <img
              src={avatarcir}
              fill
              className="object-fill object-center"
              alt="Attendees"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold">30K+</p>
            <p className="text-white/50">Attendees</p>
          </div>
        </div>
      </div>

      {/* Desktop CTA (separate to avoid shifting layout) */}
      <div className="hidden md:block absolute bottom-4">
        <CTAButton src="https://startuptn.getkameleon.com" className="rounded-2xl">
          <div className="w-70 h-10 px-6 py-7 flex items-center justify-center text-base">
            <img className="px-2" src={vector} />
            REGISTER NOW
          </div>
        </CTAButton>
      </div>
    </section>
  );
}
