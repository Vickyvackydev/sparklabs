import {
  FRAME_3,
  FRAME_4,
  FRAME_5,
  FRAME_6,
  FRAME_7,
  FRAME_8,
  FRAME_9,
  LAST_FRAME,
} from "../../assets";

function Designs() {
  return (
    <>
      <div className="flex items-center justify-center flex-col py-20 px-10">
        <div className="pb-10 flex flex-col gap-y-5 items-start w-[600px] justify-center">
          <span className="font-anton text-5xl text-[#262626]">
            Outdoor Banner Design
          </span>
          <span className="text-sm font-medium font-inter text-[#262626]">
            As Metta prepared for launch at key fintech and blockchain events,
            we designed outdoor and conference banners that made an instant
            impression. We kept the copy short and the visuals bold — focusing
            on Metta’s unique position as a user-friendly Web3 financial
            gateway. The outdoor system used layered gradients, modular layout
            grids, and crisp CTAs that mirrored the digital identity while
            standing out in physical space.
          </span>
          <ul className="list-disc list-inside font-inter text-sm">
            <li>Mockups of banners in urban environments or expo booths</li>
            <li>
              Rationale for layout hierarchy (logo, slogan, CTA placement)
            </li>
          </ul>
        </div>

        <div className="w-full">
          <img src={FRAME_3} className="w-full h-full object-contain" alt="" />
        </div>
        <div className="flex items-center justify-between gap-x-4 mt-14">
          <div className="bg-[#C8C8C875] p-10 rounded-xl">
            <img
              src={FRAME_4}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="bg-black-bgrd px-8 py-[6.75rem] rounded-xl flex w-[700px] flex-col gap-y-10 font-inter">
            <span className="text-[#8D8D8D] font-semibold text-xl">
              Laying the Emotional & Visual Groundwork
            </span>
            <p className="text-white font-normal text-sm">
              Beyond the app, we created supporting materials that kept the
              Metta brand strong and consistent. From investor pitch decks and
              whitepapers to social media templates and NFT drop invites, we
              ensured every element looked and felt like Metta — with clear
              brand guidelines, tone of voice, and visual continuity.
            </p>

            <ul className="list-disc text-white font-normal text-sm list-inside">
              <li>PDF or print materials</li>
              <li>Slide decks</li>
              <li>Event cards, wallet cards, onboarding email design</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-4 mt-14">
          <div className="bg-[#C8C8C875] p-10 rounded-xl flex flex-col gap-y-5">
            <span className="text-[16px] font-semibold text-[#8D8D8D]">
              X Design{" "}
            </span>
            <img
              src={FRAME_5}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="bg-[#C8C8C875] p-10 rounded-xl flex flex-col gap-y-5">
            <span className="text-[16px] font-semibold text-[#8D8D8D]">
              Asset Design{" "}
            </span>
            <img
              src={FRAME_6}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="py-16 flex flex-col gap-y-5 items-start w-[600px] justify-center">
          <span className="font-anton text-5xl text-[#262626]">
            Dashboard Design
          </span>
          <span className="text-sm font-medium font-inter text-[#262626]">
            The dashboard is where Metta truly comes to life. Designed with the
            high-frequency trader, casual investor, and Web3-native in mind, it
            supports wallet integration, token swap actions, portfolio insights,
            and transaction history — all in one fluid interface. Our challenge
            was balancing real-time data with cognitive ease. We used layered
            panes, semantic color-coding, and subtle motion to create a sense of
            flow while maintaining accuracy. space.
          </span>
          <ul className="list-disc list-inside font-inter text-sm">
            <li>Mockups of banners in urban environments or expo booths</li>
            <li>
              Rationale for layout hierarchy (logo, slogan, CTA placement)
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-x-4 mt-14">
          <div className="bg-[#C8C8C875] p-10 rounded-xl flex flex-col gap-y-5">
            <span className="text-[16px] font-semibold text-[#8D8D8D]">
              Option 1 Landing Page
            </span>
            <img
              src={FRAME_7}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="bg-[#C8C8C875] p-10 rounded-xl flex flex-col gap-y-5">
            <span className="text-[16px] font-semibold text-[#8D8D8D]">
              Option 2 Landing Page
            </span>
            <img
              src={FRAME_8}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-4 mt-14">
          <div className="bg-[#C8C8C875] p-10 rounded-xl flex flex-col gap-y-5">
            <img
              src={FRAME_9}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
          <div className="bg-[#C8C8C875] p-10 rounded-xl flex flex-col gap-y-5">
            <img
              src={LAST_FRAME}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="px-10">
        <span className="font-inter text-[#282828] text-[70px] ">
          Check out more projects
        </span>
      </div>
    </>
  );
}

export default Designs;
