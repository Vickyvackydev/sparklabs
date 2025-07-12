import { motion } from "framer-motion";

import { BRAND, NEON, POINTER, POINTER_WHITE } from "../assets";

function GlobalUi() {
  const sectionFadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="flex items-center justify-between gap-5 mt-10 lg:flex-row flex-col">
      {/* First Card */}
      <motion.div
        variants={sectionFadeUp}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="w-full h-full rounded-xl overflow-hidden"
      >
        <img
          src={NEON}
          className="w-full h-full object-contain rounded-t-xl"
          alt=""
        />
        <div
          onClick={() =>
            window.open(
              "http://calendly.com/imoh-silas/15min?back=1&month=2024-09",
              "_blank"
            )
          }
          className="w-full p-5 bg-[#818CA3] cursor-pointer rounded-b-xl"
        >
          <span className="lg:text-[80px] text-[50px] mt-3.5 lg:leading-20 leading-[50px] font-anton text-[#D3E1FF]">
            {"products".toUpperCase()} <br />
            {"management".toUpperCase()}
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
      </motion.div>

      {/* Second Card */}
      <motion.div
        variants={sectionFadeUp}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="w-full h-full rounded-xl overflow-hidden"
      >
        <img
          src={BRAND}
          className="w-[600px] h-full object-contain rounded-t-xl"
          alt=""
        />
        <div className="w-full p-5 bg-[#0042E5] rounded-b-xl">
          <span className="lg:text-[80px] text-[55px] font-anton lg:leading-20 leading-[55px] text-[#D3E1FF]">
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
              <img src={POINTER_WHITE} className="w-[20px] h-[20px]" alt="" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GlobalUi;
