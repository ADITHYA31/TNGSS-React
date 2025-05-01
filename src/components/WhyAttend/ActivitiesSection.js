import React, { useEffect, useState } from 'react';
import backgroundImage from "../../assets/img/activities-background.png";

const activities = [
  'Startup Pitch Battle',
  'Investor Speed Networking',
  'Founder Roundtable Discussions',
  'Fireside Chats with Unicorn Founders',
  'AI & Tech Innovation Lab',
];

export default function ActivitiesSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animatedIndex, setAnimatedIndex] = useState(0);

  useEffect(() => {
    if (activeIndex !== null) return;

    const interval = setInterval(() => {
      setAnimatedIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const currentIndex = activeIndex !== null ? activeIndex : animatedIndex;

  return (
    <div
      className="bg-gradient-to-b from-black via-zinc-900 to-black py-16 text-white font-urbanist"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-white text-5xl font-bold mb-12">Activities</h2>

        <div className="flex justify-between border-b-2 border-white pb-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`relative w-48 px-2 text-lg font-medium cursor-pointer transition-colors duration-300 text-center break-words pb-2 ${currentIndex === index ? 'text-[#F5710C]' : 'text-white'
                }`}
              onClick={() => setActiveIndex(index)}
            >
              {activity}
              {/* underline added here */}
              {currentIndex === index && (
                <span className="absolute bottom-0 left-0 right-0 mx-auto h-[3px] bg-[#F5710C] rounded-full w-full"></span>
              )}
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
