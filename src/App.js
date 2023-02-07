import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Puzzle from "./pages/Puzzle";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
const App = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <SideNav />
    </div>
  );
};

export default App;
