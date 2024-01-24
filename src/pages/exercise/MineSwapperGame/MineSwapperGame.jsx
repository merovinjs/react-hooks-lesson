import React from "react";
import { useEffect } from "react";
import "./MineSwapperstyle.css";
import { useRef } from "react";
const MineSwapperGame = () => {
  const gridRef = useRef(null);
  useEffect(() => {
    createBoard();
  }, []);
  const createBoard = () => {
    const grid = gridRef.current;
    console.log(grid);
  };
  return (
    <div className="container">
      <div ref={gridRef} className="grid"></div>
      <div>
        Flag left: <span id="flags-left"></span>
      </div>
      <div id="result"></div>
    </div>
  );
};

export default MineSwapperGame;
