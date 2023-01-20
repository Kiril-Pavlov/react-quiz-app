import React from "react";

const ResultTable = () => {
  return (
    <table className="table-auto rounded-xl overflow-hidden">
      <thead className="bg-sky-500 border-b-2 border-sky-900">
        <tr className="font-bold">
          <td className="px-5 py-2">Username</td>
          <td className="px-5 py-2">Questions</td>
          <td className="px-5 py-2">Points</td>
          <td className="px-5 py-2">Result</td>
        </tr>
      </thead>
      <tbody>
        <tr className="">
          <td className="px-5 py-2">Kiril</td>
          <td className="px-5 py-2">5</td>
          <td className="px-5 py-2">30</td>
          <td className="px-5 py-2">Passed</td>
        </tr>
        <tr className="bg-sky-300">
          <td className="px-5 py-2">Kiril</td>
          <td className="px-5 py-2">5</td>
          <td className="px-5 py-2">30</td>
          <td className="px-5 py-2">Passed</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultTable;
