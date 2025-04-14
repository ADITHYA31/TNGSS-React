import { useState } from 'react';
import GradientBdrCard from './GradientBorderCard';
import './custom.css'

export default function FlipingCard({ className = "", children, flipinvert=false, frontTitle, backTitle }) {

    const childrenArray = Array.isArray(children) ? children : [children];
    const frontContent = childrenArray[0] || 'front';
    const backContent = childrenArray[1] || 'back';

    return (
        <div className={`group perspective-midrange w-fit h-fit ${className}`}>

            <div className={`relative transition-transform duration-300 transform-3d hover:scale-105 shadow-lg ${flipinvert ? 'group-hover:-rotate-y-180' : 'group-hover:rotate-y-180'}`}>

                {/* Front side */}
                <div className="absolute top-0 backface-hidden bg-transparent flex items-center justify-center rounded-xl text-white">
                    <GradientBdrCard className="w-full h-full p-[1px] rounded-[inherit] bg-gradient-to-r from-blue-500 to-purple-500">
                        <div className="w-full h-full flex items-center justify-center text-xl font-bold">
                            {frontContent}
                        </div>
                    </GradientBdrCard>
                </div>

                {/* Back side (visible when flipped) */}
                <div className="absolute top-0 backface-hidden bg-transparent flex items-center justify-center rounded-xl text-white rotate-y-180">
                    <GradientBdrCard className="w-full h-full p-[1px] rounded-[inherit] bg-gradient-to-r from-purple-500 to-blue-500">
                        <div className="w-full h-full flex items-center justify-center text-xl font-bold">
                            {backContent}
                        </div>
                    </GradientBdrCard>
                </div>

            </div>
        </div>
    );
}
