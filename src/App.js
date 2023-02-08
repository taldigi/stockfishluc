import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Puzzle from "./pages/Puzzle";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Sidebarmovile from "./components/SideNavMovile";

const App = () => {
  const [container, setContainer] = useState("container");
  useEffect(() => {
    if (window.innerWidth < 600) {
      setContainer("container-inactive");
    } else {
      setContainer("container");
    }
  }, []);
  return (
    <div className="bodyClass">
      {/*<SideNav />*/}
      <Sidebarmovile />
      <div className={container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/puzzle" element={<Puzzle />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
