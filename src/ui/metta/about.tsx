function MettaAbout() {
  return (
    <div className="px-10 py-20 flex items-start justify-between">
      <div className="flex flex-col text-[70px] w-full font-anton items-start gap-y-20">
        <span className="text-custom-black">IAMSTATIC</span>
        <span className="text-[#949494]">{new Date().getFullYear()}</span>
      </div>
      <div className="w-full font-inter flex flex-col gap-y-10">
        <div className="flex flex-col">
          <span> Expertise</span>
          <span>Design, Strategy & Web</span>
          <span>Credits</span>
          <span className="underline">IAS - Branding & Direction</span>
        </div>
        <span className="text-sm font-normal text-[#4D4D4D] leading-[20px] font-inter">
          Metta is a Web3-enabled financial exchange platform built to give
          users a seamless, secure, and intuitive experience in managing digital
          assets. Our partnership began with a clear goal: to create a platform
          that bridges the complexity of decentralized finance with the
          familiarity and trust of traditional banking. From branding to
          platform UI, we were responsible for shaping the entire visual and
          experiential identity of Metta.
        </span>
        <div className="w-full bg-black-bgrd rounded-xl px-4 pt-7 pb-10 text-sm font-normal text-white">
          This section positions your agency as a strategic partner, not just a
          design executor. You’re communicating the mission and impact of the
          project.
        </div>
      </div>
    </div>
  );
}

export default MettaAbout;
