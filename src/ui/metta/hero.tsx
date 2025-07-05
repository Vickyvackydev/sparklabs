import { METTA } from "../../assets";

function MettaHero() {
  return (
    <div className="p-10">
      <div className="flex items-center justify-between w-full">
        <span>Redefining Financial Access with Metta</span>
        <span>↓ (18)</span>
      </div>
      <div className="w-full mt-3.5">
        <img src={METTA} className="w-full h-full" alt="" />
      </div>
    </div>
  );
}

export default MettaHero;
