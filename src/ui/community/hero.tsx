import { HAND_TAB_FRAME } from "../../assets";

function CommunityHero() {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between w-full">
        <span>10X Community — Connecting Change-Makers Across Africa</span>
        <span>↓ (18)</span>
      </div>
      <div className="w-full mt-3.5">
        <img src={HAND_TAB_FRAME} className="w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default CommunityHero;
