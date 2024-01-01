import React, { useState } from "react";
import Player from "./components/Player";
import Dashboard from "./components/Dashboard";
import History from "./components/History";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill("")]);
  const [currentStep, setcurrentStep] = useState(0);
  const [isXNext, setXNext] = useState(true);
  console.log(history)

  const handleBoxClick = (index) => {
    if (
      history[currentStep][index] === "" &&
      !calculateWinner(history[currentStep])
    ) {
      const newwHistory = history.slice(0, currentStep + 1);
      const currentBoard = newwHistory[newwHistory.length - 1];
      const newBoard = [...currentBoard];

      newBoard[index] = isXNext ? "X" : "O";
      setXNext(!isXNext);
      setHistory([...newwHistory, newBoard]);
      setcurrentStep(newwHistory.length);
    }
  };
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[b] === squares[a] &&
        squares[c] === squares[a]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const OnStepjump = (index) => {
    setcurrentStep(index);
  };
  const winner = calculateWinner(history[currentStep]);
  return (
    <main className="p-16 m-6 bg-orange-300 border rounded-lg border-slate-950 flex justify-center items-center">
      <h1 className="font-bold text-3xl mx-6">Tic-Tac-Toe</h1>

      <div className="flex flex-col justify-between items-center m-4">
        <Player winner={winner} next={isXNext} />
        <Dashboard
          board={history[currentStep]}
          onClick={(index) => handleBoxClick(index)}
        />
      </div>
      <div className="p-4 m-4">
        <History history={history} Onjump={(index) => OnStepjump(index)} />
      </div>
    </main>
  );
};

export default App;
