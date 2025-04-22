import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import loadingAnimation from '../../assets/preloader.json';
import mobileAnimation from '../../assets/mobile _anim.json'; // <-- mobile version
import logo from "../../assets/Nav_logo.png";
import NavBar from '../../components/Elements/NavBar';
import Footer from '../../components/Elements/Footer/Footer';
import StackingSections from '../../components/Homepage/FirstSections/StackingSections';
import PreFooter from '../../components/Homepage/Prefooter/PreFooter';
import CurtainSection from '../../components/Homepage/CurtainSection/CurtainSection';
import ShowcaseSection from '../../components/Homepage/showcase_section/ShowcaseSection';
import SponsSection from '../../components/Homepage/SponsSection';
import SpeakerSection from '../../components/Homepage/SpeakerSection/SpeakerSection';
import PastEngagements from '../../components/Homepage/past_engagements';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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
          <NavBar />
          <StackingSections />
          <CurtainSection />
          <SpeakerSection />
          <ShowcaseSection />
          <PastEngagements />
          <PreFooter />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
