import logo from "../../assets/plane_logo.svg?url";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 310);

      if (window.scrollY > lastScrollY && window.scrollY > 300) { // Increased distance to 150px
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, translateY: 0 });
    } else {
      controls.start({ opacity: 0, translateY: '-100%' });
    }
  }, [isVisible, controls]);

  return(
    <motion.div 
    className={`
      flex fixed top-7 left-1/2 transform -translate-x-1/2 z-50
      p-3 rounded-full justify-between text-white
      bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm
      w-full max-w-sm md:max-w-lg
    `}
    initial={{ opacity: 0, translateY: '-100%' }}
    animate={controls}
    transition={{ duration: 0.3 }}
  >
    <a href="/">About</a>
    <a href="/">Why Attend</a>
    <a
      href="/"
      className="relative w-28 md:w-36 shadow-lg shadow-amber-700"
    >
      <img
        src={logo}
        fetchPriority="high"
        className="absolute rotate-12 object-center"
        style={{
          maxWidth: '57px',
          top: '-20px',
          translate: '0',
          left: '20px',
        }}
      />
    </a>
    <a href="/">Programs</a>
    <a href="/">Info</a>
  </motion.div>
  
  );
}