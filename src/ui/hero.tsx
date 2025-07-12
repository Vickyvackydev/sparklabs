import { useSelector } from "react-redux";
import {
  BLINKER,
  CROSS_BORDER_WHITE_MODE,
  PICTURE_2,
  POINTER,
  POINTER_WHITE,
} from "../assets";
import { selectDarkMode } from "../state/slices/globalReducer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { animationVariants } from "../constant";

function Hero() {
  const darkmode = useSelector(selectDarkMode);

  return (
    <motion.div
      variants={animationVariants.container}
      initial="hidden"
      animate="show"
      className={clsx(
        "w-full flex items-start flex-col gap-y-3 transition-colors duration-500 lg:mt-10 mt-5 lg:px-10 px-5"
      )}
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div
          className={clsx(
            "w-fit lg:px-3 px-2 lg:py-2 py-1 rounded-full flex items-center gap-x-2.5 border-2 border-[#48484826]",
            darkmode && "border-[#FFFFFF26]"
          )}
        >
          <img
            src={BLINKER}
            className="lg:w-[20px] lg:h-[20px] w-[10px] h-[10px] animate-pulse"
            alt=""
          />
          <span
            className={clsx(
              "text-[#1B1B1B] lg:text-lg text-xs font-normal",
              darkmode && "text-white"
            )}
          >
            Available for work
          </span>
        </div>
      </motion.div>

      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex  flex-col lg:text-[80px] text-[30px] lg:leading-[90px] leading-[40px] "
      >
        <span
          className={clsx(
            "font-anton text-anton-gray ",
            darkmode && "text-custom"
          )}
        >
          {/* {"Imagine. Create. Dominate.".toUpperCase()}{" "} */}
        </span>
        <span className={clsx("font-anton", darkmode && "text-custom")}>
          {"Shaping digital products that empower bold ideas and ambitious brands.".toUpperCase()}
        </span>
      </motion.div>
      <motion.span
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className={clsx(
          "lg:text-xl text-sm font-medium ",
          darkmode ? "text-custom" : "text-inter-gray"
        )}
      >
        Delivering industry-shaping digital products through Web3 innovation,
        Web2 refinement, <br /> user-centered design, and robust,
        scalable platforms.
      </motion.span>

      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center lg:flex-row flex-col  gap-2.5 mt-32 w-full justify-between"
      >
        {/* <div
          className={clsx(
            "w-full flex items-center justify-between border rounded-xl px-3 py-1",
            darkmode ? "border-[#C8D3CC29]" : "border-[#1212125E] "
          )}
        >
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
            {darkmode ? (
              <img src={POINTER_WHITE} className="w-[20px] h-[20px]" alt="" />
            ) : (
              <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
            )}
          </button>
        </div> */}
        <div
          className={clsx(
            "w-full flex items-center justify-between border rounded-xl px-3 py-1",
            darkmode ? "border-[#C8D3CC29]" : "border-[#1212125E] "
          )}
        >
          <div className="flex items-start gap-x-2">
            <img
              src={PICTURE_2}
              className="lg:w-[120px] lg:h-[108px] w-[80px] h-[60px] object-contain"
              alt=""
            />
            <div className="flex flex-col mt-3.5">
              <span className="text-sm font-medium text-anton-gray font-inter">
                Let's Work Together
              </span>
              <span className="text-xs font-normal text-anton-gray font-inter">
                Tell me about your project
              </span>
            </div>
          </div>
          <button className="">
            {darkmode ? (
              <img src={POINTER_WHITE} className="w-[20px] h-[20px]" alt="" />
            ) : (
              <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
            )}
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full flex items-center lg:flex-row flex-col justify-between gap-5 mt-5 relative"
      >
        <div className="w-full bg-[#F6FA5E] p-5 rounded-xl flex flex-col gap-y-5">
          <span className="lg:text-[92px] text-[50px] font-anton lg:leading-[90px] leading-[50px] text-custom-black">
            CONTENT AND DESIGN <br /> SYSTEMS
          </span>
          <span className="text-xs font-normal text-custom-black font-inter">
            Branding & Brand Design Systems, Product Design Systems, Digital
            Experiences, UX/UI, <br /> Images, Videos, Motion Graphics, and SFX.
          </span>
          <div
            onClick={() =>
              window.open(
                "http://calendly.com/imoh-silas/15min?back=1&month=2024-09"
              )
            }
            className="w-full flex cursor-pointer items-center justify-between border border-[#11111129] rounded-xl p-3"
          >
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
          className="w-[263px] h-[110px] lg:block hidden absolute left-[40%]"
          alt=""
        />
        <div className="w-full bg-gray-bgrd p-5  rounded-xl flex flex-col gap-y-5">
          <span className="lg:text-[92px] text-[50px] lg:h-[270px] h-[180px] font-anton lg:leading-[90px] leading-[50px] text-custom">
            PRODUCTS <br /> MANAGEMENT
          </span>
          <span className="text-xs font-normal text-custom font-inter">
            From vision to execution — I lead product discovery, define
            roadmaps, coordinate teams, <br /> and drive outcomes that matter.
          </span>
          <div
            onClick={() =>
              window.open(
                "http://calendly.com/imoh-silas/15min?back=1&month=2024-09"
              )
            }
            className="w-full cursor-pointer flex items-center justify-between border border-[#C8D3CC29] rounded-xl p-3"
          >
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
              {darkmode ? (
                <img src={POINTER_WHITE} className="w-[20px] h-[20px]" alt="" />
              ) : (
                <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
