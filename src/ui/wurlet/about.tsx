import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";

function AboutWurlet() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div
      variants={animationVariants.container}
      className="lg:px-10 px-5 lg:flex-row flex-col py-20 flex items-start justify-between"
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col text-[70px] w-full font-anton items-start gap-y-20"
      >
        <span
          className={clsx("", darkmode ? "text-white" : "text-custom-black")}
        >
          WURLET
        </span>
        <span className={clsx("text-[#949494]", darkmode && "text-custom")}>
          {new Date().getFullYear()}
        </span>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full font-inter flex flex-col gap-y-10"
      >
        <div
          className={clsx(
            "flex flex-col",
            darkmode ? "text-white" : "text-custom-black"
          )}
        >
          <span> Expertise</span>
          <span>Design, Strategy & Web</span>
          <span>Credits</span>
          <span className="underline"></span>
        </div>
        <span
          className={clsx(
            "text-sm font-normal  leading-[20px] font-inter",
            darkmode ? "text-white" : "text-[#4D4D4D]"
          )}
        >
          <span
            className={clsx(
              "text-custom-black font-bold",
              darkmode && "text-white"
            )}
          >
            {" "}
            Defining Identity in the Digital Age
          </span>{" "}
          <br />
          Wurlet is a platform that helps users build, manage, and share their
          digital footprint — on their own terms. Whether showcasing
          professional achievements or personal milestones, users have the power
          to decide what to reveal and what to keep private. Our role was to
          create a clear, cohesive visual system that matched this core idea of
          empowered identity sharing, beginning with a detailed brand style
          guide and extending to practical brand collaterals.
        </span>
      </motion.div>
    </motion.div>
  );
}

export default AboutWurlet;
