import { useRef, useState } from "react";
import { useParlx } from "../../hooks/test_hooks/useParlx";

export default function ParallelScroll({ cont = [] }) {
  const globalpavilion = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  useParlx(globalpavilion);

  const goToSlide = (direction) => {
    if (direction === 'prev') {
      setActiveIndex(prev => (prev - 1 + cont.length) % cont.length);
    } else {
      setActiveIndex(prev => (prev + 1) % cont.length);
    }
  };

  return (
    <section
      ref={globalpavilion}
      className="relative w-full isolate"
      style={{ minHeight: isMobile ? '70vh' : '100vh' }}
    >
      <div className="mx-auto h-full w-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
          
          {/* ✅ Mobile View */}
          {isMobile ? (
            <div className="w-full relative h-[400px] flex flex-col items-center justify-center">
              <div
                className="p-1 rounded-2xl"
                style={{
                  background: 'linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)'
                }}
              >
                <div
                  className="w-[400px] h-[200px] rounded-2xl overflow-hidden relative mx-auto flex justify-center items-center"
                  style={{ maxWidth: '90vw' }}
                >
                  <img
                    src={getImageUrl(cont[activeIndex])}
                    alt={cont[activeIndex]?.tag || cont[activeIndex]?.title || "Image"}
                    className="h-full object-contain w-full"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-6">
                    <p className="text-2xl font-medium text-white font-bold">
                      {cont[activeIndex]?.tag || cont[activeIndex]?.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6 mb-5">
                {cont.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeIndex === index
                        ? 'bg-[#18BFDB] scale-125'
                        : 'bg-gray-500 opacity-70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            // ✅ Desktop View
            <div
              className="flags flex w-full gap-4 overflow-x-auto snap-x snap-mandatory pb-8 px-4"
              style={{ scrollbarWidth: 'none' }}
            >
              {cont.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[30vw] flex-shrink-0 snap-center"
                >
                  <div
                    className="p-1 rounded-2xl h-[60vh]"
                    style={{
                      background: 'linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)'
                    }}
                  >
                    <div className="rounded-2xl relative w-full h-full shadow-lg">
                      <img
                        src={getImageUrl(item)}
                        alt={item?.tag || item?.title || "Card image"}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-6 pt-10">
                        <p className="text-2xl font-medium text-white font-bold">
                          {item?.tag || item?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ✅ Utility to safely extract image URL from Strapi or local object
function getImageUrl(item) {
  return typeof item?.image === 'string'
    ? item.image
    : `${process.env.STRAPI_URL}${
        item?.image?.formats?.medium?.url ||
        item?.image?.url ||
        item?.background?.formats?.medium?.url ||
        item?.background?.url ||
        "/placeholder.svg"
      }`;
}
