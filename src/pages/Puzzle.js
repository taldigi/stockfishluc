import React, { Component } from "react";
import Chessboard from "chessboardjsx";

import StockFish from "../integrations/Stockfish.js";
import Button from "@mui/material/Button/Button.js";
class Puzzle extends Component {
  render() {
    let widthBoard = window.innerWidth < 600 ? 300 : 700;
    return (
      <div>
        <div style={boardsContainer}>
          <StockFish>
            {({ position, onDrop }) => (
              <Chessboard
                id="stockfish"
                position={position}
                width={widthBoard}
                onDrop={onDrop}
                boardStyle={boardStyle}
                orientation="white"
              />
            )}
          </StockFish>
        </div>
      </div>
    );
  }
}

export default Puzzle;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const boardStyle = {
  borderRadius: "5px",
  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
};
