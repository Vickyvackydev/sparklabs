import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroller from "../components/smoothScroller";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroller>
      <Header />

      {children}
      <Footer />
    </SmoothScroller>
  );
}

export default Layout;
