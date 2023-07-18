import { useEffect, useLayoutEffect, useState, useReducer } from "react";
import { colorReducer } from "./reducers/colorReducer";
const UseEffect = () => {
  const [input, setInput] = useState("input");
  const [timeCounter, setTimeCounter] = useState(0);
  const [counter, setCounter] = useState(0);
  const [random, setRandom] = useState(0);
  const [state, dispatch] = useReducer(colorReducer, "");
  {
    /*react component içinde yazılan ve bir olaya ile
  ilişkilendirilmeyen her fonksiyon tekrar render edilir
  buda performans kaybına yol açar
  örneğin counter tıklandığında input değişkeni render edilmez ancak
  bir olaya (event handler) bağlanmayan bir fonksiyon tekrar render edilir
  bu componentte console.log("re-render"); ifadesi her input veya counter değiştiğinde her zaman render edilecektir
  */
  }
  console.log("re-render");
  useEffect(() => {
    console.log("counter render");
  }, [counter]);
  useEffect(() => {
    console.log("input render");
  }, [input]);
  useEffect(() => {
    console.log("time counter");
    const incrementer = setInterval(() => {
      setTimeCounter((prevCnt) => prevCnt + 1);
    }, 1000);
    return () => clearInterval(incrementer);
  }, [timeCounter]);
  useLayoutEffect(() => {
    function getRandom() {
      if (random === 0) {
        setRandom(Math.random() * 200);
      }
    }
    getRandom();
  }, [random]);
  {
    /* useLayoutEffect ile useEffect farkı 
  useEffect fonksiyonu component render edildiğinde çalışır useLayoutEffect ise DOM elemanı render edilmeden hemen önce çalışarak ekrandakki geçişleri hızlı gösteriri ancak çok tercih edilmez
*/
  }

  return (
    <div>
      <h1 style={{ backgroundColor: state.backGroundColor }}>UseEffect</h1>
      <button onClick={() => dispatch({ type: "turner" })}>
        ChangeReducer
      </button>
      <div>{input}</div>
      <div>{timeCounter}</div>
      <br />
      <div>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>rerender?</button>
      </div>
      <br />
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button onClick={() => setRandom(0)}>random</button>
        <div>{random}</div>
      </div>
    </div>
  );
};

export default UseEffect;
