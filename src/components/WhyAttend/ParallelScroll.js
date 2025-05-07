import { useRef } from "react";
import { useParlx } from "../../hooks/test_hooks/useParlx";
import networking from '../../assets/img/networking.png';
import mobileApp from '../../assets/img/mobileApp.png';
import meetingspace from '../../assets/img/meeting-space.png';

export default function ParallelScroll() {
  const globalpavilion = useRef(null);

  useParlx(globalpavilion);

  // Create an array of objects with dummy data
  const data = [
    { tag: 'Networking', image: networking },
    { tag: 'Mobile App', image: mobileApp },
    { tag: 'Meeting Spaces', image: meetingspace },
    { tag: 'New Partnerships', image: networking },
    { tag: 'Investors', image: networking },
  ];

  return (
    <section
      ref={globalpavilion}
      className="relative min-h-screen w-screen isolate h-auto" // Adjusted to fit content
    >
<div className="w-full h-full flex flex-col justify-center overflow-hidden">
  <div className="flags flex w-full gap-3 md:flex-nowrap overflow-x-auto scrollbar-hide">
    {data.map((item, index) => (
      <div
        key={index}
        className="min-w-[280px] md:min-w-[300px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden relative"
      >
        {/* Image */}
        <img
          src={item.image}
          alt={`flag-${index}`}
          className="w-full h-full object-cover"
          style={{height:"400px"}}
        />

        {/* Text overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-6 pt-10">
          <p
            className="text-xl md:text-3xl text-white"
            dangerouslySetInnerHTML={{ __html: item.tag }}
          />
        </div>
      </div>
    ))}
  </div>
</div>


    </section>
  );
}