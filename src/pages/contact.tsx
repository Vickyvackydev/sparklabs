import { useSelector } from "react-redux";
import More from "../ui/more";
import { selectDarkMode } from "../state/slices/globalReducer";
import { motion } from "framer-motion";
import clsx from "clsx";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};
function Contact() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="p-10 flex items-start justify-between"
      >
        {/* Left title */}
        <motion.span
          variants={fadeUp}
          custom={0}
          className={clsx(
            "text-[80px] font-anton leading-20",
            darkmode ? "text-custom" : "text-custom-black"
          )}
        >
          Contact <br /> US
        </motion.span>

        {/* Right content */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className={clsx(
            "flex flex-col gap-y-10 w-[547px] font-inter font-medium text-2xl",
            darkmode ? "text-custom" : "text-custom-black"
          )}
        >
          {[
            `We started SparkLab.design to establish visual languages and build product and digital experiences, optimizing production with centralized design systems management, procedural workflows, and semi-automatic proprietary tools. Our methods promote a high-speed production environment and a steady decrease in costs per deliverable, while preserving exceptional content quality.`,
            `Tell us about Challenge / Project / Company:`,
            `hello@sparklabs.design\nBook a call`,
            `Kleine-Gartmanplantsoen 21, 1017 RP, Amsterdam (Operating Worldwide)`,
            `Alena, Managing Partner`,
            `alena@Sparklabs.design\nLinkedIn`,
          ].map((text, index) => (
            <motion.span
              key={index}
              variants={fadeUp}
              custom={index + 2}
              className={clsx(index === 2 ? "text-[#00ED56]" : "")}
            >
              {text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      <More />
    </>
  );
}

export default Contact;
