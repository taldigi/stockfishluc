import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Puzzle from "../pages/Puzzle";
import { IconButton } from "@mui/material";
let i = 0;
function Sidebar() {
  const [styleMenu, setStyleMenu] = useState("left-sidebar");
  const [burger, setBurger] = useState("burger-inactive");
  if (window.innerWidth < 600) {
    if (i === 0) {
      setStyleMenu("left-sidebar-inactive");
      setBurger("burger");
      i++;
    }
  }

  const menuHamburger = () => {
    //change the class of the left-sidebar

    //change the class of the burger

    if (styleMenu === "left-sidebar-inactive") {
      setStyleMenu("left-sidebar");
      setBurger("burger-active");
    } else {
      setStyleMenu("left-sidebar-inactive");
      setBurger("burger-inactive");
    }
  };

  return (
    <div>
      {" "}
      <i className={burger} onClick={menuHamburger}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-2"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ff4500"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </i>
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

export default Sidebar;
