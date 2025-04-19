// components/ContentSection.js
import { useRef } from 'react';
import useStackingAnimation from '../../../hooks/useStackingAnimation'; // Adjust path accordingly
import '../../Elements/custom.css'
export default function StatsSection({ className = '' }) {
  const contentRef = useRef(null);
  useStackingAnimation(contentRef);
  const data = [
    { count: '100+', tag: 'Projects Completed' },
    { count: '200+', tag: 'Happy Clients' },
    { count: '30000+', tag: 'Awards Won' },
    { count: '300+', tag: 'Active Members' },
    { count: '10+', tag: 'Years of Experience' },
    { count: '150+', tag: 'Workshops Conducted' },
    { count: '500+', tag: 'Networking Events' },
    { count: '1000+', tag: 'Resources Shared' },
  ];

  return (
    <section 
      ref={contentRef}
      style={{
        background: 'linear-gradient(148.59deg, #0055FF 2.92%, #07BCCE 23.28%, #F7750C 80.11%, #FF0000 97.63%)',
        borderRadius: '0.75rem',
      }}
      className={`sticky overflow-hidden top-0 w-full h-screen z-10 p-2 ${className}`}
      id="stats-section"
    >
      <div className='flex items-center justify-even bg-white w-full h-full relative'
      style={{
        borderRadius: '25px',
      }}
      >

        <div className='flex justify-center items-center relative h-full w-xs max-w-[100vh]'>
          <div className='absolute flex justify-center -rotate-90 w-[calc(100vh-1rem)] pl-14'>
            <p className='relative text-black md:text-7xl font-semibold mx-auto'>
              Grow with A dynamic community
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-x-80 gap-y-20'>
      {data.map((item, index) => (
       <div key={index} className="flex flex-col">
       <p className="text-6xl md:text-6xl font-bold gradient-text">
         {item.count}
       </p>
       <p className="text-black text-lg md:text-3xl">{item.tag}</p>
     </div>
     
      
      ))}
    </div>

      </div>
    </section>
  );
}
