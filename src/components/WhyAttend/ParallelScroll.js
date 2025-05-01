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
        <div className="flags flex w-full gap-3 will-change-transform md:flex-nowrap md:overflow-hidden overflow-x-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-2/3 md:w-1/2 h-[80vh]  rounded-2xl px-4 py-4 shrink-0 h-30vh"
            >
              <div
                className="flex flex-col justify-end w-full h-full rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                  minWidth: '200px'
                }}
              >
                <div className="text-xxl md:text-4xl text-white px-5 pb-6">
                  <p dangerouslySetInnerHTML={{ __html: item.tag }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}