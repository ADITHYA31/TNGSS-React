'use client'
import './custom.css'
import { useState } from 'react';
import GradientBdrCard from './GradientBorderCard';

export default function FlipingCard({ className = "", children, flipinvert=false}) {

    
    // Get the first and second child from the children prop
    // If children is an array, use its elements, otherwise create an array with children as the only element
    const childrenArray = Array.isArray(children) ? children : [children];
    
    // Get the front and back content
    const frontContent = childrenArray[0] || 'front'
    const backContent = childrenArray[1] || 'back'

    return(
        <div className={`group perspective-midrange  w-fit h-fit  ${className}`}>
            <div className={`relative transition-transform duration-300 transform-3d ${flipinvert ? 'group-hover:-rotate-y-180' : 'group-hover:rotate-y-180'}`}>
                
                {/* Front side */}
                <div className="absolute top-0 backface-hidden bg-transparent flex items-center justify-center rounded-xl text-white">
                        {frontContent}
                </div>

                {/* Back side (visible when flipped) */}
                <div className="   backface-hidden bg-transparent flex items-center justify-center rounded-xl text-white rotate-y-180">
                        {backContent}
                </div>
                
            </div>
        </div>
    );
}