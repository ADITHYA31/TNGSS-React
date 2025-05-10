"use client"
import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"

export default function CarouselSection({ data }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Dynamically generated slides from the data prop
  const slides = data?.cards?.map((card) => ({
    title: card.title,
    image: `${process.env.STRAPI_URL}${card.background?.formats?.medium?.url || card.background?.url}`,
  })) || []

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (isMobile) {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    } else {
      const maxSlide = Math.ceil(slides.length / 2) - 1
      setActiveSlide((prev) => (prev === maxSlide ? 0 : prev + 1))
    }
  }

  const prevSlide = () => {
    if (isMobile) {
      setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    } else {
      const maxSlide = Math.ceil(slides.length / 2) - 1
      setActiveSlide((prev) => (prev === 0 ? maxSlide : prev - 1))
    }
  }

  const getTransformValue = () => {
    return `translateX(-${activeSlide * 100}%)`
  }

  return (
    <div className="w-full bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light text-center mb-8 md:mb-16">
          {data?.Heading || "This is why"}
        </h2>

        <div className="relative overflow-hidden">
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: getTransformValue() }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-1">
                  <div
                    className="w-full relative rounded-3xl overflow-hidden"
                    style={{
                      background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                      padding: "2px",
                      height: "300px",
                    }}
                  >
                    <div className="w-full h-full rounded-3xl overflow-hidden relative">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                          <h3 className="text-xl md:text-2xl font-medium">{slide.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Carousel */}
          <div className="hidden md:block relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: getTransformValue() }}
            >
              {Array.from({ length: Math.ceil(slides.length / 2) }).map((_, pairIndex) => (
                <div key={pairIndex} className="w-full flex-shrink-0 flex gap-6">
                  {[0, 1].map((offset) => {
                    const slideIndex = pairIndex * 2 + offset
                    if (slideIndex >= slides.length) return null

                    return (
                      <div
                        key={slideIndex}
                        className="w-1/2 relative rounded-3xl overflow-hidden"
                        style={{
                          background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                          padding: "2px",
                          height: "300px",
                        }}
                      >
                        <div className="w-full h-full rounded-3xl overflow-hidden relative">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `url(${slides[slideIndex].image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                              <h3 className="text-2xl font-medium">{slides[slideIndex].title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Next Slide Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center md:justify-end gap-2 mt-8">
          {Array.from({
            length: isMobile ? slides.length : Math.ceil(slides.length / 2),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === index ? "bg-[#18BFDB] scale-110" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
