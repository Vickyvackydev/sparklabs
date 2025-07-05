import { useState } from "react";
import { comingSoon } from "../constant";

function ComingSoon() {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <div className="p-10 w-full flex flex-col gap-y-7">
      {comingSoon.map((item, index, arr) => (
        <div
          onMouseEnter={() => setSelectedSection(index)}
          className="w-full grid grid-cols-2 items-center border-b p-3 border-[#252525] justify-between relative"
        >
          <span className="text-[#2B2B2B]  font-normal text-[16px]">
            {item.label}
          </span>
          <span className="text-[#2B2B2B]  font-normal text-[16px]">
            {item.status}
          </span>
          {selectedSection === index && (
            <img
              src={item.img}
              className="absolute w-[200px] h-[200px]"
              style={{ right: `${index * arr.length}px` }}
              alt=""
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ComingSoon;
