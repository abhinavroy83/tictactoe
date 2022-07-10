import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setXnext] = useState(false);
  // console.log(board);
  const winner = calculateWinner(board);
  // console.log(winner)
  const message = winner
    ? `Winner is ${winner}`
    : ` Next player is ${isXNext ? 'X' : 'O'}`;
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((Square, pos) => {
        if (pos == position) {
          return isXNext ? 'X' : 'O';
        }
        return Square;
      });
    });
    setXnext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
