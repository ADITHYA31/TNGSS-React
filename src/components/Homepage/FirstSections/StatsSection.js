// components/ContentSection.js
import { useRef } from 'react';

export default function StatsSection({ className = '' }) {
  const contentRef = useRef(null);

  const data = [
    { count: '100+', tag: 'Projects Completed' },
    { count: '200+', tag: 'Happy Clients' },
    { count: '50+', tag: 'Awards Won' },
    { count: '300+', tag: 'Active Members' },
    { count: '10+', tag: 'Years of Experience' },
    { count: '150+', tag: 'Workshops Conducted' },
    { count: '500+', tag: 'Networking Events' },
    { count: '1000+', tag: 'Resources Shared' },
  ];

  return (
    <section 
      ref={contentRef} 
      className={`sticky top-0 w-full h-screen z-10 p-2 ${className}`}
      id="stats-section"
    >
      <div className='flex items-center justify-around bg-white w-full h-full relative'>

        <div className='flex justify-center items-center relative h-full w-xs max-w-[100vh]'>
          <div className='absolute flex justify-center -rotate-90 w-[calc(100vh-1rem)] pl-14'>
            <p className='relative text-black md:text-8xl font-semibold mx-auto'>
              Grow with A dynamic community
            </p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-x-48 gap-y-12'>
          {data.map((item, index) => (
            <div key={index} className='flex flex-col'>
              {/* Update to use gradient text in a way compatible with Tailwind 2.2 */}
              <p className='text-transparent md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text'>
                {item.count}
              </p>
              <p className='text-black text-3xl'>{item.tag}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
