import React, { useRef, useEffect } from "react";

const keyFocusItems = [
  {
    title: "Ethical AI",
    description:
      "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges...",
    icon: "🤖",
  },
  {
    title: "Diversity",
    description:
      "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges...",
    icon: "🌐",
  },
  {
    title: "Robust",
    description:
      "Connect with top investors and breakthrough startups using curated networking, dedicated meeting zones, and exclusive lounges...",
    icon: "⚙️",
  },
  {
    title: "Sustainability",
    description:
      "Empowering long-term innovation and responsibility through sustainable technology and policies.",
    icon: "🌿",
  },
];

const KeyFocusSection = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const cardWidth = el.firstChild?.offsetWidth || 300;
      el.scrollBy({
        left: e.deltaY > 0 ? cardWidth + 24 : -(cardWidth + 24),
        behavior: "smooth",
      });
    };

    const handleScroll = () => {
      const scrollRight = el.scrollLeft + el.clientWidth;
      const fullyScrolled = scrollRight >= el.scrollWidth - 10;
      document.body.style.overflowY = fullyScrolled ? "auto" : "hidden";
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("scroll", handleScroll);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("scroll", handleScroll);
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <section className="bg-[#0e0e0e] text-white py-16">
      <div className="text-center text-4xl sm:text-5xl font-semibold mb-12">
        Key Areas to Focus
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 md:gap-10 px-6 scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {keyFocusItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start w-[300px] sm:w-[320px] md:w-[360px]"
          >
            <div className="p-[2px] rounded-[24px] bg-gradient-to-br from-[#2F80ED] via-[#27AE60] to-[#F2994A]">
              <div className="bg-black rounded-[22px] p-6 h-full">
                <div className="text-[2rem] mb-4">{item.icon}</div>
                <h3 className="text-white text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-white font-semibold text-sm underline underline-offset-4"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFocusSection;
