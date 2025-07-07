import { ARROW_ICON, POINTER } from "../../assets";
import More from "../more";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};
function General() {
  return (
    // <div className=" flex flex-col gap-y-5 font-inter">
    //   <span className="text-custom font-semibold pl-10 -mb-12 text-lg">
    //     Two General Ways of Working:
    //   </span>
    //   <div className="flex p-10 items-center justify-between gap-x-5 w-full">
    //     <div className="bg-[#002FA3] rounded-xl p-5 w-full">
    //       <div className="max-h-[600px]">
    //         <span className="text-lg font-semibold text-custom">
    //           Unsure what fits you best now?
    //         </span>
    //         <div className="flex flex-col gap-y-3.5 mt-[23rem]">
    //           <span className="text-custom underline font-semibold text-[16px]">
    //             Book a 30-minute introduction call
    //           </span>
    //           <span className="text-custom text-[16px] font-semibold">
    //             Or chat directly with Alena, Managing Partner at genbrand.design{" "}
    //             <br />
    //             <span className="underline">alena@genbrand.design</span> <br />
    //             <span className="underline">LinkedIn</span>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bg-[#E2E2E5] rounded-xl w-full p-5">
    //       <div className="max-h-[600px]">
    //         <span className="text-2xl leading-1.5 font-semibold text-custom-black">
    //           1. Short-term or <br /> One-time Engagement
    //         </span>

    //         <div className="mt-14">
    //           <span className="text-custom-black text-[16px] font-normal">
    //             Best fit for visual language definition phase, turnarounds,
    //             pivots, and campaigns. While clients would normally expect only
    //             the exact deliverables, we always think a step ahead about how
    //             to scale the proposed design with cost-effective solutions.
    //           </span>
    //         </div>
    //         <div className="w-full mt-[14rem] flex items-center justify-between border border-[#11111129] rounded-xl p-3">
    //           <div className="flex items-start gap-x-2">
    //             <div className="flex flex-col">
    //               <span className="text-[13.13px] font-medium text-black font-inter">
    //                 Starting from $30,000
    //               </span>
    //               <span className="text-xs font-normal text-custom-black font-inter">
    //                 Book a call to get a quote
    //               </span>
    //             </div>
    //           </div>
    //           <button className="">
    //             <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bg-[#E2E2E5] rounded-xl w-full p-5">
    //       <div className="max-h-[600px]">
    //         <span className="text-2xl leading-1.5 font-semibold text-custom-black">
    //           2. Long-term / Service <br /> supply / Subscription
    //         </span>

    //         <div className="mt-14">
    //           <span className="text-custom-black text-[16px] font-normal">
    //             Enhanced extension of your internal team with procedural
    //             workflows, optimising your design, content production,
    //             operations, and growth spending.
    //           </span>
    //         </div>
    //         <div className="w-full mt-[16.5rem] flex items-center justify-between border border-[#11111129] rounded-xl p-3">
    //           <div className="flex items-start gap-x-2">
    //             <div className="flex flex-col">
    //               <span className="text-[13.13px] font-medium text-black font-inter">
    //                 Starting from $30,000
    //               </span>
    //               <span className="text-xs font-normal text-custom-black font-inter">
    //                 Book a call to get a quote
    //               </span>
    //             </div>
    //           </div>
    //           <button className="">
    //             <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex p-10 items-center justify-between gap-x-5 w-full">
    //     <div className="bg-[#262627] rounded-xl p-5 w-full">
    //       <div className="max-h-[650px]">
    //         <span className="text-sm font-medium text-custom">
    //           * Driven by the stage your business is going through and its
    //           immediate needs, rather than by your company size: for example, a
    //           3-person team may want to scale or semi- automate content
    //           production to reach more people via organic social media; at the
    //           same time, a multi-billion-dollar in evaluation company may be
    //           going through a pivot, launching a new product or brand, or
    //           finding a new product-market fit.
    //         </span>
    //         <div className="flex flex-col gap-y-3.5 mt-[15rem]">
    //           <span className="text-custom underline font-semibold text-[16px]">
    //             Unsure? <br />
    //             Book a 30-minute introduction call
    //           </span>
    //           <span className="text-custom text-[16px] font-semibold">
    //             Or chat directly with Alena, Managing Partner at genbrand.design{" "}
    //             <br />
    //             <span className="underline">alena@genbrand.design</span> <br />
    //             <span className="underline">LinkedIn</span>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bg-[#E2E2E5] rounded-xl w-full p-5">
    //       <div className="max-h-[650px]">
    //         <span className="text-2xl leading-1.5 font-semibold text-custom-black">
    //           Design Systems, Templates, Baseline self-serve tools
    //         </span>

    //         <div className="mt-5 flex flex-col gap-y-4">
    //           <div className="flex items-center">
    //             <img src={ARROW_ICON} className="w-[20px] h-[20px]" alt="" />
    //             <span className="text-xl opacity-80">
    //               {" "}
    //               Defining brand, product, campaign.
    //             </span>
    //           </div>
    //           <span className="text-custom-black text-sm font-normal">
    //             Crafted and refined visual languages for your brand, brand
    //             design system, product, digital experience, campaign, and
    //             content visual direction that delivers your product value.
    //           </span>
    //         </div>
    //         <div className="mt-5">
    //           <span className="text-custom-black text-sm font-normal">
    //             For brand identity work, we are ditching brand guidelines that
    //             nobody reads to focus on brand communication assets everyone
    //             will see. We deliver a coded brand identity system and your
    //             brand templates built into a self-serve web app you can create
    //             your assets without the support of the design team on the same
    //             day we publish your new brand system into a securely accessed
    //             web app.
    //           </span>
    //         </div>
    //         <div className="w-full flex flex-col gap-y-1 mt-4">
    //           <span className="text-sm font-semibold text-custom-black">
    //             Automation side:
    //           </span>
    //           <div className="border border-[#11111129] rounded-xl flex-col flex">
    //             <span className="text-sm font-semibold p-3">Client side</span>
    //             <span className="text-sm p-3 font-semibold border-t border-[#11111129]">
    //               Client side
    //             </span>
    //           </div>
    //         </div>
    //         <div className="w-full mt-[0.8rem] flex items-center justify-between border border-[#11111129] rounded-xl p-3">
    //           <div className="flex items-start gap-x-2">
    //             <div className="flex flex-col">
    //               <span className="text-[13.13px] font-medium text-black font-inter">
    //                 Starting from $30,000
    //               </span>
    //               <span className="text-xs font-normal text-custom-black font-inter">
    //                 Book a call to get a quote
    //               </span>
    //             </div>
    //           </div>
    //           <button className="">
    //             <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="bg-[#E2E2E5] rounded-xl w-full p-5">
    //       <div className="max-h-[650px]">
    //         <span className="text-2xl leading-1.5 font-semibold text-custom-black">
    //           Assets delivery / <br />
    //           Tools
    //         </span>

    //         <div className="mt-10 flex flex-col gap-y-4">
    //           <div className="flex items-start">
    //             <img src={ARROW_ICON} className="w-[20px] h-[20px]" alt="" />
    //             <span className="text-xl opacity-80 -mt-1">
    //               {" "}
    //               Removing intermediate software or hands-on work.
    //             </span>
    //           </div>
    //         </div>
    //         <div className="mt-16">
    //           <span className="text-custom-black text-sm font-normal">
    //             If your business already has an established visual language and
    //             an internal content production team, our focus is on simplifying
    //             the process of creating and delivering final assets at scale
    //             using our proprietary, tailored, or fully custom web app.
    //           </span>
    //         </div>
    //         <div className="w-full flex flex-col gap-y-1 mt-24">
    //           <span className="text-sm font-semibold text-custom-black">
    //             Automation side:
    //           </span>
    //           <div className="border border-[#11111129] rounded-xl flex-col flex">
    //             <span className="text-sm font-semibold p-3">Client side</span>
    //             <span className="text-sm p-3 font-semibold border-t border-[#11111129]">
    //               Client side
    //             </span>
    //           </div>
    //         </div>
    //         <div className="w-full mt-[0.8rem] flex items-center justify-between border border-[#11111129] rounded-xl p-3">
    //           <div className="flex items-start gap-x-2">
    //             <div className="flex flex-col">
    //               <span className="text-[13.13px] font-medium text-black font-inter">
    //                 Starting from $30,000
    //               </span>
    //               <span className="text-xs font-normal text-custom-black font-inter">
    //                 Book a call to get a quote
    //               </span>
    //             </div>
    //           </div>
    //           <button className="">
    //             <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="mt-20 ">
    //     <More />
    //   </div>
    // </div>

    <div className="flex flex-col gap-y-5 font-inter">
      <motion.span
        className="text-custom font-semibold pl-10 -mb-12 text-lg"
        initial={fadeUp.initial}
        animate={fadeUp.animate}
        transition={{ delay: 0.1, ...fadeUp.transition }}
      >
        Two General Ways of Working:
      </motion.span>

      <motion.div
        className="flex p-10 items-center justify-between gap-x-5 w-full"
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={{ delay: 0.2, ...fadeUp.transition }}
      >
        {/* Box 1 */}
        <motion.div className="bg-[#002FA3] rounded-xl p-5 w-full" {...fadeUp}>
          <div className="max-h-[600px]">
            <span className="text-lg font-semibold text-custom">
              Unsure what fits you best now?
            </span>
            <div className="flex flex-col gap-y-3.5 mt-[23rem]">
              <span className="text-custom underline font-semibold text-[16px]">
                Book a 30-minute introduction call
              </span>
              <span className="text-custom text-[16px] font-semibold">
                Or chat directly with Alena, Managing Partner at genbrand.design{" "}
                <br />
                <span className="underline">alena@genbrand.design</span> <br />
                <span className="underline">LinkedIn</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Box 2 */}
        <motion.div className="bg-[#E2E2E5] rounded-xl w-full p-5" {...fadeUp}>
          <div className="max-h-[600px]">
            <span className="text-2xl leading-1.5 font-semibold text-custom-black">
              1. Short-term or <br /> One-time Engagement
            </span>

            <div className="mt-14">
              <span className="text-custom-black text-[16px] font-normal">
                Best fit for visual language definition phase, turnarounds,
                pivots, and campaigns. While clients would normally expect only
                the exact deliverables, we always think a step ahead about how
                to scale the proposed design with cost-effective solutions.
              </span>
            </div>
            <div className="w-full mt-[14rem] flex items-center justify-between border border-[#11111129] rounded-xl p-3">
              <div className="flex items-start gap-x-2">
                <div className="flex flex-col">
                  <span className="text-[13.13px] font-medium text-black font-inter">
                    Starting from $30,000
                  </span>
                  <span className="text-xs font-normal text-custom-black font-inter">
                    Book a call to get a quote
                  </span>
                </div>
              </div>
              <button className="">
                <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Box 3 */}
        <motion.div className="bg-[#E2E2E5] rounded-xl w-full p-5" {...fadeUp}>
          <div className="max-h-[600px]">
            <span className="text-2xl leading-1.5 font-semibold text-custom-black">
              2. Long-term / Service <br /> supply / Subscription
            </span>

            <div className="mt-14">
              <span className="text-custom-black text-[16px] font-normal">
                Enhanced extension of your internal team with procedural
                workflows, optimising your design, content production,
                operations, and growth spending.
              </span>
            </div>
            <div className="w-full mt-[16.5rem] flex items-center justify-between border border-[#11111129] rounded-xl p-3">
              <div className="flex items-start gap-x-2">
                <div className="flex flex-col">
                  <span className="text-[13.13px] font-medium text-black font-inter">
                    Starting from $30,000
                  </span>
                  <span className="text-xs font-normal text-custom-black font-inter">
                    Book a call to get a quote
                  </span>
                </div>
              </div>
              <button className="">
                <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex p-10 items-center justify-between gap-x-5 w-full"
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={{ delay: 0.3, ...fadeUp.transition }}
      >
        {/* Box 4 */}
        <motion.div className="bg-[#262627] rounded-xl p-5 w-full" {...fadeUp}>
          <div className="max-h-[650px]">
            <span className="text-sm font-medium text-custom">
              * Driven by the stage your business is going through and its
              immediate needs, rather than by your company size: for example, a
              3-person team may want to scale or semi- automate content
              production to reach more people via organic social media; at the
              same time, a multi-billion-dollar in evaluation company may be
              going through a pivot, launching a new product or brand, or
              finding a new product-market fit.
            </span>
            <div className="flex flex-col gap-y-3.5 mt-[15rem]">
              <span className="text-custom underline font-semibold text-[16px]">
                Unsure? <br />
                Book a 30-minute introduction call
              </span>
              <span className="text-custom text-[16px] font-semibold">
                Or chat directly with Alena, Managing Partner at genbrand.design{" "}
                <br />
                <span className="underline">alena@genbrand.design</span> <br />
                <span className="underline">LinkedIn</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Box 5 */}
        <motion.div className="bg-[#E2E2E5] rounded-xl w-full p-5" {...fadeUp}>
          <div className="max-h-[650px]">
            <span className="text-2xl leading-1.5 font-semibold text-custom-black">
              Design Systems, Templates, Baseline self-serve tools
            </span>

            <div className="mt-5 flex flex-col gap-y-4">
              <div className="flex items-center">
                <img src={ARROW_ICON} className="w-[20px] h-[20px]" alt="" />
                <span className="text-xl opacity-80">
                  {" "}
                  Defining brand, product, campaign.
                </span>
              </div>
              <span className="text-custom-black text-sm font-normal">
                Crafted and refined visual languages for your brand, brand
                design system, product, digital experience, campaign, and
                content visual direction that delivers your product value.
              </span>
            </div>
            <div className="mt-5">
              <span className="text-custom-black text-sm font-normal">
                For brand identity work, we are ditching brand guidelines that
                nobody reads to focus on brand communication assets everyone
                will see. We deliver a coded brand identity system and your
                brand templates built into a self-serve web app you can create
                your assets without the support of the design team on the same
                day we publish your new brand system into a securely accessed
                web app.
              </span>
            </div>
            <div className="w-full flex flex-col gap-y-1 mt-4">
              <span className="text-sm font-semibold text-custom-black">
                Automation side:
              </span>
              <div className="border border-[#11111129] rounded-xl flex-col flex">
                <span className="text-sm font-semibold p-3">Client side</span>
                <span className="text-sm p-3 font-semibold border-t border-[#11111129]">
                  Client side
                </span>
              </div>
            </div>
            <div className="w-full mt-[0.8rem] flex items-center justify-between border border-[#11111129] rounded-xl p-3">
              <div className="flex items-start gap-x-2">
                <div className="flex flex-col">
                  <span className="text-[13.13px] font-medium text-black font-inter">
                    Starting from $30,000
                  </span>
                  <span className="text-xs font-normal text-custom-black font-inter">
                    Book a call to get a quote
                  </span>
                </div>
              </div>
              <button className="">
                <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Box 6 */}
        <motion.div className="bg-[#E2E2E5] rounded-xl w-full p-5" {...fadeUp}>
          <div className="max-h-[650px]">
            <span className="text-2xl leading-1.5 font-semibold text-custom-black">
              Assets delivery / <br />
              Tools
            </span>

            <div className="mt-10 flex flex-col gap-y-4">
              <div className="flex items-start">
                <img src={ARROW_ICON} className="w-[20px] h-[20px]" alt="" />
                <span className="text-xl opacity-80 -mt-1">
                  {" "}
                  Removing intermediate software or hands-on work.
                </span>
              </div>
            </div>
            <div className="mt-16">
              <span className="text-custom-black text-sm font-normal">
                If your business already has an established visual language and
                an internal content production team, our focus is on simplifying
                the process of creating and delivering final assets at scale
                using our proprietary, tailored, or fully custom web app.
              </span>
            </div>
            <div className="w-full flex flex-col gap-y-1 mt-24">
              <span className="text-sm font-semibold text-custom-black">
                Automation side:
              </span>
              <div className="border border-[#11111129] rounded-xl flex-col flex">
                <span className="text-sm font-semibold p-3">Client side</span>
                <span className="text-sm p-3 font-semibold border-t border-[#11111129]">
                  Client side
                </span>
              </div>
            </div>
            <div className="w-full mt-[0.8rem] flex items-center justify-between border border-[#11111129] rounded-xl p-3">
              <div className="flex items-start gap-x-2">
                <div className="flex flex-col">
                  <span className="text-[13.13px] font-medium text-black font-inter">
                    Starting from $30,000
                  </span>
                  <span className="text-xs font-normal text-custom-black font-inter">
                    Book a call to get a quote
                  </span>
                </div>
              </div>
              <button className="">
                <img src={POINTER} className="w-[20px] h-[20px]" alt="" />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-20"
        initial={fadeUp.initial}
        whileInView={fadeUp.animate}
        viewport={{ once: true }}
        transition={{ delay: 0.4, ...fadeUp.transition }}
      >
        <More />
      </motion.div>
    </div>
  );
}

export default General;
