"use client"

import { useRef, useState, useEffect } from "react"
import { useParlx } from "../../hooks/test_hooks/useParlx"
import { useIsMobile } from "../../hooks/test_hooks/useIsMobile"

export default function ParallelScroll({ cont = [] }) {
  const globalpavilion = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useIsMobile()

  useParlx(globalpavilion)

  const goToSlide = (direction) => {
    if (direction === "prev") {
      setActiveIndex((prev) => (prev - 1 + cont.length) % cont.length)
    } else {
      setActiveIndex((prev) => (prev + 1) % cont.length)
    }
  }

  const getImageUrl = (item) => {
    if (!item) return "/placeholder.svg"
    return typeof item?.image === "string"
      ? item.image
      : `${process.env.STRAPI_URL}${
          item?.image?.formats?.medium?.url ||
          item?.image?.url ||
          item?.background?.formats?.medium?.url ||
          item?.background?.url ||
          "/placeholder.svg"
        }`
  }

  const gradientBorderStyle = {
    background: `linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)`,
    padding: '3px',
    borderRadius: '16px',
  };

  const innerContentStyle = {
    background: 'black',
    borderRadius: '14px',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    position: 'relative',
  };

  useEffect(() => {
    // Recalculate layout on page refresh to ensure centering
    const handleResize = () => {
      if (globalpavilion.current) {
        globalpavilion.current.style.height = "auto"; // Adjusting height dynamically on window resize
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={globalpavilion}
      className="relative w-full isolate"
      style={{
        minHeight: isMobile ? "auto" : "400px", 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}
    >
      <div className="w-full h-full flex flex-col justify-center overflow-hidden items-center">
        {/* Mobile View */}
        {isMobile ? (
          <div className="w-full relative flex flex-col items-center justify-center pb-12">
            <div className="min-w-[280px] h-[400px] flex-shrink-0 relative" style={gradientBorderStyle}>
              <div style={innerContentStyle}>
                {cont.length > 0 && (
                  <>
                    <img
                      src={getImageUrl(cont[activeIndex]) || "/placeholder.svg"}
                      alt={cont[activeIndex]?.tag || cont[activeIndex]?.title || "Image"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      style={{ display: "block", width: "230px", height: "auto" ,margin:"auto"}}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-6 pt-10">
                      <p className="text-xl md:text-3xl text-white font-bold">
                        {cont[activeIndex]?.tag || cont[activeIndex]?.title}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Dots for Mobile */}
            {cont.length > 0 && (
              <div className="flex gap-2 mt-6 mb-5">
                {cont.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${activeIndex === index ? "bg-[#18BFDB] scale-125" : "bg-gray-500 opacity-70"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Desktop View
          <div className="flags flex w-full gap-3 md:flex-nowrap overflow-x-auto scrollbar-hide px-4">
            {cont.map((item, index) => (
              <div key={index} className="min-w-[280px] md:min-w-[300px] h-[400px] flex-shrink-0 relative" style={gradientBorderStyle}>
                <div style={innerContentStyle}>
                  <img
                    src={getImageUrl(item) || "/placeholder.svg"}
                    alt={item?.tag || item?.title || "Card image"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ display: "block", width: "300px", height: "auto" }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-6 pt-10">
                    <p className="text-xl md:text-3xl text-white font-bold">{item?.tag || item?.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
