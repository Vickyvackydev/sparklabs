import clsx from "clsx";
import { BRAND, NEON, POINTER, POINTER_WHITE, WOMAN } from "../../assets";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";
function ModelHero() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div variants={animationVariants.container} className="p-10 mt-11">
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-start flex-col gap-y-12"
      >
        <span
          className={clsx(
            "text-[80px] font-anton  leading-20",
            darkmode ? "text-custom" : "text-custom-black"
          )}
        >
          Models & <br /> Solutions
        </span>

        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex items-center justify-between gap-x-5"
        >
          <div className="w-full h-full ">
            <img
              src={NEON}
              className="w-full h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className={clsx("w-full p-5 bg-[#818CA3] rounded-b-xl")}>
              <span className="text-[50px] mt-3.5 leading-14 font-anton text-[#D3E1FF]">
                {"content".toUpperCase()} <br />
                {"and design systems".toUpperCase()}
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
                  <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full scale-[98%]">
            <img
              src={BRAND}
              className="w-[600px] h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#0042E5] rounded-b-xl">
              <span className="text-[50px]  font-anton leading-14 text-[#D3E1FF]">
                {"Software".toUpperCase()} <br />
                {"tttttvtsolutions".toUpperCase()}
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
          </div>
        </motion.div>
        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="font-inter flex flex-col gap-y-5"
        >
          <span
            className={clsx(
              "text-[#343434] text-3xl",
              darkmode && "text-custom"
            )}
          >
            No matter what project we are starting or which model clients are
            choosing, there will always be an underlying level of automation and
            optimization on our side or on our clients'. This is the core of
            genbrand.design operations, services, offerings, and culture.
          </span>
          <div className="flex items-start gap-x-2">
            <img src={WOMAN} className="w-[48px] h-[48px]" alt="" />
            <div
              className={clsx(
                "flex flex-col items-start text-sm",
                darkmode ? "text-custom" : "text-custom-black"
              )}
            >
              <span>Alena, Managing Partner</span>
              <span>alena@gen brand.design</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ModelHero;
