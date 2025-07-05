function AboutWurlet() {
  return (
    <div className="px-10 py-20 flex items-start justify-between">
      <div className="flex flex-col text-[70px] w-full font-anton items-start gap-y-20">
        <span className="text-custom-black">{new Date().getFullYear()}</span>
      </div>
      <div className="w-full font-inter flex flex-col gap-y-10">
        <span className="text-sm font-normal text-[#4D4D4D] leading-[20px] font-inter">
          <span className="text-custom-black font-bold">
            {" "}
            Defining Identity in the Digital Age
          </span>{" "}
          <br />
          Wurlet is a platform that helps users build, manage, and share their
          digital footprint — on their own terms. Whether showcasing
          professional achievements or personal milestones, users have the power
          to decide what to reveal and what to keep private. Our role was to
          create a clear, cohesive visual system that matched this core idea of
          empowered identity sharing, beginning with a detailed brand style
          guide and extending to practical brand collaterals.
        </span>
      </div>
    </div>
  );
}

export default AboutWurlet;
