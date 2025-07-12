import clsx from "clsx";
import { CARTOON, MOBILE_VIEW } from "../../assets";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";
import { useMediaQuery } from "../../hooks";
import GlobalUi from "../globalui";

function LandingPage() {
  const darkmode = useSelector(selectDarkMode);
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <motion.div
      variants={animationVariants.container}
      className="flex items-center justify-center flex-col lg:px-10 px-5 w-full"
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="pb-10 flex lg:px-10 px-5 flex-col gap-y-5 items-center lg:w-[800px] w-full justify-center"
      >
        <span
          className={clsx(
            "font-anton text-3xl text-[#262626]",
            darkmode && "text-white"
          )}
        >
          Landing Page
        </span>
        <span
          className={clsx(
            "text-sm font-medium font-inter text-[#262626]",
            darkmode && "text-white"
          )}
        >
          <span
            className={clsx(
              "font-bold text-custom-black",
              darkmode && "text-white"
            )}
          >
            {" "}
            Telling the Story in a Single Scroll
          </span>{" "}
          <br /> With the brand foundation set, we designed a one-page website
          that welcomes new members and communicates the mission with clarity.
          The landing page is focused, scrollable, and action-oriented —
          introducing the community's vision, highlighting member stories, and
          inviting others to join the movement. Although still in development,
          the image below captures the tone and hierarchy that guides users from
          curiosity to connection.
        </span>
      </motion.div>

      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full h-full"
      >
        <img
          src={isMobile ? MOBILE_VIEW : CARTOON}
          className="w-full h-full object-contain rounded-xl"
          alt=""
        />
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        className="w-full mt-10"
        viewport={{ once: true, amount: 0.4 }}
      >
        <span
          className={clsx(
            "font-inter text-[#282828] lg:text-[70px] text-[35px] leading-[40px]",
            darkmode && "text-custom"
          )}
        >
          Check out more projects
        </span>
        {/* <div className="flex items-center justify-between w-full mt-6 gap-5 lg:flex-row flex-col">
          <div className="w-full h-full ">
            <img
              src={NEON}
              className="w-full h-full object-contain  rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#818CA3] rounded-b-xl">
              <span className="lg:text-[80px] text-[60px] mt-3.5 lg:leading-20 leading-[60px] font-anton text-[#D3E1FF]">
                {"Marketing".toUpperCase()} <br />
                {"content".toUpperCase()}
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
                  <img
                    src={POINTER_WHITE}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full scale-[98%]">
            <img
              src={BRAND}
              className=" w-full h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#0042E5] rounded-b-xl">
              <span className="lg:text-[80px] text-[60px]  font-anton lg:leading-20 leading-[60px] text-[#D3E1FF]">
                {"Brand".toUpperCase()} <br />
                {"systems".toUpperCase()}
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
        </div> */}
        <GlobalUi />
      </motion.div>
    </motion.div>
  );
}

export default LandingPage;
