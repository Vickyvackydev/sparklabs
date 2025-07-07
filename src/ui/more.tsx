import { PICTURE_1, PICTURE_2, POINTER } from "../assets";
import { motion } from "framer-motion";
import { animationVariants } from "../constant";

function More() {
  return (
    <motion.div
      className="w-full bg-[#ECECEC] flex items-start justify-between p-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Text Block */}
      <motion.span
        className="font-anton text-[80px] font-normal text-custom-black leading-[90px]"
        variants={animationVariants.leftSlideIn}
      >
        CURVE- <br />
        CHANGING <br /> DESIGN
      </motion.span>

      {/* Right Cards */}
      <motion.div
        className="flex flex-col gap-y-5 w-[547px]"
        variants={animationVariants.rightStaggerContainer}
      >
        {[1, 2, 3].map((_, idx) => (
          <motion.div
            key={idx}
            variants={animationVariants.cardFadeSlide}
            className="w-full flex items-center justify-between border border-[#1212125E] rounded-xl p-3"
          >
            <div className="flex items-start gap-x-2">
              {idx === 0 && (
                <img
                  src={PICTURE_1}
                  className="w-[80px] h-[40px] object-contain"
                  alt=""
                />
              )}
              {idx === 1 && (
                <img
                  src={PICTURE_2}
                  className="w-[80px] h-[40px] object-contain"
                  alt=""
                />
              )}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-anton-gray font-inter">
                  {idx === 0
                    ? "Models, Pricing & Solutions"
                    : idx === 1
                    ? "Contact us"
                    : "Book a call"}
                </span>
                <span className="text-xs font-normal text-anton-gray font-inter">
                  {idx === 0
                    ? "Short-term/One off, Long-term; and 4 models for your current stage"
                    : idx === 1
                    ? "Tell us about your project"
                    : "Choose your time slot"}
                </span>
              </div>
            </div>
            <button>
              <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default More;
