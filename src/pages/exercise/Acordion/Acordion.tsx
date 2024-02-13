// import { useState } from "react";
// import { acordionData } from "./data";
// import { AcordionDataType } from "../../../types/exerciseType";
// import styles from "./styles.module.css";
// const Acordion = () => {
//   const [selected, setSelected] = useState<number | null>(null);

//   function handleClick(getCurrentId: number) {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   }

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.acordContainer}>
//         {acordionData.map((singleData: AcordionDataType) => (
//           <div key={singleData.id}>
//             <h2>
//               {singleData.title}
//               <button onClick={() => handleClick(singleData.id)}>
//                 <span>+-</span>
//               </button>
//             </h2>
//             {selected === singleData.id ? <p>{singleData.description}</p> : ""}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Acordion;

import { acordionData } from "./data";
import { AcordionDataType } from "../../../types/exerciseType";
import styles from "./styles.module.css";
import { useState } from "react";
const Acordion = () => {
  const data = acordionData;
  const [selected, setSelected] = useState<number | null>();
  const [multiselection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState<any[]>([]);

  const handleSingleSelect = (id: number) => {
    setSelected(id === selected ? null : id);
  };
  const handleMultiSelection = (id: number) => {
    let allseleceted: any = [...multiple];

    const findIndeofCurrentID = allseleceted.indexOf(id);

    if (findIndeofCurrentID === -1) {
      allseleceted.push(id);
    } else allseleceted.splice(findIndeofCurrentID, 1);
    setMultiple(allseleceted);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setMultiSelection(!multiselection)} className={styles.enableBtn}>
        Enable multi selector
      </button>
      <div className={styles.acordContainer}>
        {data && data.length > 0
          ? data.map((item: AcordionDataType) => (
              <div key={item.id}>
                <h4>
                  {item.title}
                  <span>
                    <button onClick={multiselection ? () => handleMultiSelection(item.id) : () => handleSingleSelect(item.id)}>+-</button>
                  </span>
                </h4>
                {multiselection ? multiple.indexOf(item.id) !== -1 && <p>{item.description}</p> : selected === item.id && <p>{item.description}</p>}
              </div>
            ))
          : "data yok"}
      </div>
    </div>
  );
};

export default Acordion;
