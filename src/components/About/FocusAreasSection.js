"use client"
import { useState, useEffect } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

export default function FocusAreasSection({data}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const itemsPerSlide = isMobile ? 1 : isTablet ? 2 : 4
  const totalSlides = Math.ceil(data?.cards?.length / itemsPerSlide) || 1

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const getTransformValue = () => {
    return `translateX(-${currentSlide * 100}%)`
  }

  return (
    <section className="bg-black text-white py-16 font-urbanist px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{data?.Heading}</h2>

        <div className="relative overflow-hidden">
          {/* Carousel container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: getTransformValue() }}
            >
              {/* Generate slides based on itemsPerSlide */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {data?.cards
                    ?.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                    .map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="relative rounded-3xl overflow-hidden group"
                        style={{
                          background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                          padding: "2px",
                          height: "300px",
                        }}
                      >
                        <div className="w-full h-full rounded-3xl overflow-hidden relative bg-black">
                          <div
                            className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                            style={{
                              backgroundImage: `url(https://cms.tngss.startuptn.in${item?.background?.url})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end">
                              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                              <p className="text-sm mt-1">{item.description}</p>
                              <a href="#" className="font-semibold underline mt-1">
                                {item.linkText}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2 md:justify-end">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#18BFDB] scale-110" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Navigation arrows */}
          {totalSlides > 1 && (
            <>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2  hover:bg-black/70 rounded-full p-2 z-10 flex items-center justify-center custom-arrow-button"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <FaArrowLeft className="text-white" />
              </button>

              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2  hover:bg-black/70 rounded-full p-2 z-10 flex items-center justify-center custom-arrow-button"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <FaArrowRight className="text-white" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}