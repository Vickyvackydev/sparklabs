function AboutCommunity() {
  return (
    <div className="px-10 py-20 flex items-start justify-between">
      <div className="flex flex-col text-[70px] w-full font-anton items-start gap-y-20">
        <span className="text-custom-black">10X Community</span>
        <span className="text-[#949494]">{new Date().getFullYear()}</span>
      </div>
      <div className="w-full font-inter flex flex-col gap-y-24 mt-3.5">
        <div className="flex flex-col">
          <span> Expertise</span>
          <span>Design, Strategy & Web</span>
          <span>Credits</span>
          <span className="underline">IAS - Branding & Direction</span>
        </div>
        <span className="text-sm font-normal text-[#4D4D4D] leading-[20px] font-inter">
          <span className="text-[#424242] font-bold">
            {" "}
            A Brand for Collective Power:
          </span>{" "}
          <br /> 10X Community is more than a network — it’s a movement. Born
          from the need to empower grassroots thinkers, reformers, and young
          innovators, the community serves as a launchpad for collective action
          across Nigeria and the broader African continent. Our role was to
          translate that vision into a bold, unified brand identity and a
          digital landing page that reflects the spirit of change and
          connection.
        </span>
      </div>
    </div>
  );
}

export default AboutCommunity;
