import { WURLET } from "../../assets";

function WurletHero() {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between w-full">
        <span>Project Case Study: Wurlet — Own Your Digital Footprint</span>
        <span>↓ (18)</span>
      </div>
      <div className="w-full mt-3.5">
        <img src={WURLET} className="w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default WurletHero;
