import logo from "../../assets/plane_logo.svg";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let debounceTimer;

    const handleScroll = () => {
      // Debounce the scroll event to avoid rapid firing
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        setIsScrolled(window.scrollY > 310);

        if (window.scrollY > lastScrollY && window.scrollY > 300) {
          setIsVisible(false);
        } else if (window.scrollY < lastScrollY) {
          setIsVisible(true);
        }
        lastScrollY = window.scrollY;
      }, 100); // Adjust timeout duration for optimal performance
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(debounceTimer); // Clear the timeout on cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, translateY: 0 });
    } else {
      controls.start({ opacity: 0, translateY: "-100%" });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      className={`flex fixed top-7 left-1/2 transform -translate-x-1/2 z-50 h-fit w-sm md:w-lg p-3 rounded-full justify-between bg-white/20 backdrop-blur-xs text-white`}
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <a href="/">About</a>
      <a href="/">Why Attend</a>
      <a href="/" className="relative w-28 md:w-36 shadow-amber-700">
        <img
          src={logo}
          fetchPriority="high"
          className="absolute top-1/2 -translate-y-1/2 rotate-12 object-center"
        />
      </a>
      <a href="/">Programs</a>
      <a href="/">Info</a>
    </motion.div>
  );
}
