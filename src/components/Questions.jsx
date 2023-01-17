import React, { useState } from "react";

const Questions = () => {

    const [selected, setSelected] = useState(undefined)

    const handleRadioSelection = () =>{
        setSelected(true)
        console.log("radio buton changed")
    }

  return (
    <div>
      <h2>Question Placeholder 1</h2>

      <ul>
        <li>
          <input type="radio" value={selected} name="options" id="q1-option" onChange={handleRadioSelection} />
            <label htmlFor="q1-option">option</label>
        </li>
        
      </ul>
    </div>
  );
};

export default Questions;
