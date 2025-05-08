// import React, { useEffect, useState } from 'react';
// import backgroundImage from "../../assets/img/activities-background.png";

// const activities = [
//   'Startup Pitch Battle',
//   'Investor Speed Networking',
//   'Founder Roundtable Discussions',
//   'Fireside Chats with Unicorn Founders',
//   'AI & Tech Innovation Lab',
// ];

// export default function ActivitiesSection() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [animatedIndex, setAnimatedIndex] = useState(0);

//   useEffect(() => {
//     if (activeIndex !== null) return;

//     const interval = setInterval(() => {
//       setAnimatedIndex((prevIndex) => (prevIndex + 1) % activities.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [activeIndex]);

//   const currentIndex = activeIndex !== null ? activeIndex : animatedIndex;

//   return (
//     <div
//       className="bg-gradient-to-b from-black via-zinc-900 to-black py-16 text-white font-urbanist"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto text-center px-4">
//         <h2 className="text-white text-5xl font-bold mb-12">Activities</h2>

//         <div className="flex justify-between border-b-2 border-white pb-6">
//           {activities.map((activity, index) => (
//             <div
//               key={index}
//               className={`relative w-48 px-2 text-lg font-medium cursor-pointer transition-colors duration-300 text-center break-words pb-2 ${currentIndex === index ? 'text-[#F5710C]' : 'text-white'
//                 }`}
//               onClick={() => setActiveIndex(index)}
//             >
//               {activity}
            
//               {currentIndex === index && (
//                 <span className="absolute bottom-0 left-0 right-0 mx-auto h-[3px] bg-[#F5710C] rounded-full w-full"></span>
//               )}
//             </div>

//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import backgroundImage from "../../assets/img/activities-background.png";
import { PitchBattleSection } from '../../components/WhyAttend/PitchBattleSection';
import backgroundImages from "../../assets/img/blue-fiber-bg.png";
import bgImage from '../../assets/img/image.png';

const activities = [
  { title: 'Startup Pitch Battle', description: 'Codissia Trade Fair Complex, Coimbatore.',    background:backgroundImages, },
  { title: 'Investor Speed Networking', description: '1-on-1 sessions with top investors.' ,background:bgImage},
  { title: 'Founder Roundtable Discussions', description: 'Group chats with startup founders.',background:backgroundImages },
  { title: 'Fireside Chats with Unicorn Founders', description: 'Insights from unicorn leaders.',background:bgImage },
  { title: 'AI & Tech Innovation Lab', description: 'Explore futuristic tech live.' ,background:backgroundImages},
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
  const currentActivity = activities[currentIndex]; // 👈 dynamic data

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
        <h2 className="text-white text-5xl font-bold mb-12">Activities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 border-b-2 border-white pb-6">
          {activities.map((activity, index) => (
            <div
              key={index}
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

        {/* 👇 Add this to show dynamic section below */}
  
      </div>
    
    </div>
      <div className="mt-12 w-screen ">
      <PitchBattleSection
        title={currentActivity.title}
        description={currentActivity.description}
        background={currentActivity.background}
      />
    </div>
    </div>
 
  );
}

