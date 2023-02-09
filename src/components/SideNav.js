import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Puzzle from "../pages/Puzzle";
import { IconButton } from "@mui/material";

let i = 0;
function SideNav() {
  let [styleMenu, setStyleMenu] = useState("left-sidebar");
  const [burger, setBurger] = useState("burger-inactive");
  console.log(i + "11. style menu: " + styleMenu);

  const menuHamburger = () => {
    //change the class of the left-sidebar
    //change the class of the burger
  };

  return (
    <div>
      {" "}
      {console.log("STYLEMENU" + styleMenu)}
      <div className={styleMenu}>
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
    </div>
  );
}

export default SideNav;
