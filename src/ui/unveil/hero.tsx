import { useSelector } from "react-redux";
import { UNVEIL } from "../../assets";
import { selectDarkMode } from "../../state/slices/globalReducer";
import clsx from "clsx";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
function UnveilHero() {
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
        <span>Redefining Financial Access with Metta</span>
        <span>↓ (18)</span>
      </div>
      <div className="w-full mt-3.5 overflow-hidden rounded-xl">
        <motion.img
          src={UNVEIL}
          className="w-full h-full"
          style={{ scale }}
          alt=""
        />
      </div>
    </div>
  );
}

export default UnveilHero;
