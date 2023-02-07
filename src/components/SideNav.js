import React from "react";
import { Routes, Route } from "react-router-dom";

import Puzzle from "./Puzzle";
function Sidebar() {
  return (
    <div>
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
