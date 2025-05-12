"use client"
import { useState, useEffect } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import icon1 from "../../assets/img/ai-technology.png"
import icon2 from "../../assets/img/diversity.png"
import icon3 from "../../assets/img/robustness.png"

const KeyFocusSection = ({data}) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [screenSize, setScreenSize] = useState("desktop") // 'mobile', 'tablet', or 'desktop'

  const items = [
    {
      title: "Diversity",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon2,
      read: "Read More",
    },
    {
      title: "Robust",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon3,
      read: "Read More",
    },
    {
      title: "Sustainability",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon3,
      read: "Read More",
    },
    {
      title: "Ethical AI",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon1,
      read: "Read More",
    },
    {
      title: "Innovation",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon2,
      read: "Read More",
    },
    {
      title: "Diversity",
      description:
        "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges, designed to maximize opportunities and accelerate success.",
      icon: icon2,
      read: "Read More",
    },
  ]

  // Detect screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setScreenSize("mobile")
      } else if (width >= 640 && width < 1024) {
        setScreenSize("tablet")
      } else {
        setScreenSize("desktop")
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Determine cards per view based on screen size
  const cardsPerView = screenSize === "mobile" ? 1 : screenSize === "tablet" ? 2 : 3
  const totalSlides = Math.ceil(data?.cards.length / cardsPerView)

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Calculate the transform value for the sliding effect
  const getTransformValue = () => {
    return `translateX(-${currentSlide * 100}%)`
  }

  return (
    <section className="bg-black text-white py-16 px-4 font-urbanist">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{data?.Heading}</h2>

        {/* Carousel container with overflow hidden */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: getTransformValue() }}
          >
            {/* Generate slides based on cardsPerView */}
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {data?.cards.slice(slideIndex * cardsPerView, (slideIndex + 1) * cardsPerView).map((item, itemIndex) => (
                  <div
                    key={`slide-${slideIndex}-item-${itemIndex}`}
                    className=" rounded-3xl overflow-visible"
                    style={{
                      background: "linear-gradient(to right, #0055FF, #18BFDB, #F5710C, #EC473E)",
                      padding: "2px",
                      height: "250px",
                    }}
                  >
                    <div className="w-full h-full rounded-3xl bg-black p-6 flex flex-col">
                      <img src={item?.background?.url ? `${process.env.STRAPI_URL}${item?.background.url}` : "/placeholder.svg"} alt={item.title} className="w-12 h-12 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-300 mb-4 line-clamp-3">{item.description}</p>
                      <a href="#" className="font-semibold underline mt-auto">
                        {item.read}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Only show when needed */}
          {items.length > cardsPerView && (
            <>
          <button
  className="absolute left-7 top-1/2 -translate-y-1/2 -translate-x-1/2
   bg-orange-500 rounded-full flex items-center justify-center
    transition-all duration-300 hover:bg-orange-600 hover:scale-110 z-10 
    custom-arrow-button custom-pic-position"
  onClick={handlePrev}
  aria-label="Previous slide"
>
  <FaArrowLeft className="text-white text-lg" />
</button>


              <button
                className="absolute right-7 top-1/2 -translate-y-1/2 translate-x-1/2
                   bg-orange-500 rounded-full flex items-center justify-center
                  transition-all duration-300 hover:bg-orange-600 hover:scale-110 z-10 
  custom-arrow-button  custom-pic-position-1"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <FaArrowRight className="text-white text-lg" />
              </button>
            </>
          )}
        </div>

        {/* Dots Navigation - Only show when needed */}
        {items.length > cardsPerView && (
          <div className="flex justify-center mt-8 space-x-2 md:justify-end">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#18BFDB] scale-110" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default KeyFocusSection
