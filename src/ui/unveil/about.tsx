import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import clsx from "clsx";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";

function AboutUnveil() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div
      variants={animationVariants.container}
      className="px-10 py-20 flex items-start justify-between"
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex flex-col text-[70px] w-full font-anton items-start gap-y-20"
      >
        <span className={clsx("text-custom-black", darkmode && "text-white")}>
          Unveil Finance
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
          <span className="underline">IAS - Branding & Direction</span>
        </div>
        <span
          className={clsx(
            "text-sm font-normal text-[#4D4D4D] leading-[20px] font-inter",
            darkmode && "text-white"
          )}
        >
          Unveils is a fintech brand on a mission to make financial tools more
          transparent, accessible, and intuitive. As their design partner, we
          led the creation of a distinct, confident brand identity and are
          currently shaping the mobile app experience to match that vision.
          Unveils isn’t just a product — it’s a statement of clarity in a world
          of financial noise.
        </span>
        <div className="w-full bg-black-bgrd rounded-xl px-4 pt-7 pb-10 text-sm font-normal text-white">
          <span>
            We worked closely with the Unveils team to uncover the brand’s core
            attributes: bold, clean, trustworthy, and empowering. From these
            pillars, we developed a modern visual identity designed to resonate
            with a new generation of fintech users who demand both style and
            substance. The brand system includes a dynamic logo, a confident
            color palette, expressive typography, and a tone that speaks in
            short, sharp sentences.
          </span>
          <ul className="list-disc text-white font-normal text-sm list-inside mt-4">
            <li>Logo variations and construction</li>
            <li>Brand color palette + usage</li>
            <li>Typography choices with explanations</li>

            <li>Mockups on cards, signage, mobile headers</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AboutUnveil;
