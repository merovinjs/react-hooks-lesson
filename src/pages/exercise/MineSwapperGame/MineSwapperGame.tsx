import { useEffect, useState, useRef } from "react";
import style from "./styles.module.css";
interface Square {
  id: number;
  className?: string;
  value: string | null;
  data?: string | number;
  isClick?: boolean;
}
const CreateBoard = () => {
  const width = 10;
  const bombAmount = 20;
  const [isGameOver, setIsgameOver] = useState(false);
  const [isclick, setIsClick] = useState(false);
  const [squares, setSquares] = useState<Square[]>([]);
  const [bombArray, setBombArray] = useState<Square[]>([]);
  const [emptyArray, setEmtyArray] = useState<Square[]>([]);
  const [gameArray, setGameArray] = useState<Square[]>([]);
  const [shuffleArray, setShuffleArray] = useState<Square[]>([]);
  useEffect(() => {
    const bombArray: Square[] = Array(bombAmount).fill("bomb");
    const emptyArray: Square[] = Array(width * width - bombAmount).fill("valid");
    const gameArray: Square[] = emptyArray.concat(bombArray);
    const shuffleArray: Square[] = gameArray.sort(() => Math.random() - 0.5);
    const squares: Square[] = Array(width * width)
      .fill(null)
      .map((_, i) => ({
        id: i,
        value: `${shuffleArray[i]}`,
        className: `${shuffleArray[i]}`,
      }));

    setEmtyArray(emptyArray);
    setBombArray(bombArray);
    setShuffleArray(shuffleArray);
    setSquares(squares);
    setGameArray(gameArray);
  }, [width]);
  for (let i = 0; i < squares.length; i++) {
    let total: number = 0;
    const isLeftEdge = i % width === 0;
    const isRightEdge = i % width === width - 1;
    if (squares[i].value == "valid") {
      if (i > 0 && !isLeftEdge && squares[i - 1].value == "bomb") total++;
      if (i > 9 && !isRightEdge && squares[i + 1 - width].value == "bomb") total++;
      if (i > 10 && squares[i - width].value == "bomb") total++;
      if (i > 11 && !isLeftEdge && squares[i - width - 1].value == "bomb") total++;
      if (i < 99 && !isRightEdge && squares[i + 1].value == "bomb") total++;
      if (i < 90 && isLeftEdge && squares[i - 1 + width].value == "bomb") total++;
      if (i < 88 && !isRightEdge && squares[i + 1 + width].value == "bomb") total++;
      if (i < 89 && squares[i + width].value == "bomb") total++;
      squares[i].data = total;
    }
  }

  const handleNormalClick = (square: Square) => {
    if (isGameOver) return;
    if (square.value == "bomb") {
      gameOver();
    } else {
      let total = square.data;
      if (total != 0) {
        square.className = "checked";
        square.isClick = true;
        if (total === 1) square.className = "one";
        if (total === 2) square.className = "two";
        if (total === 3) square.className = "three";
        if (total === 4) square.className = "four";
        if (total === 5) square.className = "five";
        if (total === 6) square.className = "six";
      }
      setIsClick(true);
    }
    console.log(square);
  };
  const result = useRef<HTMLDivElement>(null);
  function gameOver() {
    squares.forEach(function (square) {
      if (square.value == "bomb") {
        square.className = "checked";
      }
    });
    setIsgameOver(true);
    if (result.current) {
      result.current.innerHTML = "game Over";
    }
  }
  const Square = ({ square }: { square: Square }) => {
    return (
      <div
        onClick={() => handleNormalClick(square)}
        className={square.className === "valid" ? style.valid : square.className === "one" ? style.one : square.className === "two" ? style.two : square.className === "three" ? style.three : square.className === "four" ? style.four : square.className === "five" ? style.five : square.className === "six" ? style.six : square.className === "checked" ? style.checked : style.bomb}
        key={square.id}>
        {isGameOver ? square.value == "bomb" && square.value?.charAt(0) : ""}
      </div>
    );
  };
  return (
    <div>
      <div className={style.grid}>
        {squares.map((square) => (
          <Square key={square.id} square={square} />
        ))}
      </div>
      <div>
        Flag left:<span></span>
      </div>
      <div ref={result}></div>
    </div>
  );
};

const MineSwapperGame = () => {
  return (
    <div>
      <CreateBoard />
    </div>
  );
};

export default MineSwapperGame;
