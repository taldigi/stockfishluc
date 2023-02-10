import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Puzzle from "../pages/Puzzle";
import { IconButton } from "@mui/material";
import useGetUsers from "./data/useUserData";
import { render } from "react-dom";

let i = 0;
function SideNav() {
  let [styleMenu, setStyleMenu] = useState("left-sidebar");
  const [burger, setBurger] = useState("burger-inactive");

  const menuHamburger = () => {
    //change the class of the left-sidebar
    //change the class of the burger
  };

  const allUsers = useGetUsers();
  return (
    <div>
      <div className={styleMenu}>
        <ul>
          <li> </li>
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
        <ul>
          {allUsers.map((user) => (
            <li key={user.id}>
              {user.name} {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
