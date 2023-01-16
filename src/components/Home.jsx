import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full h-screen">
      <h1 className="font-bold text-3xl">Kiril Quiz App</h1>
      <div>Rules and description of quiz</div>
      <input
        type="text"
        placeholder="Enter name here ..."
        className="border-b-2 focus:outline-none focus:border-b-2 focus:border-black px-0 py-2"
        id=""
      />
      <button className="bg-sky-500 px-10 py-3 rounded-full text-white font-semibold text-xl">
        <Link to={'quiz'}>Start Quiz</Link>
      </button>
    </div>
  );
};

export default Home;
