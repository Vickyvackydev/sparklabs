import { Link } from "react-router-dom";

import Button from "./button";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks";
import { FaBars, FaSun, FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { DARK_MODE_ICON, IMOH } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkMode, setDarkMode } from "../state/slices/globalReducer";
import clsx from "clsx";
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const darkmode = useSelector(selectDarkMode);
  const dispatch = useDispatch();
  const mobile = useMediaQuery("(max-width: 640px)");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.getElementById("hero-section")?.offsetHeight || 300;
      const scrollY = window.scrollY;
      setScrolled(scrollY > heroHeight - 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToElem = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {mobile ? (
        <div
          className={`w-full top-0 z-50 flex items-center justify-between p-5 fixed ${
            scrolled
              ? "bg-white shadow-md "
              : open
              ? "bg-black/80"
              : "bg-transparent"
          } transition-colors duration-300 `}
        >
          <Link to={"/"}>
            <img src={""} className="w-[113.62px] h-[42px]" alt="" />
          </Link>
          <div onClick={() => setOpen((prev) => !prev)}>
            {open ? (
              <FaTimes color={scrolled ? "black" : "white"} />
            ) : (
              <FaBars color={scrolled ? "black" : "white"} />
            )}
          </div>
          <Transition
            show={open}
            enter="transform transition-transform ease-out duration-300"
            enterFrom="-translate-y-full"
            enterTo="-translate-y-0"
            leave="transform transition-transform ease-in duration-200"
            leaveFrom="-translate-y-0"
            leaveTo="-translate-y-full"
          >
            <div
              className={`absolute ${
                scrolled ? "bg-white" : "bg-black/80"
              } w-full h-[250px] flex items-start flex-col top-20 z-50 shadow-2xl left-0 p-5 gap-y-3`}
            >
              <div
                className={`flex items-start flex-col space-y-5 ${
                  scrolled ? "text-black " : "text-white"
                } transition-colors duration-300 font-normal text-[16px]`}
              >
                <span
                  onClick={() => handleScrollToElem("hero-section")}
                  className="cursor-pointer"
                >
                  Home
                </span>
                <span
                  onClick={() => handleScrollToElem("about")}
                  className="cursor-pointer"
                >
                  About Us
                </span>
                <span
                  onClick={() => handleScrollToElem("why-fend")}
                  className="cursor-pointer"
                >
                  Why Fend
                </span>
                <span
                  onClick={() => handleScrollToElem("contact")}
                  className="cursor-pointer"
                >
                  Contact
                </span>
              </div>
              <Button
                title={"Get a Quote"}
                handleClick={() => {}}
                btnStyles={"px-4 py-2"}
                textStyle={""}
              />
            </div>
          </Transition>
        </div>
      ) : (
        <div
          className={clsx(
            "w-full px-10 py-5 font-inter  flex items-center justify-between border-b border-[#D0D0D0]",
            darkmode && "border-none"
          )}
        >
          <Link to={"/"}>
            {/* {darkmode ? (
              <img src={IMOH} className="w-[170px] h-[39px]" alt="" />
              ) : (
                <img src={SPARK_LABS} className="w-[170px] h-[39px]" alt="" />
                )} */}
            <img src={IMOH} className="w-[170px] h-[39px]" alt="" />
          </Link>
          <div className="w-fit text-xs  px-2 py-1 rounded-lg text-[#D7D7D7] font-normal flex items-center gap-x-3.5 bg-[#38383B]">
            <Link onClick={() => handleScrollToElem("projects")} to={""}>
              Projects
            </Link>
            <Link to={"/models"}>Models, Pricing & Solutions</Link>
            <Link to={"/contact"}>Contact us</Link>
            <Link
              to={""}
              className={clsx(
                "border  p-2 rounded-lg",
                darkmode ? "border-gray-600" : "border-white"
              )}
            >
              Book a call
            </Link>
          </div>
          <div className="flex  items-center gap-x-4">
            {darkmode ? (
              <FaSun
                className="text-white cursor-pointer"
                size={20}
                onClick={() => dispatch(setDarkMode(false))}
              />
            ) : (
              <img
                src={DARK_MODE_ICON}
                onClick={() => dispatch(setDarkMode(true))}
                className="w-[20px] cursor-pointer h-[20px]"
                alt=""
              />
            )}

            <span
              className={clsx(
                "text-sm font-normal   underline",
                darkmode ? "text-custom" : "text-[#0E0E0E]"
              )}
            >
              hello@sparklabs.design
            </span>
            <span
              className={clsx(
                "text-sm font-normal   underline",
                darkmode ? "text-custom" : "text-[#0E0E0E]"
              )}
            >
              Contact us
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
