import { useSelector } from "react-redux";
import { HAND_TAB_FRAME } from "../../assets";
import { selectDarkMode } from "../../state/slices/globalReducer";
import clsx from "clsx";
import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
function CommunityHero() {
  const darkmode = useSelector(selectDarkMode);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // from when top of element hits bottom of viewport, to when bottom hits top
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]), {
    stiffness: 100,
    damping: 20,
  });
  return (
    <div className="p-10" ref={sectionRef}>
      <div
        className={clsx(
          "flex items-center justify-between w-full",
          darkmode
            ? "border-t border-white text-custom"
            : "border-none text-custom-black"
        )}
      >
        <span>10X Community — Connecting Change-Makers Across Africa</span>
        <span>↓ (18)</span>
      </div>
      <div className="w-full mt-3.5 overflow-hidden rounded-xl">
        <motion.img
          src={HAND_TAB_FRAME}
          style={{ scale }}
          className="w-full h-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default CommunityHero;
