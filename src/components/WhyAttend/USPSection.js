import backgroundImage from '../../assets/img/usp-background.png';
import { useRef, useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useDoomScroll } from "../../hooks/useDoomScroll";
import ParallelScroll from "./ParallelScroll";

export default function USPSection({ data }) {
  const circleRef = useRef(null);
  const mainRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  // ✅ Use data.cards safely
  const uspItems = data?.cards || [];
  const totalSlides = uspItems.length;

  useDoomScroll(mainRef, circleRef);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div
      className="overflow-x-clip"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '80vh',
      }}
    >
      {/* Title Section */}
      <div ref={mainRef} className="relative flex justify-center">
        <div className="relative flex justify-start items-center h-[40vh] w-screen">
          <h1 className="text-white sticky top-10 text-4xl text-center md:text-7xl font-bold md:ml-12 mt-4">
            {data?.Heading || "TNGSS USP"}
          </h1>
        </div>
      </div>

            <div>
            <ParallelScroll cont={data?.cards || []} />
            </div>

    </div>
  );
}
