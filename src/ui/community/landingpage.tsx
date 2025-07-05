import { BRAND, CARTOON, NEON, POINTER_WHITE } from "../../assets";
import Button from "../../components/button";

function LandingPage() {
  return (
    <div className="flex items-center justify-center flex-col px-10">
      <div className="pb-10 flex px-10 flex-col gap-y-5 items-center w-[800px] justify-center">
        <span className="font-anton text-3xl text-[#262626]">Landing Page</span>
        <span className="text-sm font-medium font-inter text-[#262626]">
          <span className="font-bold text-custom-black">
            {" "}
            Telling the Story in a Single Scroll
          </span>{" "}
          <br /> With the brand foundation set, we designed a one-page website
          that welcomes new members and communicates the mission with clarity.
          The landing page is focused, scrollable, and action-oriented —
          introducing the community's vision, highlighting member stories, and
          inviting others to join the movement. Although still in development,
          the image below captures the tone and hierarchy that guides users from
          curiosity to connection.
        </span>
      </div>
      {/* <div className="w-full bg-[#FAE355] h-full flex items-start justify-between">
        <div className="flex flex-col gap-y-5 font-inter">
          <span>Submit opportunities the would make a difference</span>
          <span>
            Get started quickly. Rebuild a brighter society. Change lives
            forever.
          </span>
          <Button
            title={"View website"}
            handleClick={() => {}}
            btnStyles={"bg-black w-fit rounded px-5 py-3"}
            textStyle={"text-white font-medium font-inter"}
          />
        </div>
        <img src={CARTOON} alt="" />
      </div> */}
      <div className="w-full h-full">
        <img src={CARTOON} className="w-full h-full object-contain" alt="" />
      </div>
      <div className="mt-20">
        <span className="font-inter text-[#282828] text-[70px]">
          Check out more projects
        </span>
        <div className="flex items-center justify-between gap-x-5">
          <div className="w-full h-full ">
            <img
              src={NEON}
              className="w-full h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#818CA3] rounded-b-xl">
              <span className="text-[80px] mt-3.5 leading-20 font-anton text-[#D3E1FF]">
                {"Marketing".toUpperCase()} <br />
                {"content".toUpperCase()}
              </span>
              <div className="w-full mt-4 flex items-center justify-between border border-[#11111129] rounded-xl p-3">
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-col">
                    <span className="text-[13.13px] font-medium text-black font-inter">
                      Book a call
                    </span>
                    <span className="text-xs font-normal text-custom-black font-inter">
                      Choose your time slot
                    </span>
                  </div>
                </div>
                <button className="">
                  <img
                    src={POINTER_WHITE}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full scale-[98%]">
            <img
              src={BRAND}
              className="w-[600px] h-full object-contain rounded-t-xl"
              alt=""
            />
            <div className="w-full p-5 bg-[#0042E5] rounded-b-xl">
              <span className="text-[80px]  font-anton leading-20 text-[#D3E1FF]">
                {"Brand".toUpperCase()} <br />
                {"systems".toUpperCase()}
              </span>
              <div className="w-full flex items-center mt-6 justify-between border border-[#C8D3CC29] rounded-xl p-3">
                <div className="flex items-start gap-x-2">
                  <div className="flex flex-col">
                    <span className="text-[13.13px] font-medium text-white font-inter">
                      Read Case Studies
                    </span>
                    <span className="text-xs font-normal text-[#C8D3CC] font-inter">
                      Choose your time slot
                    </span>
                  </div>
                </div>
                <button className="">
                  <img
                    src={POINTER_WHITE}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
