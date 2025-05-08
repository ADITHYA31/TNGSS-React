import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import loadingAnimation from '../../assets/preloader.json';
import mobileAnimation from '../../assets/mobile_anim.json'; // <-- mobile version
import logo from "../../assets/Nav_logo.png";
import HeroSection from '../../components/WhyAttend/HeroSection';
import WhySwiper from '../../components/WhyAttend/WhySwiper';
import USPSection from '../../components/WhyAttend/USPSection';
import SpeakersSection from '../../components/WhyAttend/SpeakersSection';
import { PitchBattleSection } from '../../components/WhyAttend/PitchBattleSection';
import ActivitiesSection from '../../components/WhyAttend/ActivitiesSection';

const WhyAttend = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState(null); // State to hold fetched data

  useEffect(() => {
    // Check if the preloader already played
    if (sessionStorage.getItem('preloaderPlayed') === 'true') {
      setIsLoading(false);
    }

    // Detect if user is on mobile
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.STRAPI_URL}api/whyattend-startup?pLevel`); // Replace with your actual endpoint
        const result = await response.json();
        setData(result.data); // Assuming the data structure has a 'data' field
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: isMobile ? mobileAnimation : loadingAnimation, // switch based on device
    });

    anim.addEventListener('complete', () => {
      setTimeout(() => {
        sessionStorage.setItem('preloaderPlayed', 'true');
        setIsLoading(false);
      }, 1);

      setIsFadingOut(true);
      anim.destroy();
    });

    return () => anim.destroy();
  }, [isMobile]);

  return (
    <>
      {isLoading && (
        <div
          className={`h-full w-full transition-opacity duration-1000 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <div ref={containerRef} className="w-full h-full relative">
            <div ref={logoRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700">
              <img src={logo} alt="Logo" className="w-16 h-16" />
            </div>
          </div>
        </div>
      )}

      {!isLoading && (
        <div className="home-fade-in bg-black text-white font-urbanist scrollbar-hide scroll-smooth" style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
          <div className="relative isolate overflow-clip will-change-transform z-20">
            <HeroSection title={"The Ultimate Global Gathering for Founders"}/>
            <WhySwiper />
          </div>
          <ActivitiesSection/>

          <SpeakersSection/>
          <USPSection />
        </div>
      )}
    </>
  );
};

export default WhyAttend;
