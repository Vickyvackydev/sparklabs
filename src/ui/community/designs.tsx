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

function CommunityDesigns() {
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="pb-10 flex px-10 flex-col gap-y-5 items-start w-[700px] justify-center">
        <span className="font-anton text-3xl text-[#262626]">
          Brand Expression:{" "}
          <span className="text-[#5B5B5B]">From Identity to Influence</span>
        </span>
        <span className="text-sm font-medium font-inter text-[#262626]">
          A great identity isn’t just seen — it’s felt. We extended the 10X
          visual language into use cases that speak to its audience: social
          banners, event branding, flyers, and merchandise concepts. Every
          touchpoint was crafted to spark a sense of belonging and shared
          purpose — whether viewed on a poster in a local hub or online in a
          WhatsApp
        </span>
        <ul className="list-disc list-inside font-inter text-sm">
          <li>Community t-shirt mockups</li>
          <li>Posters, event stickers, or banners</li>
          <li>Social card templates</li>
        </ul>
      </div>

      <div className="flex items-center justify-between gap-x-4 mt-14">
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
      </div>

      <div className="flex items-center justify-between gap-x-4 mt-14">
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
      </div>
      <div className="pt-20 flex flex-col gap-y-5 items-start w-[700px] justify-center">
        <span className="font-anton text-3xl text-[#262626]">
          Brand Identity
        </span>
        <span className="text-sm font-medium font-inter text-[#262626]">
          <span className="text-[#2D2D2D] font-bold">
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
        <ul className="list-disc list-inside font-inter text-sm">
          <li>Logo mark and construction</li>
          <li>Brand color palette (earth tones + bold accent)</li>
          <li>Typography and usage</li>
          <li>Visual elements (e.g. icons, textures, symbols)</li>
        </ul>
      </div>

      <div className="w-full bg-[#ECECEC] p-10 mt-20 overflow-hidden">
        <div className="flex items-center justify-between gap-x-5 animate-scroll-left scroll-hover-pause">
          {[SCROLL_FRAME_1, SCROLL_FRAME_2, SCROLL_FRAME_3].map((frame) => (
            <div>
              <img
                src={frame}
                className="min-w-[500px] h-[300px] object-contain"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-x-5 mt-2 animate-scroll-right scroll-hover-pause">
          {[SCROLL_FRAME_4, SCROLL_FRAME_5, SCROLL_FRAME_6].map((frame) => (
            <div>
              <img
                src={frame}
                className="min-w-[500px] h-[300px] object-contain"
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between gap-x-5 mt-2 animate-scroll-left scroll-hover-pause">
          {[SCROLL_FRAME_7, SCROLL_FRAME_8, SCROLL_FRAME_9].map((frame) => (
            <div>
              <img
                src={frame}
                className="min-w-[500px] h-[300px] object-contain"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityDesigns;
