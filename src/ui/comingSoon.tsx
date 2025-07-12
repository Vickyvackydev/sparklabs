import { useState } from "react";
import { comingSoon } from "../constant";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../state/slices/globalReducer";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

function ComingSoon() {
  const [selectedSection, setSelectedSection] = useState(0);
  const darkmode = useSelector(selectDarkMode);

  return (
    <div className="p-10 w-full flex flex-col gap-y-7">
      {comingSoon.map((item, index, arr) => (
        <motion.div
          key={item.label}
          onMouseEnter={() => setSelectedSection(index)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => window.open(item.link, "_blank")}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={clsx(
            "w-full grid grid-cols-2 cursor-pointer items-center border-b p-3 justify-between relative",
            darkmode ? "border-white" : "border-[#252525]"
          )}
        >
          <span
            className={clsx(
              "text-[#2B2B2B] font-normal text-[16px]",
              darkmode && "text-white"
            )}
          >
            {item.label}
          </span>
          <span
            className={clsx(
              "text-[#2B2B2B] font-normal text-[16px]",
              darkmode && "text-white"
            )}
          >
            {item.status}
          </span>

          <AnimatePresence>
            {selectedSection === index && (
              <motion.img
                key={item.img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={item.img}
                className="absolute w-[200px] h-[200px] object-contain lg:block hidden"
                style={{ right: `${index * arr.length}px` }}
                alt=""
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default ComingSoon;
