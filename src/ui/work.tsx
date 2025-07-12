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
import { useSelector } from "react-redux";
import { selectDarkMode } from "../state/slices/globalReducer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { animationVariants } from "../constant";

function Work() {
  const navigate = useNavigate();
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div
      variants={animationVariants.container}
      id="projects"
      className="w-full items-start mt-8 flex flex-col gap-y-10 lg:px-10 px-5"
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col gap-y-1"
      >
        <span
          className={clsx(
            "font-semibold  text-3xl",
            darkmode ? "text-custom" : "text-[#363636]"
          )}
        >
          Selected Work
        </span>
        <span
          className={clsx(
            " font-medium lg:text-lg text-sm lg:leading-[25px] leading-[20px]",
            darkmode ? "text-custom" : "text-[#6B6B6B]"
          )}
        >
          Every product is designed - visually and how it works. <br /> Using it
          will leave an impression. I’m going to make sure it’s a good one.
        </span>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center lg:flex-row flex-col justify-between gap-5"
      >
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
            <div
              onClick={() =>
                window.open("https://cryptorytest.netlify.app/", "_blank")
              }
              className="w-full cursor-pointer flex items-center justify-between border border-[#11111129] rounded-xl p-3"
            >
              <div className="flex items-start gap-x-2">
                <div className="flex flex-col">
                  <span className="text-[13.13px] font-medium text-black font-inter">
                    Visit Site
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
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full h-full flex lg:flex-row flex-col rounded-xl -mt-5"
      >
        <img
          src={HAND_PHONE}
          className="w-[680px] h-full object-contain rounded-tl-xl lg:rounded-tr-none rounded-tr-xl lg:rounded-bl-xl "
          alt=""
        />
        <div className="w-full h-full bg-[#CDCDD1] p-5 lg:rounded-tr-xl rounded-tr-none rounded-br-xl lg:rounded-bl-none rounded-bl-xl">
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
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full h-full flex lg:flex-row flex-col rounded-xl -mt-5"
      >
        <div className="w-full h-full bg-[#CDCDD1] p-5 rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl rounded-bl-none">
          <div className="flex flex-col gap-y-1.5 mt-4 items-start">
            <span className="font-inter text-xs">
              Investment and Financial service
            </span>
            <span className="font-anton text-custom-black text-5xl">
              UNVEILS
            </span>
          </div>
          <div className="flex items-center lg:flex-row flex-col  gap-5 lg:mt-[22.7rem] mt-[15rem]">
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
          className="w-[645px] h-full object-contain lg:rounded-tr-xl rounded-tr-none lg:rounded-br-none lg:rounded-bl-none rounded-bl-xl rounded-br-xl"
          alt=""
        />
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full h-full flex lg:flex-row flex-col rounded-xl -mt-5"
      >
        <img
          src={HAND_TAB}
          className="w-[645px] h-full object-contain rounded-tl-xl lg:rounded-tr-none rounded-tr-xl lg:rounded-bl-xl"
          alt=""
        />
        <div className="w-full h-full bg-[#38383B] p-5 lg:rounded-tr-xl rounded-tr-none rounded-br-xl lg:rounded-bl-none rounded-bl-xl">
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
            <div className="flex items-center lg:flex-row flex-col  gap-5 ">
              <div
                onClick={() => window.open("https://10x.ng/")}
                className="w-full flex cursor-pointer items-center justify-between border border-[#C8D3CC29] rounded-xl p-3"
              >
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-col">
                    <span className="text-[13.13px] font-medium text-custom font-inter">
                      Our Website
                    </span>
                    <span className="text-xs font-normal text-custom font-inter">
                      Visit our website
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
                      See more about us
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
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full h-full flex lg:flex-row flex-col rounded-xl -mt-5"
      >
        <div className="w-full h-full bg-[#CDCDD1] p-5 rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-bl-xl rounded-bl-none">
          <div className="flex flex-col gap-y-1.5 mt-4 items-start">
            <span className="font-inter text-xs">
              Product Content Company (partnered)
            </span>
            <span className="font-anton text-custom-black text-5xl">
              {"Profit AI".toUpperCase()}
            </span>
          </div>
          <div className="flex items-center lg:flex-row flex-col  gap-5 lg:mt-[22.7rem] mt-[15rem]">
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
                    Partner's Website
                  </span>
                  <span className="text-xs font-normal text-custom-black font-inter">
                    Website under development
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
          className="w-[645px] h-full object-contain  lg:rounded-tr-xl rounded-tr-none lg:rounded-br-none rounded-bl-xl lg:rounded-bl-none rounded-br-xl"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}

export default Work;
