import React from "react";

const Player = ({ winner, next }) => {
  return (
    <>
      {winner ? (
        <div>Winner is {winner}</div>
      ) : (
        <div className="bg-slate-800 text-lg font-serif text-white p-4  m-6">
          Next Player : {next ? "X" : "O"}
        </div>
      )}
    </>
  );
};

export default Player;
