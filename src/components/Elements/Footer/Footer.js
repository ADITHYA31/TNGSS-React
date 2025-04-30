import CTAButton from '../CTAButton';
import './custom.css';
import '../../Elements/custom.css';
import facebook from '../../../assets/facebook.svg?url';
import insta from '../../../assets/insta.svg?url';
import yt from '../../../assets/yt.svg?url';
import LinkedIn from '../../../assets/LinkedIn.svg?url';
import X from '../../../assets/x.svg?url';

export default function Footer() {
  const data = [
    { img: facebook, link: 'https://www.facebook.com/TheStartupTN/' },
    { img: insta, link: 'https://www.instagram.com/thestartuptn/' },
    { img: yt, link: 'https://www.youtube.com/channel/UCr0du18taGeXH35dZZD4RnQ' },
    { img: LinkedIn, link: 'https://www.linkedin.com/company/thestartuptn/?originalSubdomain=in' },
    { img: X, link: 'https://x.com/TheStartupTN' },
  ];

  return (
    <div className="bg-white isolate">
      <div
        className="flex flex-col bg-[#18BFDB] h-[60vh] md:rounded-t-[60px] overflow-hidden"
        style={{ borderRadius: '50px 23px 0px 0px' }}
      >
        {/* Marquee */}
        <div className="inline-flex whitespace-nowrap w-full animate-marking text-black font-medium text-2xl sm:text-4xl md:text-5xl space-x-8 py-3 pt-5 px-4">
          {Array(7)
            .fill('Codissia Trade Fair Complex, Coimbatore')
            .map((text, index) => (
              <div key={index} className="space-x-4">
                <span>{text}</span>
                {index < 6 && <span>|</span>}
              </div>
            ))}
        </div>

        {/* Black section */}
        <div
          className="bg-black flex flex-col md:rounded-t-[70px] h-full relative"
          style={{ borderRadius: '50px 23px 0px 0px' }}
        >
          {/* Group enables hover detection */}
          <div className="safe-cont group flex items-center justify-center h-full w-full relative">
            {/* DISRUPT TO RISE Text */}
            <div className="flex w-full h-full justify-center items-center">
              <p className="text-3xl sm:text-5xl md:text-9xl text-white text-center font-medium tracking-widest group-hover:-rotate-6 transition-all duration-300">
                DISRUPT TO RISE
              </p>
            </div>

            {/* Hover-only CTA for desktop */}
            <div className="hidden md:flex flex-row justify-even items-center gap-4 absolute top-10 bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <CTAButton src="https://event.startuptn.in/register" className="rounded-2xl">
                <div className="w-60 h-10 px-10  flex items-center justify-center">Book Your Stall</div>
              </CTAButton>
              <CTAButton
                src="https://event.startuptn.in/"
                className="rounded-2xl "
              >
                <div className="w-60 h-10 px-10  flex items-center justify-center">Book Your Pass</div>
              </CTAButton>
            </div>

            {/* Always-visible CTAs on mobile */}
            <div className="md:hidden absolute bottom-5 w-full flex flex-row justify-even items-center gap-4 px-4">
              <CTAButton src="https://event.startuptn.in/register" className="rounded-2xl w-full">
                <div className="w-50 h-9 px-5  flex items-center justify-center">Book Your Stall</div>
              </CTAButton>
              <CTAButton
                src="https://event.startuptn.in/"
                className="rounded-2xl w-full"
              >
                <div className="w-50 h-9 px-5  flex items-center justify-center">Book Your Pass</div>
              </CTAButton>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="safe-cont w-full text-white py-4 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            {/* Contact */}
            <div className="text-center md:text-left">
              <p>
                Contact: <a href="mailto:events@startuptn.in"> <u>events@startuptn.in</u></a>
              </p>
              <p>
                phone: <a href="tel:+914422256789"><u>(+91) 4422256789</u></a> / <a href="tel:+91155343"><u>155343</u></a>
              </p>
              <p className=' hidden md:block'>All Rights Reserved © 2025</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 justify-center">
              {data.map((item, index) => (
                <a key={index} href={item.link} className="rounded-full w-10 h-10">
                  <img
                    src={item.img}
                    alt={`Social ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}

            </div>

            {/* Policy Links */}
            <p className=' block md:hidden '>All Rights Reserved © 2025</p>
            <div className="flex gap-6 justify-center">
              <p className="cursor-pointer"><a href='terms-and-condition'>Terms & Conditions</a></p>
              <p className="cursor-pointer"><a href='privacy-policy'>Privacy Policy</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
