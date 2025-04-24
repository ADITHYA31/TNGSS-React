import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import lottie from 'lottie-web';

import loadingAnimation from '../../assets/preloader.json';
import mobileAnimation from '../../assets/mobile_anim.json';
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
  const [isMobile, setIsMobile]   = useState(false);
  const containerRef = useRef(null);

  // 1) sessionStorage + mobile check
  useEffect(() => {
    if (sessionStorage.getItem('preloaderPlayed') === 'true') {
      setIsLoading(false);
      document.body.style.overflow = '';
    }
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  // 2) Lottie + scroll-lock + cleanup
  useEffect(() => {
    if (!isLoading) {
      document.body.style.overflow = '';
      return;
    }
    document.body.style.overflow = 'hidden';

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      rendererSettings:{
        preserveAspectRatio: 'xMidYMid slice'
      },
      animationData: isMobile ? mobileAnimation : loadingAnimation,
    });

    anim.addEventListener('complete', () => {
      // Mark played and trigger unmount -> fade via motion.div exit
      sessionStorage.setItem('preloaderPlayed', 'true');
      setIsLoading(false);
      anim.destroy();
    });

    return () => {
      anim.destroy();
      document.body.style.overflow = '';
    };
  }, [isMobile, isLoading]);

  return (
    <>
      {/* AnimatePresence will detect when isLoading goes false and play exit */}
        {isLoading && (
      <AnimatePresence>
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 3 } }}
            className="fixed h-screen w-screen inset-0 z-50 overflow-hidden bg-black"
          >
            <div ref={containerRef} className="w-auto h-auto relative">

            </div>
          </motion.div>
      </AnimatePresence>
        )}

      <div
        className="home-fade-in bg-black text-white font-urbanist scrollbar-hide scroll-smooth"
        
      >
        <NavBar />
        <StackingSections />
        <CurtainSection />
        <SpeakerSection />
        <ShowcaseSection />
        <PastEngagements />
        <PreFooter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
