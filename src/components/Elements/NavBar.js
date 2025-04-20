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
    flex fixed top-0 left-0 z-50
    p-3  text-white
    bg-white bg-opacity-40  mix-blend-difference
    w-full justify-between items-center py-5
    `}
    initial={{ opacity: 0, translateY: '-100%' }}
    animate={controls}
    transition={{ duration: 0.3 }}
  >
    <div>
    <img
        src={logo}
        fetchPriority="high"
        className="absolute rotate-12 object-center"
        style={{
          maxWidth: '80px',
          top: '-8px',
          translate: '0',
          left: '20px',
        }}
      />
    </div>
    <div className="flex w-full justify-between text-xl" style={{
    maxWidth: '400px'
    }}>
    <a href="/">About</a>
    <a href="/">Why Attend</a>
    <a href="/">Programs</a>
    <a href="/">Info</a>
    <a href="/">Register</a>
    </div>
  </motion.div>
  
  );
}