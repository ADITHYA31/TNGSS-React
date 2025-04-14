'use client'
import cloud from "public/sponslogos/Cloud.svg"
import glossy from "public/sponslogos/Glossy.svg"
import iceberg from "public/sponslogos/Iceberg.svg"
import uTurn from "public/sponslogos/U-Turn.svg"
import luminous from "public/sponslogos/Luminous.svg"
import proNature from "public/sponslogos/Pro-Nature.svg"
import levelUp from "public/sponslogos/Level-up.svg"

import { useRef } from "react";
import Image from "next/image"
import useLogoScroll from "@/hooks/useLogoScroll"
const data=[
    {src:cloud},
    {src:glossy},
    {src:iceberg},
    {src:uTurn},
    {src:luminous},
    {src:proNature},
    {src:levelUp},
];
export default function SponsSection() {
    const stripsRef=useRef(null);
    useLogoScroll(stripsRef);
    return(
        <section className=" relative flex flex-col h-screen w-full justify-around  bg-purple-950/30">
            <h2 className=" text-center font-semibold md:text-7xl">Sponsors & Partners</h2>

            <div ref={stripsRef} className="flex flex-col w-full gap-28">
            <div className="row1 will-change-transform flex py-2 gap-9">
            {data.sort(() => Math.random() - 0.5).map((item, index) => (
                    <Image key={index} src={item.src} alt={`Sponsor ${index + 1}`} className="h-14 w-auto px-3 " />
            ))}
            {data.sort(() => Math.random() - 0.5).map((item, index) => (
                    <Image key={index} src={item.src} alt={`Sponsor ${index + 1}`} className="h-14 w-auto px-3" />
            ))}
            </div>

            <div className="row2 will-change-transform flex py-2 gap-9 -translate-x-1/2">
            {data.sort(() => Math.random() - 0.5).map((item, index) => (
                    <Image key={index} src={item.src} alt={`Sponsor ${index + 1}`} className="h-14 w-auto px-3 " />
            ))}
            {data.sort(() => Math.random() - 0.5).map((item, index) => (
                    <Image key={index} src={item.src} alt={`Sponsor ${index + 1}`} className="h-14 w-auto px-3" />
            ))}
            </div>

            <div>

            </div>

            </div>

        </section>
    );
}