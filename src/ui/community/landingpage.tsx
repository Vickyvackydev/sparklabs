import clsx from "clsx";
import { BRAND, CARTOON, NEON, POINTER_WHITE } from "../../assets";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";
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
function LandingPage() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div
      variants={animationVariants.container}
      className="flex items-center justify-center flex-col px-10"
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="pb-10 flex px-10 flex-col gap-y-5 items-center w-[800px] justify-center"
      >
        <span
          className={clsx(
            "font-anton text-3xl text-[#262626]",
            darkmode && "text-white"
          )}
        >
          Landing Page
        </span>
        <span
          className={clsx(
            "text-sm font-medium font-inter text-[#262626]",
            darkmode && "text-white"
          )}
        >
          <span
            className={clsx(
              "font-bold text-custom-black",
              darkmode && "text-white"
            )}
          >
            {" "}
            Telling the Story in a Single Scroll
          </span>{" "}
          <br /> With the brand foundation set, we designed a one-page website
          that welcomes new members and communicates the mission with clarity.
          The landing page is focused, scrollable, and action-oriented —
          introducing the community's vision, highlighting member stories, and
          inviting others to join the movement. Although still in development,
          the image below captures the tone and hierarchy that guides users from
          curiosity to connection.
        </span>
      </motion.div>

      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full h-full"
      >
        <img src={CARTOON} className="w-full h-full object-contain" alt="" />
      </motion.div>
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
                  <img
                    src={POINTER_WHITE}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
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
    </motion.div>
  );
}

export default LandingPage;
