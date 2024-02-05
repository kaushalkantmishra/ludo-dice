import { useState } from "react";
import './LudoBoard.css';


export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  const generateRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  let updateBlue = () => {
    const randomValue = generateRandomValue();

    setMoves((preMoves) => {
      return { ...preMoves, blue: preMoves.blue = randomValue };
    });
  };

  let updateRed = () => {
    const randomValue = generateRandomValue();

    setMoves((preMoves) => {
      return { ...preMoves, red: preMoves.red = randomValue };
    });
  };

  let updateYellow = () => {
    const randomValue = generateRandomValue();

    setMoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow = randomValue };
    });
  };

  let updateGreen = () => {
    const randomValue = generateRandomValue();

    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green = randomValue };
    });
  };

  return (
   <div>
      <p>Game Begins!</p>
      <div className="board">
        <div className="corner">
          <p>Blue Moves ={moves.blue} </p>
          <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
              A
          </button>
        </div>
        
        <div className="corner">
          <p>Red Moves ={moves.red} </p>
          <button style={{ backgroundColor: "red" }} onClick={updateRed}>
              B
          </button>
        </div>

        <div className="corner">
          <p>Yellow Moves ={moves.yellow} </p>
          <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
              C
          </button>
        </div>

        <div className="corner">
          <p>Green Moves = {moves.green}</p>
          <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
              D
          </button>
        </div>
      </div>
    </div>
  );
}
