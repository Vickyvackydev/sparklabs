import { useSelector } from "react-redux";
import { METTA } from "../../assets";
import { selectDarkMode } from "../../state/slices/globalReducer";
import clsx from "clsx";
import { useRef } from "react";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
function MettaHero() {
  const darkmode = useSelector(selectDarkMode);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // from when top of element hits bottom of viewport, to when bottom hits top
  });

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 1.3]), // zoom in more
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const opacity = useSpring(useTransform(scrollYProgress, [0, 1], [1, 0.5]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <div className={"lg:p-10 p-5 overflow-hidden w-full"} ref={sectionRef}>
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
          src={METTA}
          className="w-full h-full"
          style={{ scale, opacity }}
          alt=""
        />
      </div>
    </div>
  );
}

export default MettaHero;
