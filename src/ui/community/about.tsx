import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";
function AboutCommunity() {
  const darkmode = useSelector(selectDarkMode);

  return (
    <motion.div
      variants={animationVariants.container}
      className="lg:px-10 px-5 py-20 flex lg:flex-row flex-col items-start justify-between"
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col text-[50px] w-full font-anton items-start gap-y-20"
      >
        <span
          className={clsx("", darkmode ? "text-white" : "text-custom-black")}
        >
          10X Community
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
        className={clsx(
          "flex flex-col gap-y-12",
          darkmode ? "text-white" : "text-custom-black"
        )}
      >
        <div className="flex flex-col">
          <span> Expertise</span>
          <span>Design, Strategy & Web</span>
          <span>Credits</span>
          <span className="underline"></span>
        </div>
        <span
          className={clsx(
            "text-sm font-normal text-[#4D4D4D] leading-[20px] font-inter",
            darkmode && "text-white"
          )}
        >
          <span
            className={clsx(
              "text-[#424242] font-bold",
              darkmode && "text-white"
            )}
          >
            {" "}
            A Brand for Collective Power:
          </span>{" "}
          <br /> 10X Community is more than a network — it’s a movement. Born
          from the need to empower grassroots thinkers, reformers, and young
          innovators, the community serves as a launchpad for collective action
          across Nigeria and the broader African continent. Our role was to
          translate that vision into a bold, unified brand identity and a
          digital landing page that reflects the spirit of change and
          connection.
        </span>
      </motion.div>
    </motion.div>
  );
}

export default AboutCommunity;
