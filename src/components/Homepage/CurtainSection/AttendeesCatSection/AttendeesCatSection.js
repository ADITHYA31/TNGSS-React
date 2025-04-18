import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FlippingCard from "../../../../components/Elements/FlippingCard";
import GradientBdrCard from "../../../../components/Elements/GradientBorderCard";
import Frame1 from "../../../../assets/investorcrd.png";
import Frame2 from "../../../../assets/corporatecrd.png";
import Frame3 from "../../../../assets/aspirantcrd.png";
import Frame4 from "../../../../assets/startupcrd.png";

gsap.registerPlugin(ScrollTrigger);

export default function AtendeesSection() {
  const cardsRef = useRef([]);

  const data = [
    {
      img: Frame2,
      title: "Corporate",
      des: "Discover cutting-edge innovations, gain insights from industry leaders, and connect with startups shaping tomorrow.",
      foot: "Innovate, connect, and transform.",
    },
    {
      img: Frame1,
      title: "Investors",
      des: "Discover high-potential startups and game-changing innovations at Tamil Nadu Global Startup Summit 2025.",
      foot: "Discover, connect, and invest in the next big startup.",
    },
    {
      img: Frame4,
      title: "Aspirants",
      des: "Whether you're a student, aspiring entrepreneur, or young innovator, this is your chance to gain knowledge, find opportunities, and take the first step toward building something extraordinary.",
      foot: "Your future starts here: network, learn, and grow.",
    },
    {
      img: Frame3,
      title: "Startups",
      des: "Starting, building, or scaling your Startup? The Tamil Nadu Global Startup Summit 2025 is your launchpad to success.",
      foot: "Scale faster, network smarter, and fund your startup.",
    },
  ];

  useEffect(() => {
    // Fade-out effect for "Why Attend" section with scroll



    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".attendees-section",
        start: "top bottom", // starts below viewport
        end: "bottom top",   // ends above viewport
        scrub: 0.5, // Smooth transition for card animations
      },
    });

    cardsRef.current.forEach((card, index) => {
      gsap.set(card, {
        y: index % 2 === 0 ? -50 : 50,
        scale: 0.96,
      });

      tl.to(card, {
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "power2.out",
      }, 0); // all start together
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);


  return (
    <>


      <section className="attendees-section flex flex-col w-screen min-h-screen justify-center items-center bg-black pt-32 pb-0 overflow-visible">

        <div className="flex max-md:flex-col isolate items-center gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative pt-24 pb-10" // More breathing space
            >
              <div
                ref={(el) => (cardsRef.current[index] = el)} // Shift ref here
                className="will-change-transform" // Helps smooth transforms
              >
                <FlippingCard
                  flipinvert
                  className={`${index % 2 === 0 ? "rotate-6" : "-rotate-6"
                    } hover:z-50 rounded-2xl`} // No overflow here
                >
                  <div className="relative w-80 h-96 rounded-2xl overflow-hidden "> {/* Card shape */}
                    <img
                      src={item.img}
                      className="w-full h-full object-cover object-center absolute inset-0 radius-2xl gradient-border "
                      alt={item.title}
                    />
                    <div className="self-end z-10">
                        <p className="text-2xl font-semibold" style={{
                          color: '#fff',
                          zIndex: '999',
                          position: 'absolute',
                          bottom: '20px',
                          left: '20px',
                        }}>{item.title}</p>
                    </div>
                  </div>

                  <GradientBdrCard className="text-left w-80 h-96 rounded-2xl overflow-hidden bg-black">
                    <div className="flex flex-col w-full h-full p-5 text-white">
                      <p className="text-3xl py-2">{item.title}</p>
                      <p className="flex-1">{item.des}</p>
                      <p className="mt-auto">{item.foot}</p>
                    </div>
                  </GradientBdrCard>
                </FlippingCard>

              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  );
}
