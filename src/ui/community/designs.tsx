import clsx from "clsx";
import {
  COMMUNITY_FRAME_1,
  COMMUNITY_FRAME_2,
  COMMUNITY_FRAME_3,
  COMMUNITY_FRAME_4,
  SCROLL_FRAME_1,
  SCROLL_FRAME_2,
  SCROLL_FRAME_3,
  SCROLL_FRAME_4,
  SCROLL_FRAME_5,
  SCROLL_FRAME_6,
  SCROLL_FRAME_7,
  SCROLL_FRAME_8,
  SCROLL_FRAME_9,
} from "../../assets";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../state/slices/globalReducer";
import { motion } from "framer-motion";
import { animationVariants } from "../../constant";
const scrollVariants = {
  left: {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  },
  right: {
    animate: {
      x: ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  },
};
function CommunityDesigns() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <motion.div
      variants={animationVariants.container}
      className="flex items-center justify-center flex-col py-20"
    >
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="pb-10 flex px-10 flex-col gap-y-5 items-start w-[700px] justify-center"
      >
        <span
          className={clsx(
            "font-anton text-3xl text-[#262626]",
            darkmode && "text-white"
          )}
        >
          Brand Expression:{" "}
          <span
            className={clsx("text-[#5B5B5B]", darkmode && "text-[#C3C3C3]")}
          >
            From Identity to Influence
          </span>
        </span>
        <span
          className={clsx(
            "text-sm font-medium font-inter text-[#262626]",
            darkmode && "text-white"
          )}
        >
          A great identity isn’t just seen — it’s felt. We extended the 10X
          visual language into use cases that speak to its audience: social
          banners, event branding, flyers, and merchandise concepts. Every
          touchpoint was crafted to spark a sense of belonging and shared
          purpose — whether viewed on a poster in a local hub or online in a
          WhatsApp
        </span>
        <ul
          className={clsx(
            "list-disc list-inside font-inter text-sm",
            darkmode && "text-[#BBBBBB]"
          )}
        >
          <li>Community t-shirt mockups</li>
          <li>Posters, event stickers, or banners</li>
          <li>Social card templates</li>
        </ul>
      </motion.div>

      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center px-10 justify-between gap-x-4 mt-14"
      >
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img
            src={COMMUNITY_FRAME_1}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img
            src={COMMUNITY_FRAME_2}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      </motion.div>

      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex items-center px-10 justify-between gap-x-4 mt-14"
      >
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img
            src={COMMUNITY_FRAME_3}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
        <div className="bg-[#C8C8C875] p-5 rounded-xl flex flex-col gap-y-5">
          <img
            src={COMMUNITY_FRAME_4}
            className="w-full h-full object-contain"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        variants={animationVariants.fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="pt-20 flex flex-col gap-y-5 items-start w-[700px] justify-center"
      >
        <span
          className={clsx(
            "font-anton text-3xl text-[#262626]",
            darkmode && "text-white"
          )}
        >
          Brand Identity
        </span>
        <span
          className={clsx(
            "text-sm font-medium font-inter text-[#262626]",
            darkmode && "text-white"
          )}
        >
          <span
            className={clsx(
              "text-[#2D2D2D] font-bold",
              darkmode && "text-white"
            )}
          >
            {" "}
            Designing for Unity, Purpose, and Progress
          </span>{" "}
          <br /> We approached the brand identity with three core principles in
          mind: unity, purpose, and momentum. The logomark is dynamic yet
          grounded — a visual metaphor for individuals coming together to create
          impact. The typography is bold, approachable, and confident,
          reinforcing the sense of movement without losing clarity. Our color
          palette draws from earthy and electric tones, merging the organic
          roots of community activism with the vibrance of African youth and
          energy.C
        </span>
        <ul
          className={clsx(
            "list-disc list-inside font-inter text-sm",
            darkmode && "text-[#BBBBBB]"
          )}
        >
          <li>Logo mark and construction</li>
          <li>Brand color palette (earth tones + bold accent)</li>
          <li>Typography and usage</li>
          <li>Visual elements (e.g. icons, textures, symbols)</li>
        </ul>
      </motion.div>

      <div className="w-full bg-[#ECECEC] p-10 mt-20 overflow-hidden space-y-2">
        {/* Row 1: scroll left */}
        <motion.div
          className="flex gap-x-5"
          variants={scrollVariants.left}
          animate="animate"
        >
          {[SCROLL_FRAME_1, SCROLL_FRAME_2, SCROLL_FRAME_3].map((frame, i) => (
            <img
              key={i}
              src={frame}
              className="min-w-[500px] h-[300px] object-contain"
              alt=""
            />
          ))}
        </motion.div>

        {/* Row 2: scroll right */}
        <motion.div
          className="flex gap-x-5"
          variants={scrollVariants.right}
          animate="animate"
        >
          {[SCROLL_FRAME_4, SCROLL_FRAME_5, SCROLL_FRAME_6].map((frame, i) => (
            <img
              key={i}
              src={frame}
              className="min-w-[500px] h-[300px] object-contain"
              alt=""
            />
          ))}
        </motion.div>

        {/* Row 3: scroll left */}
        <motion.div
          className="flex gap-x-5"
          variants={scrollVariants.left}
          animate="animate"
        >
          {[SCROLL_FRAME_7, SCROLL_FRAME_8, SCROLL_FRAME_9].map((frame, i) => (
            <img
              key={i}
              src={frame}
              className="min-w-[500px] h-[300px] object-contain"
              alt=""
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CommunityDesigns;
