import { useRef, useState, useEffect } from "react";
import { useParlx } from "../../hooks/test_hooks/useParlx";
import networking from '../../assets/img/networking.png';
import mobileApp from '../../assets/img/mobileApp.png';
import meetingspace from '../../assets/img/meeting-space.png';

export default function ParallelScroll() {
  const globalpavilion = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  
  useParlx(globalpavilion);

  const data = [
    { tag: 'Networking', image: networking },
    { tag: 'Mobile App', image: mobileApp },
    { tag: 'Meeting Spaces', image: meetingspace },
    { tag: 'New Partnerships', image: networking },
    { tag: 'Investors', image: networking },
  ];

  // Handle mobile navigation
  const goToSlide = (direction) => {
    if (direction === 'prev') {
      setActiveIndex(prev => (prev - 1 + data.length) % data.length);
    } else {
      setActiveIndex(prev => (prev + 1) % data.length);
    }
  };

  // Auto-advance slides on mobile (optional)
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      goToSlide('next');
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section
      ref={globalpavilion}
      className="relative w-full isolate"
      style={{ minHeight: isMobile ? '70vh' : '100vh' }}
    >
      <div className="mx-auto h-full w-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
        {isMobile ? (
  <div className="w-full relative h-[400px] flex flex-col items-center justify-center">
    {/* Current Slide */}
    <div
      className="w-[400px] h-[200px] rounded-2xl overflow-hidden relative mx-auto flex justify-center items-center"
      style={{ maxWidth: '90vw' }}
    >
      <img
        src={data[activeIndex].image}
        alt={data[activeIndex].tag}
        className="h-full object-contain w-full"
        loading="lazy"
      />

      {/* Tag overlay INSIDE image container */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-6">
        <p className="text-2xl font-medium text-white text-bold">{data[activeIndex].tag}</p>
      </div>
    </div>
  </div>
): (
            /* Desktop - Horizontal Scroll */
            <div className="flags flex w-full gap-4 overflow-x-auto snap-x snap-mandatory pb-8 px-4"
                 style={{ scrollbarWidth: 'none' }}>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[30vw] flex-shrink-0 rounded-2xl overflow-hidden relative 
                             h-[60vh] shadow-lg snap-center"
                >
                  <img
                    src={item.image}
                    alt={item.tag}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-6 pt-10">
                    <p className="text-2xl font-medium text-white text-bold">
                      {item.tag}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Dots - Mobile Only */}
          {isMobile && (
            <div className="flex gap-2 mt-6 mb-5">
              {data.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === index ? 'bg-[#18BFDB] scale-125' : 'bg-gray-500 opacity-70'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}