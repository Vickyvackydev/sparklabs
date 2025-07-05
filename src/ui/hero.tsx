import {
  BLINKER,
  CROSS_BORDER_WHITE_MODE,
  PICTURE_1,
  PICTURE_2,
  POINTER,
} from "../assets";

function Hero() {
  return (
    <div className="w-full flex items-start flex-col gap-y-3 mt-10 px-10">
      <div className="w-fit px-3 py-2 rounded-full flex items-center gap-x-2.5 border-2 border-[#48484826]">
        <img src={BLINKER} className="w-[20px] h-[20px]" alt="" />
        <span className="text-[#1B1B1B] text-lg font-normal">
          Available for work
        </span>
      </div>
      <div className="flex  flex-col text-[80px] leading-[90px] ">
        <span className="font-anton text-anton-gray">
          {"Imagine. Create. Dominate.".toUpperCase()}{" "}
        </span>
        <span className="font-anton">
          {"Pioneering Digital product For Ambitious brands".toUpperCase()}
        </span>
      </div>
      <span className="text-xl font-medium text-inter-gray">
        Transforming industries with innovative tech: Web3 integration, Web2
        optimization, <br /> bespoke design, and scalable platform development.
      </span>

      <div className="flex items-center  gap-x-2.5 mt-32 w-full justify-between">
        <div className="w-full flex items-center justify-between border border-[#1212125E] rounded-xl px-3 py-1">
          <div className="flex items-start gap-x-2">
            <img
              src={PICTURE_1}
              className="w-[120px] h-[108px] object-contain"
              alt=""
            />
            <div className="flex flex-col mt-3.5">
              <span className="text-sm font-medium text-anton-gray font-inter">
                Models, Pricing & Solutions
              </span>
              <span className="text-xs font-normal text-anton-gray font-inter">
                Short-term/One off, Long-term; and 4 models for your <br />{" "}
                current stage
              </span>
            </div>
          </div>
          <button className="">
            <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
          </button>
        </div>
        <div className="w-full flex items-center justify-between border border-[#1212125E] rounded-xl px-3 py-1">
          <div className="flex items-start gap-x-2">
            <img
              src={PICTURE_2}
              className="w-[120px] h-[108px] object-contain"
              alt=""
            />
            <div className="flex flex-col mt-3.5">
              <span className="text-sm font-medium text-anton-gray font-inter">
                Contact us
              </span>
              <span className="text-xs font-normal text-anton-gray font-inter">
                Tell us about your project
              </span>
            </div>
          </div>
          <button className="">
            <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-x-5 mt-5 relative">
        <div className="w-full bg-[#F6FA5E] p-5 rounded-xl flex flex-col gap-y-5">
          <span className="text-[92px] font-anton leading-[90px] text-custom-black">
            CONTENT AND DESIGN <br /> SYSTEMS
          </span>
          <span className="text-xs font-normal text-custom-black font-inter">
            Branding & Brand Design Systems, Product Design Systems, Digital
            Experiences, UX/UI, <br /> Images, Videos, Motion Graphics, and SFX.
          </span>
          <div className="w-full flex items-center justify-between border border-[#11111129] rounded-xl p-3">
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col">
                <span className="text-[13.13px] font-medium text-anton-gray font-inter">
                  Book a call
                </span>
                <span className="text-xs font-normal text-anton-gray font-inter">
                  Choose your time slot
                </span>
              </div>
            </div>
            <button className="">
              <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
            </button>
          </div>
        </div>
        <img
          src={CROSS_BORDER_WHITE_MODE}
          className="w-[263px] h-[110px] absolute left-[40%]"
          alt=""
        />
        <div className="w-full bg-gray-bgrd p-5  rounded-xl flex flex-col gap-y-5">
          <span className="text-[92px] h-[270px] font-anton leading-[90px] text-custom">
            SOFTWARE <br /> SOLUTIONS
          </span>
          <span className="text-xs font-normal text-custom font-inter">
            Branding & Brand Design Systems, Product Design Systems, Digital
            Experiences, UX/UI, <br /> Images, Videos, Motion Graphics, and SFX.
          </span>
          <div className="w-full flex items-center justify-between border border-[#C8D3CC29] rounded-xl p-3">
            <div className="flex items-start gap-x-2">
              <div className="flex flex-col">
                <span className="text-[13.13px] font-medium text-custom font-inter">
                  Book a call
                </span>
                <span className="text-xs font-normal text-custom font-inter">
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
    </div>
  );
}

export default Hero;
