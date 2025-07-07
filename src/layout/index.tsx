import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroller from "../components/smoothScroller";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../state/slices/globalReducer";
import clsx from "clsx";

function Layout({ children }: { children: React.ReactNode }) {
  const darkmode = useSelector(selectDarkMode);
  return (
    <SmoothScroller>
      <div
        className={clsx(
          "w-full bg-[#F2F5F3] transition-colors duration-500",
          darkmode ? "bg-custom-black" : "bg-[#F2F5F3]"
        )}
      >
        <Header />

        {children}
        <Footer />
      </div>
    </SmoothScroller>
  );
}

export default Layout;
