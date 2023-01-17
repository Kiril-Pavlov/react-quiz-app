import React, { useEffect, useState } from "react";
import data from "../database/data";

const Questions = () => {
  const [selected, setSelected] = useState(undefined);

  const question = data[0];

  useEffect(() => {
    console.log(question);
  }, []);

  const handleRadioSelection = () => {
    setSelected(true);
    console.log("radio buton changed");
  };

  return (
    <div>
      <h2>{question.question}</h2>

      <ul key={question.id}>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              value={selected}
              name="options"
              id={`q${index}-option`}
              onChange={handleRadioSelection}
            />
            <label htmlFor={`q${index}-option`}>{option}</label>
          </li>
        ))}
        {/* <li>
          <input type="radio" value={selected} name="options" id="q1-option" onChange={handleRadioSelection} />
            <label htmlFor="q1-option">option</label>
        </li> */}
      </ul>
    </div>
  );
};

export default Questions;
