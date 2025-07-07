import { useSelector } from "react-redux";
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
import { selectDarkMode } from "../../state/slices/globalReducer";
import clsx from "clsx";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sectionFadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardsStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

function WurletDesigns() {
  const darkmode = useSelector(selectDarkMode);
  const zoomRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: zoomRef,
    offset: ["start end", "end start"],
  });
  const zoomScale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]), {
    stiffness: 100,
    damping: 20,
  });
  return (
    <div className="flex items-center justify-center flex-col">
      <motion.div
        className="py-16 flex flex-col gap-y-5 items-center w-[700px] justify-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span
          className={clsx(
            "font-anton text-4xl  text-center leading-12",
            darkmode ? "text-white" : "text-[#4A4A4A] "
          )}
        >
          Brand Strategy & Design Philosophy: <br />{" "}
          <span
            className={clsx("text-[#262626]", darkmode && "text-[#BBBBBB]")}
          >
            {" "}
            Control, Clarity, Confidence
          </span>
        </span>
        <span
          className={clsx(
            "text-sm font-medium font-inter text-[#808080]",
            darkmode && "text-white"
          )}
        >
          A great identity isn’t just seen — it’s felt. We extended the 10X
          visual language into use cases that speak to its audience: social
          banners, event branding, flyers, and merchandise concepts. Every
          touchpoint was crafted to spark a sense of belonging and shared
          purpose — whether viewed on a poster in a local hub or online in a
          WhatsApp
        </span>
      </motion.div>
      <motion.div
        className="mt-10 grid grid-cols-2 gap-3.5 w-full p-10"
        variants={gridStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          WURLET_FRAME_1,
          WURLET_FRAME_2,
          WURLET_FRAME_3,
          WURLET_FRAME_4,
          WURLET_FRAME_5,
          WURLET_FRAME_6,
        ].map((item, index) => (
          <motion.div
            key={index}
            className="w-full h-full overflow-hidden rounded-xl"
            variants={itemFadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={item}
              className="w-full h-full object-contain transition-transform duration-300"
              alt=""
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="py-16 flex flex-col gap-y-5 items-center w-[650px] justify-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span
          className={clsx(
            "font-anton text-3xl text-[#262626]  text-center leading-12",
            darkmode && "text-white"
          )}
        >
          Style Guide:{" "}
          <span
            className={clsx(" text-[#4A4A4A]", darkmode && "text-[#BBBBBB]")}
          >
            A Scalable, Consistent System
          </span>
        </span>
        <span
          className={clsx(
            "text-sm font-medium font-inter text-[#808080]",
            darkmode && "text-white"
          )}
        >
          We delivered a comprehensive brand style guide that covered every
          aspect of the Wurlet visual identity — from logo usage and grid
          systems to type hierarchy, motion guidelines, and accessibility
          standards. The guide serves as a single source of truth, ensuring
          design consistency across teams, platforms, and future campaigns.
        </span>
      </motion.div>
      <div className="w-full h-full p-10" ref={zoomRef}>
        <motion.img
          src={WURLET_FRAME_7}
          className="w-full h-full object-contain"
          style={{ scale: zoomScale }}
          alt=""
        />

        <motion.div
          className="grid grid-cols-2 gap-3.5 w-full mt-5"
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[
            WURLET_FRAME_8,
            WURLET_FRAME_9,
            WURLET_FRAME_10,
            WURLET_FRAME_11,
          ].map((item, i) => (
            <motion.div
              key={i}
              className="w-full h-full overflow-hidden rounded-xl"
              variants={itemFadeUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={item} className="w-full h-full object-contain" alt="" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-20 p-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardsStagger}
      >
        {/* Heading */}
        <motion.span
          variants={sectionFadeUp}
          className={clsx(
            "font-inter text-[#282828] text-[70px]",
            darkmode && "text-custom"
          )}
        >
          Check out more projects
        </motion.span>

        {/* Cards */}
        <div className="flex items-center justify-between gap-x-5 mt-10">
          {/* First Card */}
          <motion.div
            variants={sectionFadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="w-full h-full rounded-xl overflow-hidden"
          >
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
          </motion.div>

          {/* Second Card */}
          <motion.div
            variants={sectionFadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="w-full h-full rounded-xl overflow-hidden"
          >
            <img
              src={BRAND}
              className="w-[600px] h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#0042E5] rounded-b-xl">
              <span className="text-[80px] font-anton leading-20 text-[#D3E1FF]">
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default WurletDesigns;
