import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  // const [isXNext, setXnext] = useState(false);
  // console.log(board);
  console.log('history', history);
  const winner = calculateWinner(current.board);
  // console.log(winner)
  const message = winner
    ? `Winner is ${winner}`
    : ` Next player is ${current.isXNext ? 'X' : 'O'}`;
  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return Square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    // setXnext(prev => !prev);
    setCurrentMove(prev => prev + 1);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
