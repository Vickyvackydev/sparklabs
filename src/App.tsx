import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";

import Home from "./pages/home";
import Metta from "./pages/metta";
import Unveil from "./pages/unveil";
import Community from "./pages/community";
import Wurlet from "./pages/wurlet";

import Contact from "./pages/contact";
import { useEffect } from "react";
import lenis from "./utils";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Imoh | Home";
    } else if (pathname === "/metta") {
      document.title = "Imoh | Metta";
    } else if (pathname === "/unveil") {
      document.title = "Imoh | Unveil";
    } else if (pathname === "/10x-community") {
      document.title = "Imoh | 10x Community";
    } else if (pathname === "/wurlet") {
      document.title = "Imoh | Wurlet";
    } else if (pathname === "/contact") {
      document.title = "Imoh | Contact";
    }
  }, [pathname]);
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [pathname]);
  useEffect(() => {
    // On route change, scroll to top smoothly
    lenis.scrollTo(0, {
      offset: 0,
      immediate: false,
    });
  }, [location.pathname]);
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/metta" element={<Metta />} />
          <Route path="/unveil" element={<Unveil />} />
          <Route path="/10x-community" element={<Community />} />
          <Route path="/wurlet" element={<Wurlet />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;
