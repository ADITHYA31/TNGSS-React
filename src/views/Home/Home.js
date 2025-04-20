import React, { useState, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import loadingAnimation from '../../assets/preloader.json';

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

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: loadingAnimation,
    });

    anim.addEventListener('complete', () => {
      setIsFadingOut(true); // trigger fade out
      setTimeout(() => {
        setIsLoading(false); // remove loader
        anim.destroy();
      }, 1000); // matches fade duration
    });

    return () => anim.destroy();
  }, []);

  return (
    <>
      {isLoading && (
        <div
          className={`h-full bg-black transition-opacity duration-1000 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
          <div ref={containerRef} className="w-full h-full" />
        </div>
      )}

      {!isLoading && (
        <div className="home-fade-in bg-black text-white font-urbanist scrollbar-hide scroll-smooth">
          <NavBar />
          <StackingSections />
          {/* <div className='h-screen w-full bg-black isolate'/> */}
          <CurtainSection />
          <SpeakerSection />
          {/* <div className='h-screen w-full bg-black isolate'/> */}
          <ShowcaseSection />
          <PastEngagements />
          {/* <div className='h-screen w-full bg-purple-950/30 isolate'/> */}
          <SponsSection />

          <PreFooter />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
