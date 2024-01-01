import React from "react";

const History = ({ history, Onjump }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {history.map((step, index) => (
        <button
          onClick={() => Onjump(index)}
          className="bg-slate-600 p-2 m-1 rounded-md"
          key={index}
        >
          Go to {index ? "Move #" + index : "game start"}
        </button>
      ))}
    </div>
  );
};

export default History;
