import { useState } from "react";
import { acordionData } from "./data";
import { AcordionDataType } from "../../../types/exerciseType";

const Acordion = () => {
  const [selected, setSelected] = useState<number | null>(null);

  function handleClick(getCurrentId: number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div>
      {acordionData.map((singleData: AcordionDataType) => (
        <div key={singleData.id}>
          <h2>
            {singleData.title}
            <button onClick={() => handleClick(singleData.id)}>
              <span>+-</span>
            </button>
          </h2>
          {selected === singleData.id ? <p>{singleData.description}</p> : ""}
        </div>
      ))}
    </div>
  );
};

export default Acordion;
