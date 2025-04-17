 
import { useParlx } from "../../../hooks/test_hooks/useParlx";
import { useRef } from "react";
import discover1 from '../../../assets/discover1.png';
import discover2 from '../../../assets/discover2.png';
import discover3 from '../../../assets/discover3.png';
import discover4 from '../../../assets/discover4.png';

export default function ParallelScroll() {
    const globalpavilion = useRef(null);
    
    useParlx(globalpavilion);

    // Create an array of objects with dummy data
    const data = [
        { 
            img: discover4,
            tag: 'Elite Investor & Founder Networking Hub'

         },
        { 
            img: discover2,
            tag: 'Connect & Collaborate at the Pavilion'

         },
        { 
            img: discover3,
            tag: 'Startup Accelerator Bootcamp <br />'

         },
        { 
            img: discover1,
            tag: 'Startup Showcase & Thought Leadership Stages'

         }
    ];

    return (
        <section
            ref={globalpavilion}
            className="relative min-h-screen  w-screen isolate bg-white"
        >
            <div className="w-full h-full flex flex-col justify-center overflow-hidden">
                <div className="flags flex w-full self-end gap-3 will-change-transform">

                    {data.map((item, index) => (
                        <div key={index} className="w-xl max-[800px] h-[80vh] bg-[#F3F4F6] rounded-2xl px-4 py-4">
                            <div className="flex flex-col justify-end w-full h-full rounded-2xl bg-cover bg-center"
                             style={{
                                backgroundImage: `url(${item.img})`,
                              }}>
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