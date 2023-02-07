import React from "react";
import { Routes, Route } from "react-router-dom";

import Puzzle from "../pages/Puzzle";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Sidebar() {
  return (
    <div className="left-sidebar">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        // onClick={toggleDrawer(true)}
        sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
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
