import ComingSoon from "../ui/comingSoon";
import Hero from "../ui/hero";
import More from "../ui/more";
import Work from "../ui/work";

function Home() {
  // const darkmode = useSelector(selectDarkMode);

  return (
    <>
      <Hero />
      <Work />
      <ComingSoon />
      {/* <motion.div
        variants={animationVariants.container}
        className="flex font-inter p-10 gap-x-5 items-start justify-between"
      >
        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full h-full"
        >
          <img
            src={HOME_LAST_FRAME}
            className="w-full h-full object-contain"
            alt=""
          />
        </motion.div>
        <motion.div
          variants={animationVariants.fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="w-full h-full flex flex-col gap-y-8"
        >
          <div className="w-full flex flex-col items-start gap-y-3">
            <span
              className={clsx(
                "font-medium text-2xl ",
                darkmode ? "text-custom" : "text-[#303030]"
              )}
            >
              First:
            </span>

            <p
              className={clsx(
                "text-sm font-normal ",
                darkmode ? "text-custom" : "text-[#303030]"
              )}
            >
              We love design, code, and automation, and we are really good at
              it.
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-y-3">
            <span
              className={clsx(
                "font-medium text-2xl ",
                darkmode ? "text-custom" : "text-[#303030]"
              )}
            >
              Second:
            </span>
            <p
              className={clsx(
                "text-sm font-normal ",
                darkmode ? "text-custom" : "text-[#303030]"
              )}
            >
              Companies and founders are the best at building their core product
              and a culture around it. However, during the growth and scale
              phases, the marketing team in scale–ups and enterprises—including
              Growth, Brand, and Product Marketing—often becomes overly rigid,
              bureaucratic, and expensive. This shift in team dynamics
              frequently results in a structure that is slow, heavily reliant on
              manual labor, and hinders other teams from launching and iterating
              quickly.
            </p>
          </div>
          <div
            className={clsx(
              "p-3 rounded-xl bg-[#38383B] text-xs font-normal ",
              darkmode ? "text-custom" : "text-white"
            )}
          >
            <p className="border-l border-[#FFFFFF99] h-full pl-3">
              For example, recall the previous year and how many times you
              couldn't release an announcement (LP, Blog page, Post) because it
              was missing just a couple of product feature images or cover
              visuals, or you were battling a CMS that was okay in the late '90s
              but not in 2024.
            </p>
          </div>
          <p
            className={clsx(
              "text-sm font-normal ",
              darkmode ? "text-custom" : "text-[#303030]"
            )}
          >
            We see that in almost all companies, whether new or established,
            teams lack centralized, semi-automated governance of brand assets
            and procedural pipelines for video creation. Marketing assets are
            not seamlessly and programmatically connected to design system
            tokens and templates, leading to inconsistencies in branding and
            visuals. This becomes particularly challenging when the company
            needs to update touchpoints at scale, such as a set of key landing
            pages all at once.
          </p>
        </motion.div>
      </motion.div> */}
      <More />
    </>
  );
}

export default Home;
