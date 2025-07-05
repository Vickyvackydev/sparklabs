import { useNavigate } from "react-router-dom";
import {
  ARTIFACT,
  GLOBE,
  HAND_PHONE,
  HAND_TAB,
  LADY,
  POINTER,
  POINTER_DIVERT,
  POINTER_DIVERT_CUSTOM,
  POINTER_WHITE,
  UNVEILS,
} from "../assets";

function Work() {
  const navigate = useNavigate();
  return (
    <div
      id="projects"
      className="w-full items-start mt-8 flex flex-col gap-y-10 px-10"
    >
      <div className="flex flex-col gap-y-1">
        <span className="font-semibold text-[#363636] text-3xl">
          Selected Work
        </span>
        <span className="text-[#6B6B6B] font-medium text-lg leading-[25px]">
          Every product is designed - visually and how it works. <br /> Using it
          will leave an impression. I’m going to make sure it’s a good one.
        </span>
      </div>
      <div className="flex items-center justify-between gap-x-5">
        <div className="w-full h-full ">
          <img
            src={GLOBE}
            className="w-full h-full object-contain rounded-t-xl"
            alt=""
          />
          <div className="w-full p-5 bg-[#818CA3] rounded-b-xl">
            <span className="text-[80px] mt-3.5 font-anton text-[#D3E1FF]">
              CRYPTORY
            </span>
            <div className="w-full flex items-center justify-between border border-[#11111129] rounded-xl p-3">
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
            src={LADY}
            className="w-[600px] h-full object-contain rounded-t-xl"
            alt=""
          />
          <div className="w-full p-5 bg-[#0042E5] rounded-b-xl">
            <span className="text-[80px]  font-anton text-[#D3E1FF]">
              WURLET
            </span>
            <div
              onClick={() => navigate("/wurlet")}
              className="w-full cursor-pointer flex items-center justify-between border border-[#C8D3CC29] rounded-xl p-3"
            >
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
                <img src={POINTER_WHITE} className="w-[20px] h-[20px]" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex rounded-xl -mt-5">
        <img
          src={HAND_PHONE}
          className="w-[680px] h-full object-contain rounded-tl-xl rounded-bl-xl"
          alt=""
        />
        <div className="w-full h-full bg-[#CDCDD1] p-5 rounded-tr-xl rounded-br-xl">
          <div className="flex flex-col gap-y-1.5 mt-4 items-start">
            <span className="font-inter text-xs">
              Investment and Financial service
            </span>
            <span className="font-anton text-custom-black text-5xl">
              METTA WALLET
            </span>
          </div>
          <div className="flex flex-col gap-y-1.5 items-start mt-[22.7rem]">
            <span className="text-xs font-normal text-custom-black border-l border-[#11111129] pl-3">
              Design systems and custom tools for digital products in
              Product-Led Growth phase.
            </span>
            <div
              onClick={() => navigate("/metta")}
              className="w-full cursor-pointer flex items-center justify-between border border-[#11111129] rounded-xl p-3"
            >
              <div className="flex items-start gap-x-2">
                <div className="flex flex-col">
                  <span className="text-[13.13px] font-medium text-black font-inter">
                    Read Case Studies
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
      </div>
      <div className="w-full h-full flex rounded-xl -mt-5">
        <div className="w-full h-full bg-[#CDCDD1] p-5 rounded-tl-xl rounded-bl-xl">
          <div className="flex flex-col gap-y-1.5 mt-4 items-start">
            <span className="font-inter text-xs">
              Investment and Financial service
            </span>
            <span className="font-anton text-custom-black text-5xl">
              UNVEILS
            </span>
          </div>
          <div className="flex items-center gap-x-5 mt-[22.7rem]">
            <div className="w-full flex items-center justify-between border border-[#11111129] rounded-xl p-3">
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
            <div
              onClick={() => navigate("/unveil")}
              className="w-full flex items-center cursor-pointer justify-between border border-[#11111129] rounded-xl p-3"
            >
              <div className="flex items-start gap-x-2 ">
                <div className="flex flex-col">
                  <span className="text-[13.13px] font-medium text-black font-inter">
                    Read Case Studies
                  </span>
                  <span className="text-xs font-normal text-custom-black font-inter">
                    Visit partner's website
                  </span>
                </div>
              </div>
              <button className="">
                <img
                  src={POINTER_DIVERT}
                  className="w-[20px] h-[20px]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <img
          src={UNVEILS}
          className="w-[645px] h-full object-contain rounded-tr-xl rounded-br-xl"
          alt=""
        />
      </div>
      <div className="w-full h-full flex rounded-xl -mt-5">
        <img
          src={HAND_TAB}
          className="w-[645px] h-full object-contain rounded-tl-xl rounded-bl-xl"
          alt=""
        />
        <div className="w-full h-full bg-[#38383B] p-5 rounded-tr-xl rounded-br-xl">
          <div className="flex flex-col gap-y-1.5 mt-4 items-start">
            <span className="font-inter text-xs text-custom">
              Social Development Community
            </span>
            <span className="font-anton text-custom text-5xl">
              CUSTOM CONTENT <br />
              CREATION TOOLS
            </span>
          </div>
          <div className=" mt-[17rem] flex flex-col gap-y-2.5">
            <span className="text-xs font-normal text-custom border-l border-[#C8D3CC29] pl-3">
              Tailored to your brand, our proprietary self-serve content
              generation tools unlock the scale of your operations and
              streamline content production.
            </span>
            <div className="flex items-center gap-x-5">
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
                  <img
                    src={POINTER_WHITE}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </button>
              </div>
              <div
                onClick={() => navigate("/10x-community")}
                className="w-full flex cursor-pointer items-center justify-between border border-[#C8D3CC29] rounded-xl p-3"
              >
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-col">
                    <span className="text-[13.13px] font-medium text-custom font-inter">
                      Read Case Studies
                    </span>
                    <span className="text-xs font-normal text-custom font-inter">
                      Visit partner's website
                    </span>
                  </div>
                </div>
                <button className="">
                  <img
                    src={POINTER_DIVERT_CUSTOM}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex rounded-xl -mt-5">
        <div className="w-full h-full bg-[#CDCDD1] p-5 rounded-tl-xl rounded-bl-xl">
          <div className="flex flex-col gap-y-1.5 mt-4 items-start">
            <span className="font-inter text-xs">
              Product Content Company (partnered)
            </span>
            <span className="font-anton text-custom-black text-5xl">
              {"Profit AI".toUpperCase()}
            </span>
          </div>
          <div className="flex items-center gap-x-5 mt-[22.7rem]">
            <div className="w-full flex items-center justify-between border border-[#11111129] rounded-xl p-3">
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
            <div className="w-full flex items-center justify-between border border-[#11111129] rounded-xl p-3">
              <div className="flex items-start gap-x-2">
                <div className="flex flex-col">
                  <span className="text-[13.13px] font-medium text-black font-inter">
                    Content at scale
                  </span>
                  <span className="text-xs font-normal text-custom-black font-inter">
                    Visit partner's website
                  </span>
                </div>
              </div>
              <button className="">
                <img
                  src={POINTER_DIVERT}
                  className="w-[20px] h-[20px]"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
        <img
          src={ARTIFACT}
          className="w-[645px] h-full object-contain rounded-tr-xl rounded-br-xl"
          alt=""
        />
      </div>
    </div>
  );
}

export default Work;
