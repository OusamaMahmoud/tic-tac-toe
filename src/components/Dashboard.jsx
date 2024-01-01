import React, { useState } from "react";

const Dashboard = ({ board, onClick }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl my-5">Tic-Tac-Toe</h1>
      <div className=" grid grid-cols-3 gap-5 w-300 mx-auto">
        {board.map((value, index) => (
          <div
            key={index}
            className="min-h-11 min-w-14 w-100 h-100 bg-gray-300 flex items-center justify-center text-2xl cursor-pointer"
            onClick={() => onClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
