 
import { useParlx } from "../../../hooks/test_hooks/useParlx";
import { useRef } from "react";


export default function ParallelScroll() {
    const globalpavilion = useRef(null);
    
    useParlx(globalpavilion);

    // Create an array of objects with dummy data
    const data = [
      { 
          img: '../../../assets/ke0.jpeg',
          tag: 'Elite Investor & Founder Networking Hub'

       },
      { 
          img: '../../../assets/ke1.jpg',
          tag: 'Connect & Collaborate at the Pavilion'

       },
      { 
          img: '../../../assets/ke2.jpg',
          tag: 'Startup Accelerator Bootcamp <br />'

       },
      { 
          img: '../../../assets/ke3.jpg',
          tag: 'Startup Showcase & Thought Leadership Stages'

       }
  ];

    return (
        <section
            ref={globalpavilion}
            className="relative md:min-h-screen  w-screen isolate bg-white h-[50vh]"
        >
            <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden ">
            <div className="flags flex w-full gap-3 will-change-transform md:flex-nowrap md:overflow-hidden overflow-x-auto ">
  {data.map((item, index) => (
    <div
      key={index}
      className="w-4/5 h-[70vh]   bg-[#F3F4F6] rounded-2xl px-4 py-4 shrink-0 "
    >
      <div
        className="flex flex-col justify-end w-full h-full rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.img})`,
          minWidth : '200px'
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