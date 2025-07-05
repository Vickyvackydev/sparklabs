import More from "../ui/more";

function Contact() {
  return (
    <>
      <div className="p-10 flex items-start justify-between">
        <span className="text-[80px] font-anton text-custom-black leading-20">
          Contact <br /> US
        </span>
        <div className="flex flex-col gap-y-10 w-[547px] font-inter font-medium text-2xl">
          <span>
            We started SparkLab.design to establish visual languages and build
            product and digital experiences, optimizing production with
            centralized design systems management, procedural workflows, and
            semi-automatic proprietary tools. Our methods promote a high-speed
            production environment and a steady decrease in costs per
            deliverable, while preserving exceptional content quality.
          </span>
          <span>
            Tell us about Challenge / Project / <br /> Company:
          </span>
          <span className="text-[#00ED56]">
            hello@sparklabs.design <br />
            Book a call
          </span>
          <span>
            Kleine-Gartmanplantsoen 21, 1017 RP, Amsterdam (Operating Worldwide)
          </span>
          <span>Alena, Managing Partner</span>
          <span>
            alena@Sparklabs.design <br />
            LinkedIn
          </span>
        </div>
      </div>
      <More />
    </>
  );
}

export default Contact;
