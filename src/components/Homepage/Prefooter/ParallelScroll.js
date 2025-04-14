 
import { useParlx } from "../../../hooks/test_hooks/useParlx";
import { useRef } from "react";



export default function ParallelScroll() {
    const globalpavilion = useRef(null);
    
    useParlx(globalpavilion);

    // Create an array of objects with dummy data
    const data = [
        { 
            img: 'image1.jpg',
            tag: 'Elite Investor & Founder Networking Hub'

         },
        { 
            img: 'image2.jpg',
            tag: 'Connect & Collaborate at the Pavilion'

         },
        { 
            img: 'image3.jpg',
            tag: 'Startup Accelerator Bootcamp <br />'

         },
        { 
            img: 'image4.jpg',
            tag: 'Startup Showcase & Thought Leadership Stages'

         },
        // { 
        //     img: 'image5.jpg',
        //     tag: 'Tag 5'

        //  }
    ];

    return (
        <section
            ref={globalpavilion}
            className="relative min-h-screen  w-screen isolate bg-white"
        >
            <div className="w-full h-full flex flex-col justify-center overflow-hidden">
                <div className="flags flex w-fit self-end gap-3 will-change-transform">

                    {data.map((item, index) => (
                        <div key={index} className="w-xl max-[800px] h-[80vh] bg-[#F3F4F6] rounded-2xl px-4 py-4">
                            <div className="flex flex-col justify-end bg-black w-full h-full rounded-2xl">
                                <div className="text-4xl text-white px-5 pb-6">
                                <p dangerouslySetInnerHTML={{ __html: item.tag }}/>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}