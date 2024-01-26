import { useEffect, useState } from "react";
import style from "./styles.module.css";
interface Square {
  id: number;
  className?: string;
  value: string | null;
}
const CreateBoard = () => {
  const width = 10;
  const bombAmount = 20;
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

  console.log(shuffleArray);
  const handleClick = (square: Square) => {
    console.log(square);
  };
  return (
    <div className={style.grid}>
      {squares.map((square) => (
        <div onClick={() => handleClick(square)} className={square.className === "valid" ? style.valid : style.bomb} key={square.id}>
          {square?.value?.charAt(0)}
        </div>
      ))}
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
