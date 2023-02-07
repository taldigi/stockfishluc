import React, { Component } from "react";
import Chessboard from "chessboardjsx";

import StockFish from "../integrations/Stockfish.js";
import Button from "@mui/material/Button/Button.js";
class Puzzle extends Component {
  render() {
    return (
      <div>
        <div style={boardsContainer}>
          <StockFish>
            {({ position, onDrop }) => (
              <Chessboard
                id="stockfish"
                // FEN IS ADDED BUT NOT WORKING
                //fen="rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBqKBNR w KQkq - 0 2"
                /*     position={
                position ==
                "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
                  ? "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBqKBNR w KQkq - 0 2"
                  : position
              }
              {...console.log(position)}*/
                position={position}
                width={700}
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
