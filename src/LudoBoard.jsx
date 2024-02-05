import { useState } from "react";
import './LudoBoard.css';


export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  const generateRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  let updateBlue = () => {
    setMoves((prevMoves) => {
      const randomValue = generateRandomValue();
      return { ...prevMoves, blue: randomValue, red: 0, yellow: 0, green: 0 };
    });
  };
  let updateRed = () => {
    setMoves((prevMoves) => {
      const randomValue = generateRandomValue();
      return { ...prevMoves, red: randomValue,blue:0, yellow: 0, green: 0 };
    });
  };

  let updateYellow = () => {
    setMoves((prevMoves) => {
      const randomValue = generateRandomValue();
      return { ...prevMoves, yellow: randomValue, red: 0, blue: 0, green: 0 };
    });
  };

  let updateGreen = () => {
    setMoves((prevMoves) => {
      const randomValue = generateRandomValue();
      return { ...prevMoves, green: randomValue, red: 0, yellow: 0, blue: 0 };
    });
  };

  return (
   <div>
      <h1>Game Begins!</h1>
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
