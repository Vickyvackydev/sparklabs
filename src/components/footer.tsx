import { useSelector } from "react-redux";
import {
  IMOH_FOOTER,
  LIGHT_MODE_FOOTER_LOGO,
  SPARK_LABS_FOOTER_LOGO,
} from "../assets";
import { selectDarkMode } from "../state/slices/globalReducer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { animationVariants } from "../constant";

function Footer() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div
      className="w-full h-full p-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={animationVariants.footerContainer}
    >
      {/* Logo */}
      <motion.div variants={animationVariants.fadeUp} className="p-10">
        <img
          src={IMOH_FOOTER}
          className="w-full object-contain h-full"
          alt=""
        />
      </motion.div>

      {/* Footer Text Columns */}
      <div className="w-full flex items-start justify-between">
        <motion.span
          variants={animationVariants.fadeUp}
          className={clsx(
            "text-sm font-normal font-inter ",
            darkmode ? "text-custom" : "text-custom-black"
          )}
        >
          ®Rights reserved, {new Date().getFullYear()} © hsparklabs.design
        </motion.span>

        <motion.div
          variants={animationVariants.fadeUp}
          className="flex flex-col gap-y-2.5"
        >
          {[
            "Models & Solutions, Pricing",
            "Contact us",
            "Book a call",
            "hello@sparklabs.design",
          ].map((text, idx) => (
            <span
              key={idx}
              className={clsx(
                "text-sm font-normal font-inter ",
                darkmode ? "text-custom" : "text-custom-black"
              )}
            >
              {text}
            </span>
          ))}
        </motion.div>

        <motion.div
          variants={animationVariants.fadeUp}
          className="flex flex-col gap-y-2.5"
        >
          <span
            className={clsx(
              "text-sm font-normal font-inter ",
              darkmode ? "text-custom" : "text-custom-black"
            )}
          >
            Kleine-Gartmanplantsoen 21, <br /> 1017 RP, Amsterdam
          </span>
          <span
            className={clsx(
              "text-sm font-normal font-inter ",
              darkmode ? "text-custom" : "text-custom-black"
            )}
          >
            Privacy Policy
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Footer;
