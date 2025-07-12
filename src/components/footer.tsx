import { useSelector } from "react-redux";
import { FOOTER_DARK_TEXT, IMOH_FOOTER } from "../assets";
import { selectDarkMode } from "../state/slices/globalReducer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { animationVariants } from "../constant";

const links = [
  {
    label: "Let's Work Together",
    link: "/contact",
  },
  {
    label: "Book a call",
    link: "http://calendly.com/imoh-silas/15min?back=1&month=2024-09",
  },
  {
    label: "imoh.silas@gmail.com",
    link: "",
  },
];
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
      <motion.div variants={animationVariants.fadeUp} className="lg:p-10 p-5">
        <img
          src={darkmode ? FOOTER_DARK_TEXT : IMOH_FOOTER}
          className="w-full object-contain h-full"
          alt=""
        />
      </motion.div>

      {/* Footer Text Columns */}
      <div className="w-full flex items-start lg:flex-row flex-col gap-y-6 justify-between">
        <motion.span
          variants={animationVariants.fadeUp}
          className={clsx(
            "text-sm font-normal font-inter ",
            darkmode ? "text-custom" : "text-custom-black"
          )}
        >
          ®Rights reserved, {new Date().getFullYear()} © Imoh Silas
        </motion.span>

        <motion.div
          variants={animationVariants.fadeUp}
          className="flex flex-col gap-y-2.5"
        >
          {links.map((text, idx) => (
            <span
              key={idx}
              onClick={() => window.open(text.link)}
              className={clsx(
                "text-sm font-normal font-inter cursor-pointer hover:underline",
                darkmode ? "text-custom" : "text-custom-black"
              )}
            >
              {text.label}
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
            Lagos, Nigeria
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
