import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggered = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

function MettaAbout() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div
      className="lg:px-10 px-5 py-20 flex lg:flex-row flex-col gap-y-5 items-start justify-between"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggered}
    >
      {/* Left Column: IAMSTATIC */}
      <div className="flex flex-col text-[70px] w-full font-anton items-start gap-y-20">
        <motion.span
          variants={fadeUp}
          className={clsx("", darkmode ? "text-white" : "text-custom-black")}
        >
          IAMSTATIC
        </motion.span>
        <motion.span variants={fadeUp} className="text-[#949494]">
          {new Date().getFullYear()}
        </motion.span>
      </div>

      {/* Right Column */}
      <div className="w-full font-inter flex flex-col gap-y-10">
        {/* Top texts */}
        <motion.div
          variants={fadeUp}
          className={clsx(
            "flex flex-col",
            darkmode ? "text-white" : "text-custom-black"
          )}
        >
          <span>Expertise</span>
          <span>Design, Strategy & Web</span>
          <span>Credits</span>
          <span className="underline"></span>
        </motion.div>

        {/* Paragraph */}
        <motion.span
          variants={fadeUp}
          className={clsx(
            "text-sm font-normal leading-[20px] font-inter",
            darkmode ? "text-white" : "text-[#4D4D4D]"
          )}
        >
          Metta is a Web3-enabled financial exchange platform built to give
          users a seamless, secure, and intuitive experience in managing digital
          assets...
        </motion.span>

        {/* Callout box */}
        <motion.div
          variants={fadeUp}
          className={clsx(
            "w-full bg-black-bgrd rounded-xl px-4 pt-7 pb-10 text-sm font-normal text-white",
            darkmode ? "border border-[#292929]" : "border-none"
          )}
        >
          This section positions your agency as a strategic partner, not just a
          design executor. You’re communicating the mission and impact of the
          project.
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MettaAbout;
