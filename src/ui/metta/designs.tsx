import { useSelector } from "react-redux";
import {
  FRAME_3,
  FRAME_4,
  FRAME_5,
  FRAME_6,
  FRAME_7,
  FRAME_8,
  FRAME_9,
  LAST_FRAME,
} from "../../assets";
import { selectDarkMode } from "../../state/slices/globalReducer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";

function Designs() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <>
      <motion.div
        variants={animationVariants.container}
        className="flex items-center justify-center flex-col py-20 lg:px-10 px-5"
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
              "font-anton text-5xl text-center ",
              darkmode ? "text-white" : "text-[#262626]"
            )}
          >
            Outdoor Banner Design
          </span>
          <span
            className={clsx(
              "text-sm font-medium font-inter",
              darkmode ? "text-custom" : "text-[#262626]"
            )}
          >
            As Metta prepared for launch at key fintech and blockchain events,
            we designed outdoor and conference banners that made an instant
            impression. We kept the copy short and the visuals bold — focusing
            on Metta’s unique position as a user-friendly Web3 financial
            gateway. The outdoor system used layered gradients, modular layout
            grids, and crisp CTAs that mirrored the digital identity while
            standing out in physical space.
          </span>
          <ul
            className={clsx(
              "list-disc list-inside font-inter text-sm",
              darkmode ? "text-[#BBBBBB]" : "text-[#262626]"
            )}
          >
            <li>Mockups of banners in urban environments or expo booths</li>
            <li>
              Rationale for layout hierarchy (logo, slogan, CTA placement)
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full"
        >
          <img src={FRAME_3} className="w-full h-full object-contain" alt="" />
        </motion.div>
        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-center justify-between lg:flex-row flex-col gap-4 mt-14"
        >
          <div className="bg-[#C8C8C875] lg:p-10 p-5 rounded-xl">
            <img
              src={FRAME_4}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="bg-black-bgrd lg:px-8 px-5 lg:py-[6.75rem] py-4 rounded-xl flex lg:w-[700px] w-full flex-col gap-y-10 font-inter">
            <span className="text-[#8D8D8D] font-semibold text-xl">
              Laying the Emotional & Visual Groundwork
            </span>
            <p className="text-white font-normal text-sm">
              Beyond the app, we created supporting materials that kept the
              Metta brand strong and consistent. From investor pitch decks and
              whitepapers to social media templates and NFT drop invites, we
              ensured every element looked and felt like Metta — with clear
              brand guidelines, tone of voice, and visual continuity.
            </p>

            <ul className="list-disc text-white font-normal text-sm list-inside">
              <li>PDF or print materials</li>
              <li>Slide decks</li>
              <li>Event cards, wallet cards, onboarding email design</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-center justify-between gap-4 lg:flex-row flex-col mt-14"
        >
          <div className="bg-[#C8C8C875] lg:p-10 p-5 rounded-xl flex flex-col gap-y-5">
            <span className="text-[16px] font-semibold text-[#8D8D8D]">
              X Design{" "}
            </span>
            <img
              src={FRAME_5}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="bg-[#C8C8C875] lg:p-10 p-5 rounded-xl flex flex-col gap-y-5">
            <span className="text-[16px] font-semibold text-[#8D8D8D]">
              Asset Design{" "}
            </span>
            <img
              src={FRAME_6}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
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
              "font-anton text-5xl ",
              darkmode ? "text-white" : "text-[#262626]"
            )}
          >
            Dashboard Design
          </span>
          <span
            className={clsx(
              "text-sm font-medium font-inter",
              darkmode ? "text-custom" : "text-[#262626]"
            )}
          >
            The dashboard is where Metta truly comes to life. Designed with the
            high-frequency trader, casual investor, and Web3-native in mind, it
            supports wallet integration, token swap actions, portfolio insights,
            and transaction history — all in one fluid interface. Our challenge
            was balancing real-time data with cognitive ease. We used layered
            panes, semantic color-coding, and subtle motion to create a sense of
            flow while maintaining accuracy. space.
          </span>
          <ul
            className={clsx(
              "list-disc list-inside font-inter text-sm",
              darkmode ? "text-[#BBBBBB]" : "text-[#262626]"
            )}
          >
            <li>Mockups of banners in urban environments or expo booths</li>
            <li>
              Rationale for layout hierarchy (logo, slogan, CTA placement)
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-center justify-between lg:flex-row flex-col gap-4 mt-14"
        >
          <div className="bg-[#C8C8C875] lg:p-10 p-5 rounded-xl flex flex-col gap-y-5">
            <span className="text-[16px] font-semibold text-[#8D8D8D]">
              Option 1 Landing Page
            </span>
            <img
              src={FRAME_7}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="bg-[#C8C8C875] lg:p-10 p-5 rounded-xl flex flex-col gap-y-5">
            <span className="text-[16px] font-semibold text-[#8D8D8D]">
              Option 2 Landing Page
            </span>
            <img
              src={FRAME_8}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-center justify-between lg:flex-row flex-col gap-4 mt-14"
        >
          <div className="bg-[#C8C8C875] lg:p-10 p-5 rounded-xl flex flex-col gap-y-5">
            <img
              src={FRAME_9}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="bg-[#C8C8C875] lg:p-10 p-5  rounded-xl flex flex-col gap-y-5">
            <img
              src={LAST_FRAME}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </motion.div>
      </motion.div>
      <div className="lg:px-10 px-5 pb-4">
        <span
          className={clsx(
            "font-inter  lg:text-[70px] text-[35px] lg:leading-0 leading-[40px]",
            darkmode ? "text-custom" : "text-[#282828]"
          )}
        >
          Check out more projects
        </span>
      </div>
    </>
  );
}

export default Designs;
