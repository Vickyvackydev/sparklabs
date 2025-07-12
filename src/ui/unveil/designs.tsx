import clsx from "clsx";
import {
  UNVEIL_1,
  UNVEIL_2,
  UNVEIL_3,
  UNVEIL_4,
  UNVEIL_5,
  UNVEIL_6,
  UNVEIL_7,
  UNVEIL_8,
  UNVEIL_9,
} from "../../assets";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";
import GlobalUi from "../globalui";
function UnveilDesigns() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div
      variants={animationVariants.container}
      className="flex items-center justify-center flex-col py-20  lg:px-10 px-5"
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="pb-10 flex flex-col gap-y-5 items-start lg:w-[600px] w-full justify-center"
      >
        <span
          className={clsx(
            "font-anton text-5xl ",
            darkmode ? "text-white" : "text-[#262626]"
          )}
        >
          Brand{" "}
          <span
            className={clsx("", darkmode ? "text-[#C3C3C3]" : "text-[#262626]")}
          >
            {" "}
            Applications
          </span>{" "}
        </span>
        <span
          className={clsx(
            "text-sm font-medium font-inter text-[#262626]",
            darkmode && "text-white"
          )}
        >
          Once the brand identity was established, we applied it across a
          variety of touchpoints — from startup pitch decks and investor
          one-pagers to social launch graphics. Each expression was built to
          feel unmistakably “Unveils”: energetic, clean, and instantly
          recognizable.
        </span>
        <ul
          className={clsx(
            "list-disc list-inside font-inter text-sm",
            darkmode && "text-[#BBBBBB]"
          )}
        >
          <li>Launch teaser graphics</li>
          <li>Branded documents or decks</li>
          <li>Social banners or announcement posts</li>
        </ul>
      </motion.div>

      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center justify-between gap-4 lg:flex-row flex-col mt-14"
      >
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img src={UNVEIL_1} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img src={UNVEIL_2} className="w-full h-full object-contain" alt="" />
        </div>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center justify-between gap-4 lg:flex-row flex-col mt-14"
      >
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img src={UNVEIL_3} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img src={UNVEIL_4} className="w-full h-full object-contain" alt="" />
        </div>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center justify-between gap-4 lg:flex-row flex-col mt-14"
      >
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img src={UNVEIL_5} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img src={UNVEIL_6} className="w-full h-full object-contain" alt="" />
        </div>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="bg-[#C8C8C875] p-5 w-full h-full mt-5 rounded-xl"
      >
        <img src={UNVEIL_7} className="w-full h-full object-contain" alt="" />
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="py-16 flex flex-col gap-y-5 items-start lg:w-[600px] w-full justify-center"
      >
        <span
          className={clsx(
            "font-anton text-5xl text-[#262626]",
            darkmode && "text-white"
          )}
        >
          Mobile App <span className="text-[#C3C3C3]"> (In Progress)</span>
        </span>
        <span
          className={clsx(
            "text-sm font-medium font-inter text-[#808080]",
            darkmode && "text-white"
          )}
        >
          With branding complete, we’re now building the mobile experience of
          Unveils — a fintech app that strips away complexity while offering
          powerful financial tools under the hood. Our focus is on user flow
          clarity, snappy UI transitions, and empowering copy. While still in
          development, the mobile screens reflect Unveils’ core belief:
          financial power should feel effortless.
        </span>
        <ul
          className={clsx(
            "list-disc list-inside font-inter text-sm",
            darkmode && "text-[#BBBBBB]"
          )}
        >
          <li>Selected screen previews (even low/mid-fidelity if necessary)</li>
          <li>Focus on key flows: onboarding, wallet setup, transactions</li>
          <li>UI design patterns (bottom nav, cards, charts)</li>
        </ul>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center justify-between gap-4 lg:flex-row flex-col mt-14"
      >
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img src={UNVEIL_9} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img src={UNVEIL_8} className="w-full h-full object-contain" alt="" />
        </div>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className={clsx(
          "py-16 font-inter text-[16px] text-[#292929] font-normal",
          darkmode && "text-white"
        )}
      >
        <span>
          Unveils is still unveiling — and we're proud to be part of its journey
          from day zero. The brand now has a strong visual foundation, and the
          product design is evolving rapidly. As we move closer to launch, we’re
          continuously iterating on feedback and pushing for simplicity without
          compromise. This is fintech — unmasked.
        </span>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        className="w-full"
        viewport={{ once: true, amount: 0.4 }}
      >
        <span
          className={clsx(
            "font-inter text-[#282828] lg:text-[70px] text-[35px] leading-[40px]",
            darkmode && "text-custom"
          )}
        >
          Check out more projects
        </span>
        {/* <div className="flex items-center justify-between w-full mt-6 gap-5 lg:flex-row flex-col">
          <div className="w-full h-full ">
            <img
              src={NEON}
              className="w-full h-full object-contain  rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#818CA3] rounded-b-xl">
              <span className="lg:text-[80px] text-[60px] mt-3.5 lg:leading-20 leading-[60px] font-anton text-[#D3E1FF]">
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
                  <img
                    src={POINTER_WHITE}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full scale-[98%]">
            <img
              src={BRAND}
              className=" w-full h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#0042E5] rounded-b-xl">
              <span className="lg:text-[80px] text-[60px]  font-anton lg:leading-20 leading-[60px] text-[#D3E1FF]">
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
        </div> */}
        <GlobalUi />
      </motion.div>
    </motion.div>
  );
}

export default UnveilDesigns;
