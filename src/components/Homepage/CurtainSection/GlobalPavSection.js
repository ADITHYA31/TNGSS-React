import { useRef } from "react";

export default function GlobalPavSection({ flagsRef }) {

    const flags = [
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
    ];

    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center bg-gradient-to-r from-blue-300 to-red-400 overflow-x-hidden">
            <div ref={flagsRef} className="flex self-end w-fit h-fit gap-3 will-change-transform">
                {flags.map((flag, index) => (
                    <div key={index} className="flex items-center justify-center">
                        {/* Dynamically applying width and height using inline styles */}
                        <img 
                            src={flag.src} 
                            width={flag.w} 
                            height={flag.h} 
                            alt={`Flag ${index + 1}`} 
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
