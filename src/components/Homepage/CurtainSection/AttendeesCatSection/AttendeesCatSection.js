import React from "react";
import FlippingCard from "../../../../components/Elements/FlippingCard";
import GradientBdrCard from "../../../../components/Elements/GradientBorderCard";
import Frame1 from "../../../../assets/Frame1.png"
import Frame2 from "../../../../assets/Frame2.png"
import Frame3 from "../../../../assets/Frame4.png"
import Frame4 from "../../../../assets/Frame5.png"

export default function AtendeesSection() {

    const data=[
        {
            img: Frame2,
            title: 'Corporate',
            des: 'Discover cutting-edge innovations, gain insights from industry leaders, and connect with startups shaping tomorrow.',
            foot: 'Innovate, connect, and transform.'
        },
        {
            img: Frame1,
            title: 'Investors',
            des: 'Discover high-potential startups and game-changing innovations at Tamil Nadu Global Startup Summit 2025.',
            foot: 'Discover, connect, and invest in the next big startup.'
        },
        {
            img: Frame4,
            title: 'Aspirants',
            des: "Whether you're a student, aspiring entrepreneur, or young innovator, this is your chance to gain knowledge, find opportunities, and take the first step toward building something extraordinary.",
            foot: 'Your future starts here: network, learn, and grow.'
        },
        {
            img: Frame3,
            title: 'Startups',
            des: 'Starting, building, or scaling your Startup? The Tamil Nadu Global Startup Summit 2025 is your launchpad to success.',
            foot: 'Scale faster, network smarter, and fund your startup.'
        },
    ];

    return(
        <React.Fragment>
        <div className="w-full text-center py-12  bg-black">
    <p className="text-white text-4xl md:text-9xl font-bold">Why Attend</p>
  </div>
        <section className="flex flex-col w-screen min-h-screen justify-center overflow-hidden items-center bg-black">
  {/* Header */}
  

  {/* Flipping Cards Section */}
  <div className="flex max-md:flex-col isolate items-center gap-4">
    {data.map((item, index) => (
      <FlippingCard
        flipinvert
        key={index}
        className={`z-${index * 10} ${index % 2 === 0 ? 'rotate-6' : '-rotate-6'} transition-all duration-400 hover:z-50 rounded-md`}
      >
       
        
          <div className="flex relative w-80 h-96">
          <img src={item.img} className="w-full h-full object-cover object-center" alt={item.title} />

            {/* <div className="self-end">
              <p>{item.title}</p>
            </div> */}
          </div>

        <GradientBdrCard className="w-80 h-96">
          <div className="flex flex-col w-full h-full p-5">
            <p className="text-3xl color-white py-2">{item.title}</p>
            <p>{item.des}</p>
            <p className="block mt-auto">{item.foot}</p>
          </div>
        </GradientBdrCard>
      </FlippingCard>
    ))}
  </div>
</section>
</React.Fragment>
    );
}