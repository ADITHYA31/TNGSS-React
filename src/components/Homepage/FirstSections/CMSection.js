import CM from "../../../assets/CM.svg?url";
import CMbg from "../../../assets/CMbg.svg?url";

export default function CMSection() {
  return (
    <section 
      className="sticky top-0 h-screen w-full my-28 bg-white z-20 flex items-center justify-center overflow-hidden text-black px-4" 
      style={{ backgroundImage: `url(${CMbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-left w-1/2 text-40px space-y-4 px-6 ">
        <p className="w-full px-4" style={{ fontSize: '30px' }}>
          “The government is focusing on Integrated Industrial Development in the State, and the contribution of StartupTN to this effort is significant. StartupTN’s activities align perfectly with the State Government’s initiatives to make Tamil Nadu the Number One State in all fields.”
        </p>
        <span className="font-semibold text-left" style={{ fontSize: '20px', width: '90%' }}>- Thiru. M.K. Stalin</span>
        <span className="text-lg text-left" style={{ fontSize: '20px', width: '90%' }}>Hon'ble Chief Minister of Tamil Nadu</span>
      </div>

      {/* Full-Sized Image */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          alt=""
          src={CM}
          className="h-full w-auto object-contain object-center z-10"
        />
      </div>
    </section>
  );
}
