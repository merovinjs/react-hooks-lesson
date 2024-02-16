import { useState } from "react";
import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
const FormStapper = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const navigate = useNavigate();
  function nextPage() {
    setpage(page + 1);
    if (page === 3) {
      setpage(0);
    }
  }
  function prevPage() {
    setpage(page - 1);
    if (page === 0) {
      setpage(3);
    }
  }

  const [page, setpage] = useState(1);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(input1, input2, input3, input4);
    navigate("/");
  };

  return (
    <form className={style.formContainer}>
      {count}
      <div className={style.formElementWrapper}>
        <div className={style.pageNumber}>{"page" + page}</div>
        {page === 1 && (
          <div className={style.inputWrapper}>
            <input value={input1} onChange={(e) => setInput1(e.target.value)} type="text" />
            <input value={input2} onChange={(e) => setInput2(e.target.value)} type="text" />
          </div>
        )}
        {page === 2 && (
          <div className={style.inputWrapper}>
            <input value={input3} onChange={(e) => setInput3(e.target.value)} type="text" />
            <input value={input4} onChange={(e) => setInput4(e.target.value)} className={style.input} type="text" />
          </div>
        )}
        {page === 3 && <div>zsd</div>}

        <div className={style.btnContainer}>
          {page !== 1 && (
            <button type="button" onClick={() => prevPage()}>
              prev
            </button>
          )}
          <div></div>
          {page !== 3 && (
            <button type="button" onClick={() => nextPage()}>
              next
            </button>
          )}
        </div>
        {page == 3 && <button onClick={(e) => handleSubmit(e)}>Submit</button>}
      </div>
      <Link style={{ marginBottom: "15px", fontSize: "20px" }} to="/exercise/reduxtoolkit">
        FormStapper
      </Link>
    </form>
  );
};

export default FormStapper;
