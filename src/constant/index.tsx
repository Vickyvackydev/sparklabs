import { CHAINDUSTRY, CNDM, FRAME } from "../assets";

export const comingSoon = [
  {
    label: "Profitaitech",
    status: "Coming Soon",
    img: FRAME,
    link: "https://profitaitech.com/",
  },
  {
    label: "chaindustry",
    status: "Live Site",
    img: CHAINDUSTRY,
    link: "https://www.chaindustry.io/",
  },
  {
    label: "Made with Norm",
    status: "Live Site",
    img: FRAME,
    link: "https://www.madewithnorm.xyz/",
  },
  {
    label: "CNDM",
    status: "Project  Contribution",
    img: CNDM,
    link: "https://cnbm.io",
  },
  {
    label: "Lemon Agency",
    status: "Coming soon",
    img: FRAME,
    link: "",
  },
  {
    label: "Cheetahbots",
    status: "Live Site",
    img: FRAME,
    link: "https://cheetahbots.tech/",
  },
];

export const animationVariants = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },

  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  },
  leftSlideIn: {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  rightStaggerContainer: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  cardFadeSlide: {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  footerContainer: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};
