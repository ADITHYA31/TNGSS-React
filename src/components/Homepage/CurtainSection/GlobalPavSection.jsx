'use client'
import { useRef } from "react"

export default function GlobalPavSection({flagsRef}) {

    const flags=[
        // {
        //     src:'',
        //     w:'',
        //     h:'',
        // },
        {
            src: '/flag1.png',
            w: '100',
            h: '60',
        },
        {
            src: '/flag2.png',
            w: '100',
            h: '60',
        },
        {
            src: '/flag3.png',
            w: '100',
            h: '60',
        },
        {
            src: '/flag4.png',
            w: '100',
            h: '60',
        },
    ]


    return (
        <section className=" relative min-h-screen w-full flex flex-col justify-center bg-linear-0 from-blue-300 to-red-400 overflow-x-hidden">
            <p></p>

            <div ref={flagsRef} className="flex self-end w-fit h-fit gap-3 will-change-transform">
            {flags.map((flag, index) => (

                // <div key={index} className={`w-[${flag.w}px] h-[${flag.h}px] bg-black`}>
                <div key={index} className={`w-72 h-56  bg-white`}>


                </div>
                // <img 
                //     key={index} 
                //     src={flag.src} 
                //     width={flag.w} 
                //     height={flag.h} 
                //     alt={`Flag ${index + 1}`} 
                //     className="object-cover"
                // />
            ))}
            </div>
        </section>
    );
}