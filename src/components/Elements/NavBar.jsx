'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "public/plane_logo.svg" ;
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
        className={`flex fixed top-7 left-1/2 transform -translate-x-1/2 z-50  h-fit w-sm md:w-lg 
        p-3 rounded-full justify-between bg-white/20 backdrop-blur-xs
        text-white`}
        
        initial={{ opacity: 0, translateY: '-100%' }}
        animate={controls}
        transition={{ duration: 0.3 }}
        >
            <Link href="/">About</Link>
            <Link href="/">Why Attend</Link>
            <Link
            href='/'
             className="relative w-28 md:w-36 shadow-amber-700">
                <Image
                src={logo}
                fetchPriority="high"
                className="  absolute top-1/2 -translate-y-1/2 rotate-12  object-center"
                />
                {/* <div className=" absolute bg-blue-600 w-3 h-3 -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full "/> */}
            </Link>
            <Link href="/">Programs </Link>
            <Link href="/">Info</Link>
        </motion.div>
    );
}