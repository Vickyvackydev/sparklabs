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
            "flex flex-col gap-y-5 w-[547px] font-inter font-medium text-2xl",
            darkmode ? "text-custom" : "text-custom-black"
          )}
        >
          {[
            `I design and manage digital products that work — beautifully and efficiently. Through a blend of design systems, product strategy, and streamlined workflows, I help teams launch scalable platforms and ship faster without sacrificing quality. From user research to product launch, I focus on clarity, speed, and systems that reduce cost per deliverable while maintaining exceptional execution.`,
            `Have a challenge, product idea, or team that needs momentum?`,
            `Let’s build something that lasts.`,
            `📧imoh.silas@gmail.com`,
            `📍Based in Lagos Nigeria, Operating Worldwide`,

            // `Alena, Managing Partner`,
            // `alena@Sparklabs.design\nLinkedIn`,
          ].map((text, index) => (
            <motion.span
              key={index}
              variants={fadeUp}
              custom={index + 2}
              className={clsx(index === 3 ? "text-[#00ED56]" : "")}
            >
              {text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </motion.span>
          ))}
          <motion.span
            className="cursor-pointer hover:underline"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/imoh-silas-7185a712b/",
                "_blank"
              )
            }
            variants={fadeUp}
          >
            🔗 Linkedin
          </motion.span>
          <motion.span
            className="cursor-pointer hover:underline"
            onClick={() =>
              window.open(
                "http://calendly.com/imoh-silas/15min?back=1&month=2024-09",
                "_blank"
              )
            }
            variants={fadeUp}
          >
            📞 Book a call
          </motion.span>
        </motion.div>
      </motion.div>
      <More />
    </>
  );
}

export default Contact;
