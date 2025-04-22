import logo from "../../assets/Nav_logo.png";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import CTAButton from "./CTAButton";
import ShineButton from "./ShineButton";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled,setIsScrolled]=useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsVisible(false);
        setIsScrolled(true)
      } else if (window.scrollY < lastScrollY) {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, translateY: 0 });
    } else {
      controls.start({ opacity: 0, translateY: "-100%" });
    }
  }, [isVisible, controls]);

  const menuItems = [];

  return (
    <>
      {/* Navbar */}
      <motion.div
        className={` navbar flex fixed top-0 left-0 z-50 p-3 text-white blur-sm  w-full justify-between items-center py-5 border-b ${isScrolled ? 'bg-black':'bg-transparent'} bg-opacity-40 border-gray-600`}
        initial={{ opacity: 0, translateY: "-100%" }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <img
          src={logo}
          className="object-center"
          style={{
            maxWidth: "100px",
            // top: "-8px",
            // left: "20px",
          }}
        />

        {/* Desktop Menu */}
        <div
          className="hidden sm:flex w-full justify-end gap-10 items-center text-xl"
          style={{ maxWidth: "400px", marginLeft: "auto", marginRight: "40px" }}
        >
          {menuItems.map((item, index) => (
            <a key={index} href="/" className="hover:underline">
              {item}
            </a>
          ))}
          <ShineButton src="https://startuptn.getkameleon.com" className=" !hover:bg-black" contCN=" hover py-3 px-4">
            Register
          </ShineButton>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden z-50 ml-auto mr-4 text-3xl font-bold"
        >
          {isMenuOpen ? "×" : "≡"}
        </button>
      </motion.div>

      {/* Dropdown Menu (Mobile Only) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isMenuOpen ? { height: "auto", opacity: 0.6 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden fixed top-20 left-0 w-full bg-white bg-opacity-90 z-40 overflow-hidden backdrop-blur-md"
      >
        <div className="flex flex-col items-center text-black py-4 space-y-4 text-lg font-medium">
          {menuItems.map((item, index) => (
            <a key={index} href="/" className="hover:text-blue-600">
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
