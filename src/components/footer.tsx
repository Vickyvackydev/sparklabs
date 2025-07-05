// const FooterLinks = ({
//   title,
//   links,
// }: {
//   title: string;
//   links: Array<{ title: string; link: string }>;
// }) => (
//   <div className="flex flex-col gap-y-3">
//     <span className="text-white font-medium text-[16px]">{title}</span>
//     <ul className="flex flex-col gap-y-3">
//       {links.map((item) => (
//         <Link to={item.link} className="text-sm font-normal text-[#9B9B9B]">
//           {item.title}
//         </Link>
//       ))}
//     </ul>
//   </div>

import { LOGO_NAME } from "../assets";

// );
function Footer() {
  return (
    <div className="w-full h-full p-10">
      <div className="p-10">
        <img src={LOGO_NAME} className="w-full object-contain h-full" alt="" />
      </div>
      <div className="w-full flex items-start justify-between">
        <span className="text-sm font-normal font-inter text-custom-black">
          ®Rights reserved, {new Date().getFullYear()} © hsparklabs.design
        </span>
        <div className="flex flex-col gap-y-2.5">
          <span className="text-sm font-inter text-custom-black">
            Models & Solutions, Pricing
          </span>
          <span className="text-sm font-inter text-custom-black">
            Contact us
          </span>
          <span className="text-sm font-inter text-custom-black">
            Book a call
          </span>
          <span className="text-sm font-inter text-custom-black">
            hello@sparklabs.design
          </span>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <span className="text-sm font-inter text-custom-black">
            Kleine-Gartmanplantsoen 21, <br /> 1017 RP, Amsterdam
          </span>
          <span className="text-sm font-inter text-custom-black">
            Privacy Policy
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
