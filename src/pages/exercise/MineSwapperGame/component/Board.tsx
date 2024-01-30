import { Container } from "@mui/material";
import style from "../styles.module.css";
const Board = () => {
  const dimention = {
    width: 10,
    height: 10,
  };
  const array2D = Array(dimention.width)
    .fill(null)
    .map((_, indexH) =>
      Array(dimention.height)
        .fill(null)
        .map((_, indexW) => indexW)
    );
  console.log("array2D", array2D);
  return (
    <Container component="main" maxWidth="xs">
      <div className={style.center}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${dimention.width}, 30px)`,
            gridTemplateRows: `repeat(${dimention.height}, 30px)`,
          }}>
          {array2D.map((row, i) =>
            row.map((col, j) => (
              <div
                style={{
                  border: "1px solid red",
                  display: "flex",
                  placeContent: "center center",
                  alignItems: "center",
                }}
                data-dimention={`${i}-${j}`}
                key={`${i}-${j}`}>
                {col}
              </div>
            ))
          )}
        </div>
      </div>
    </Container>
  );
};

export default Board;
