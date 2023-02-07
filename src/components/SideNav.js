import React from "react";
import { Routes, Route } from "react-router-dom";

import Puzzle from "../pages/Puzzle";
function Sidebar() {
  return (
    <div className="left-sidebar">
      <i class="fas fa-bars hamburger"></i>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/puzzle">Puzzle</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
