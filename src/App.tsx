import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";

import Home from "./pages/home";
import Metta from "./pages/metta";
import Unveil from "./pages/unveil";
import Community from "./pages/community";
import Wurlet from "./pages/wurlet";
import Models from "./pages/models";
import Contact from "./pages/contact";
import { useEffect } from "react";
import lenis from "./utils";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Spark Labs | Home";
    } else if (pathname === "/metta") {
      document.title = "Spark Labs | Metta";
    } else if (pathname === "/unveil") {
      document.title = "Spark Labs | Unveil";
    } else if (pathname === "/10x-community") {
      document.title = "Spark Labs | 10x Community";
    } else if (pathname === "/wurlet") {
      document.title = "Spark Labs | Wurlet";
    } else if (pathname === "/models") {
      document.title = "Spark Labs | Models";
    } else if (pathname === "/contact") {
      document.title = "Spark Labs | Contact";
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
          <Route path="/models" element={<Models />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;
