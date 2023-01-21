import React, { useEffect } from "react";

import Questions from "./Questions";

//import Redux Store
import { useSelector } from "react-redux";

const Quiz = () => {

  const { questions } = useSelector(state=>state)

  useEffect(()=>{
    console.log(questions.queue)
  },[])

  const handlePreviousQuestion = ()=>{
    console.log("previous button clicked")
  }

  const handleNextQuestion = ()=>{
    console.log("next button clicked")
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex w-11/12 sm:w-10/12 md:w-3/4 lg:w-1/2  flex-col gap-20">
        <h1 className="font-bold text-3xl text-center">Questions</h1>

        <Questions />

        <div className="flex flex-row items-center justify-between">
          <button 
            className="bg-sky-500 px-10 py-3 rounded-full text-white font-semibold text-xl"
            onClick={handlePreviousQuestion}
          >
            Previous
          </button>
          <button 
            className="bg-sky-500 px-10 py-3 rounded-full text-white font-semibold text-xl"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
