import { useSelector } from "react-redux";
import { WURLET } from "../../assets";
import { selectDarkMode } from "../../state/slices/globalReducer";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import clsx from "clsx";
import { useRef } from "react";
function WurletHero() {
  const darkmode = useSelector(selectDarkMode);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"], // from when top hits bottom to when center hits top
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
    <div className="lg:p-10 p-5 w-full" ref={sectionRef}>
      <div
        className={clsx(
          "flex items-center justify-between w-full",
          darkmode
            ? "border-t border-custom text-custom"
            : "border-none text-custom-black"
        )}
      >
        <span>Project Case Study: Wurlet — Own Your Digital Footprint</span>
        <span>↓ (18)</span>
      </div>

      <div className="w-full mt-3.5 overflow-hidden rounded-xl">
        <motion.img
          src={WURLET}
          alt=""
          className="w-full h-full object-cover"
          style={{ scale, opacity }}
        />
      </div>
    </div>
  );
}

export default WurletHero;
