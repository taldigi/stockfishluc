import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Puzzle from "../pages/Puzzle";
import { IconButton } from "@mui/material";
function menuHamburger() {
  console.log("menuHamburger");
  //change the class of the left-sidebar

  //change the class of the burger

  console.log();
  let menuItems = "active";
  if (document.querySelector(".left-sidebar").classList.toggle("active")) {
    menuItems = "menu-active";
    console.log(document.querySelector(".burger").classList.toggle("active"));
    console.log(menuItems);
  } else {
    menuItems = "menu-inactive";
    console.log(document.querySelector(".burger").classList.toggle("active"));
    console.log(menuItems);
  }
}
function Sidebar() {
  let menuItems = "menu-inactive";
  return (
    <div className={"left-sidebar" + menuItems}>
      <i className="burger" onClick={menuHamburger}>
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
