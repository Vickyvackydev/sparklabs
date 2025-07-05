import { PICTURE_1, PICTURE_2, POINTER } from "../assets";

function More() {
  return (
    <div className="w-full bg-[#ECECEC] flex items-start justify-between p-10">
      <span className="font-anton text-[80px] font-normal text-custom-black leading-[90px]">
        CURVE- <br />
        CHANGING <br /> DESIGN
      </span>
      <div className="flex flex-col gap-y-5 w-[547px]">
        <div className="w-full flex items-center justify-between border border-[#1212125E] rounded-xl p-3">
          <div className="flex items-start gap-x-2">
            <img
              src={PICTURE_1}
              className="w-[80px] h-[40px] object-contain"
              alt=""
            />
            <div className="flex flex-col">
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
        <div className="w-full flex items-center justify-between border border-[#1212125E] rounded-xl p-3">
          <div className="flex items-start gap-x-2">
            <img
              src={PICTURE_2}
              className="w-[80px] h-[40px] object-contain"
              alt=""
            />
            <div className="flex flex-col">
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
        <div className="w-full flex items-center justify-between border border-[#1212125E] rounded-xl p-3">
          <div className="flex items-start gap-x-2">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-anton-gray font-inter">
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
    </div>
  );
}

export default More;
