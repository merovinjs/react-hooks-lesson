import { useEffect, useRef, useState } from "react";

function UseRef() {
  const h3El = useRef<HTMLHeadingElement>(null);
  const [showH3, setShowH3] = useState(false);
  const consoleEL = useRef<HTMLButtonElement>(null);
  {
    /* useRef hook ile pure js deki gibi elemanlara ulaşılarak bunların contentleri değiştirilebilir mesela javascritte getelemetbyid ile bir elemana ulaşılldığı gibi useref hooku ile ulaşımak istenen elemana ref veriliyor.tüm DOM elemanlarına ve onların eventlerine ulaşılabilir */
  }

  const handleClick = () => {
    if (h3El.current) {
      if (h3El.current.textContent === "useRef ile güncellendi") {
        h3El.current.textContent = "";
      } else {
        h3El.current.textContent = "useRef ile güncellendi";
      }
    }
  };

  const handleCreate = () => {
    setShowH3(!showH3);
  };
  useEffect(() => {
    const handleConsole = () => {
      console.log("console");
    };

    if (consoleEL.current) {
      consoleEL.current.addEventListener("click", handleConsole);
    }
    return () => {
      if (consoleEL.current) {
        consoleEL.current.removeEventListener("click", handleConsole);
      }
    };
  }, []);

  return (
    <>
      <h3 ref={h3El}></h3>
      <button onClick={handleClick}>Güncelle</button>
      <div>
        {showH3 && <h3>Yenibaşlık</h3>}
        <button onClick={handleCreate}>Yenibaşlık</button>
      </div>
      <div>
        <button ref={consoleEL}>Console</button>
      </div>
    </>
  );
}
export default UseRef;
