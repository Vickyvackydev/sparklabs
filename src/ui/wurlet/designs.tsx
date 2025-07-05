import {
  BRAND,
  NEON,
  POINTER,
  POINTER_WHITE,
  WURLET_FRAME_1,
  WURLET_FRAME_10,
  WURLET_FRAME_11,
  WURLET_FRAME_2,
  WURLET_FRAME_3,
  WURLET_FRAME_4,
  WURLET_FRAME_5,
  WURLET_FRAME_6,
  WURLET_FRAME_7,
  WURLET_FRAME_8,
  WURLET_FRAME_9,
} from "../../assets";

function WurletDesigns() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="py-16 flex flex-col gap-y-5 items-center w-[700px] justify-center">
        <span className="font-anton text-4xl text-[#4A4A4A]  text-center leading-12">
          Brand Strategy & Design Philosophy: <br />{" "}
          <span className="text-[#262626]"> Control, Clarity, Confidence</span>
        </span>
        <span className="text-sm font-medium font-inter text-[#808080]">
          A great identity isn’t just seen — it’s felt. We extended the 10X
          visual language into use cases that speak to its audience: social
          banners, event branding, flyers, and merchandise concepts. Every
          touchpoint was crafted to spark a sense of belonging and shared
          purpose — whether viewed on a poster in a local hub or online in a
          WhatsApp
        </span>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-3.5 w-full p-10">
        {[
          WURLET_FRAME_1,
          WURLET_FRAME_2,
          WURLET_FRAME_3,
          WURLET_FRAME_4,
          WURLET_FRAME_5,
          WURLET_FRAME_6,
        ].map((item) => (
          <div className="w-full h-full">
            <img src={item} className="w-full h-full object-contain" alt="" />
          </div>
        ))}
      </div>
      <div className="py-16 flex flex-col gap-y-5 items-center w-[650px] justify-center">
        <span className="font-anton text-3xl text-[#262626]  text-center leading-12">
          Style Guide:{" "}
          <span className=" text-[#4A4A4A]">A Scalable, Consistent System</span>
        </span>
        <span className="text-sm font-medium font-inter text-[#808080]">
          We delivered a comprehensive brand style guide that covered every
          aspect of the Wurlet visual identity — from logo usage and grid
          systems to type hierarchy, motion guidelines, and accessibility
          standards. The guide serves as a single source of truth, ensuring
          design consistency across teams, platforms, and future campaigns.
        </span>
      </div>
      <div className="w-full h-full p-10">
        <img
          src={WURLET_FRAME_7}
          className="w-full h-full object-contain "
          alt=""
        />
        <div className="grid grid-cols-2 gap-3.5 w-full mt-5">
          {[
            WURLET_FRAME_8,
            WURLET_FRAME_9,
            WURLET_FRAME_10,
            WURLET_FRAME_11,
          ].map((item) => (
            <div className="w-full h-full">
              <img src={item} className="w-full h-full object-contain" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 p-10">
        <span className="font-inter text-[#282828] text-[70px]">
          Check out more projects
        </span>
        <div className="flex items-center justify-between gap-x-5">
          <div className="w-full h-full ">
            <img
              src={NEON}
              className="w-full h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#818CA3] rounded-b-xl">
              <span className="text-[80px] mt-3.5 leading-20 font-anton text-[#D3E1FF]">
                {"Marketing".toUpperCase()} <br />
                {"content".toUpperCase()}
              </span>
              <div className="w-full mt-4 flex items-center justify-between border border-[#11111129] rounded-xl p-3">
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-col">
                    <span className="text-[13.13px] font-medium text-black font-inter">
                      Book a call
                    </span>
                    <span className="text-xs font-normal text-custom-black font-inter">
                      Choose your time slot
                    </span>
                  </div>
                </div>
                <button className="">
                  <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full scale-[98%]">
            <img
              src={BRAND}
              className="w-[600px] h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#0042E5] rounded-b-xl">
              <span className="text-[80px]  font-anton leading-20 text-[#D3E1FF]">
                {"Brand".toUpperCase()} <br />
                {"systems".toUpperCase()}
              </span>
              <div className="w-full flex items-center mt-6 justify-between border border-[#C8D3CC29] rounded-xl p-3">
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-col">
                    <span className="text-[13.13px] font-medium text-white font-inter">
                      Read Case Studies
                    </span>
                    <span className="text-xs font-normal text-[#C8D3CC] font-inter">
                      Choose your time slot
                    </span>
                  </div>
                </div>
                <button className="">
                  <img
                    src={POINTER_WHITE}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WurletDesigns;
