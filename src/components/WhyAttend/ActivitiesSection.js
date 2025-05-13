import React, { useEffect, useState } from 'react';
import backgroundImage from "../../assets/img/activities-background.png";
import { PitchBattleSection } from '../../components/WhyAttend/PitchBattleSection';

export default function ActivitiesSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animatedIndex, setAnimatedIndex] = useState(0);

  const activities = data?.cards || [];

  useEffect(() => {
    if (!activities.length || activeIndex !== null) return;

    const interval = setInterval(() => {
      setAnimatedIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex, activities.length]);

  const currentIndex = activeIndex !== null ? activeIndex : animatedIndex;
  const currentActivity = activities[currentIndex];

  return (
    <div>
      <div
        className="bg-gradient-to-b from-black via-zinc-900 to-black py-16 text-white font-urbanist"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-white text-5xl font-bold mb-12">{data?.Heading}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 border-b-2 border-white pb-6">
            {activities.map((activity, index) => (
              <div
                key={activity.id || index}
                className={`relative px-4 py-2 text-base sm:text-lg md:text-xl font-medium cursor-pointer transition-colors duration-300 text-center ${
                  currentIndex === index ? 'text-[#F5710C]' : 'text-white'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {activity.title}
                {currentIndex === index && (
                  <span className="absolute bottom-0 left-0 right-0 mx-auto h-[3px] bg-[#F5710C] rounded-full w-full"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {currentActivity && (
        <div className="mt-12 w-screen">
          <PitchBattleSection
            title={currentActivity.title}
            description={currentActivity.description}
            background={
              `https://cms.tngss.startuptn.in${currentActivity.background?.formats?.medium?.url || currentActivity.background?.url || ''}`
             
            }
          />
        </div>
      )}
    </div>
  );
}
