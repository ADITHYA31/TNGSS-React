import FlipingCard from "../../../../components/Elements/FlippingCard";
import GradientBdrCard from "../../../../components/Elements/GradientBorderCard";

export default function AtendeesSection() {
    const data = [
        {
            img: '/image1.jpg',
            title: 'Innovative Tech Solutions',
            des: 'Explore the latest in technology and innovation.',
            foot: 'Join us for insightful discussions.'
        },
        {
            img: '/image2.jpg',
            title: 'Sustainable Practices',
            des: 'Learn about sustainable practices in various industries.',
            foot: 'Be part of the change.'
        },
        {
            img: '/image3.jpg',
            title: 'Networking Opportunities',
            des: 'Connect with industry leaders and peers.',
            foot: 'Expand your professional network.'
        },
        {
            img: '/image4.jpg',
            title: 'Investment Strategies',
            des: 'Discover effective investment strategies for growth.',
            foot: 'Secure your financial future.'
        },
    ];

    return (
        <section className="flex w-screen min-h-screen justify-center overflow-hidden items-center bg-black">
            <div className="flex max-md:flex-col isolate items-center">
                {data.map((item, index) => (
                    <FlipingCard
                        flipinvert
                        key={item.title} // Use unique key (item.title for example)
                        className={`transition-all duration-300 hover:z-50 rounded-md`}
                        style={{ zIndex: index * 10 }} // Dynamically set z-index using style
                    >
                        <GradientBdrCard className="w-80 h-96 p-[2px] rounded-[inherit]">
                            <div className="flex relative w-full h-full p-5">
                                {/* Using next/image for optimized images */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="object-cover object-center"
                                />
                                <div className="self-end">
                                    <p className="text-white">{item.title}</p>
                                </div>
                            </div>
                        </GradientBdrCard>
                        <GradientBdrCard className="w-80 h-96 p-[2px] rounded-[inherit]">
                            <div className="flex flex-col w-full h-full p-5">
                                <p className="text-white">{item.title}</p>
                                <p className="text-white">{item.des}</p>
                                <p className="text-white block mt-auto">{item.foot}</p>
                            </div>
                        </GradientBdrCard>
                    </FlipingCard>
                ))}
            </div>
        </section>
    );
}
