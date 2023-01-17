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
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-xl">{question.question}</h2>

      <ul key={question.id} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {question.options.map((option, index) => (
          <li key={index} className="bg-sky-300 px-4 py-2 rounded-full flex gap-2">
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
