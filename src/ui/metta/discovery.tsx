import { FRAME_1, FRAME_2 } from "../../assets";

function Discovery() {
  return (
    <div className="p-10 flex items-center flex-col justify-center">
      <span className="font-anton text-5xl">
        Discovery & <span className="text-[#898989]">Moodboard</span>
      </span>

      <div className="flex items-center justify-between gap-x-4 mt-14">
        <div className="bg-[#C8C8C875] p-10 rounded-xl">
          <img src={FRAME_1} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="bg-black-bgrd p-8 rounded-xl flex w-[700px] flex-col gap-y-6 font-inter">
          <span className="text-[#8D8D8D] font-semibold text-xl">
            Laying the Emotional & Visual Groundwork
          </span>
          <p className="text-white font-normal text-sm">
            Every product begins with a feeling. For Metta, that feeling was
            confidence, clarity, and futuristic trust. We built moodboards
            inspired by a fusion of crypto-native visuals (blockchain graphics,
            token ecosystems) and clean fintech patterns (structured grids,
            muted palettes). The moodboard phase helped us align internally and
            with the client on how Metta should feel — both visually and
            emotionally.
          </p>

          <ul className="list-disc text-white font-normal text-sm list-inside">
            <li>
              Collages of inspiration (with short labels: “Trust”, “Innovation”,
              “Stability”)
            </li>
            <li>Color and texture explorations</li>
            <li>Motion or tone samples (if applicable)</li>
          </ul>
          <div className="flex flex-col gap-y-2.5">
            <span className="text-[#8D8D8D] font-semibold text-xl">
              Why it matters:
            </span>
            <ul className="text-white font-normal text-sm list-inside list-disc px-4">
              <li className="list-outside">
                It reveals your process and empathy — showing that design
                choices are rooted in intentional discovery, not guesswork.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-4 mt-14">
        <div className="bg-black-bgrd p-8 rounded-xl flex w-[700px] flex-col gap-y-6 font-inter">
          <span className="text-[#8D8D8D] font-semibold text-xl">
            Typography & Design System
          </span>
          <p className="text-white font-normal text-sm">
            Metta’s platform would scale — across devices, user types, and use
            cases. That required a typography and design system that could scale
            with it. We chose a modern sans-serif typeface to reflect digital
            clarity, paired with a bold display style for key headlines and
            figures. The design system included a UI kit with components for
            every interaction: buttons, data cards, alerts, tooltips, and states
            — all crafted for visual harmony and usability.
          </p>

          <ul className="list-disc text-[#BBBBBB] font-normal text-sm list-inside">
            <li>
              Fonts used + reasoning (e.g., readability, culture, technicality)
            </li>
            <li>Components (buttons, inputs, cards, etc.)</li>
            <li>Color tokens (primary, error, success, background)</li>
            <li>Responsive behavior (mobile adaptation, dark mode)</li>
          </ul>
          <div className="flex flex-col gap-y-2.5">
            <span className="text-[#8D8D8D] font-semibold text-xl">
              Why it matters:
            </span>
            <ul className="text-white font-normal text-sm list-inside list-disc px-4">
              <li className="list-outside">
                Design systems show you’re thinking about product maturity, not
                just aesthetics.
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#C8C8C875] p-10 rounded-xl">
          <img src={FRAME_2} className="w-full h-full object-contain" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Discovery;
