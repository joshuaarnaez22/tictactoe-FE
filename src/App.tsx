import { useState } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import NewGame from "./components/NewGame";
import GameOver from "./components/GameOver";
import History from "./components/History";
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isOpen, setIsOpen] = useState(false);
  const [gameOverModal, setGameOverModal] = useState(false);
  const [historyModal, setHistoryModal] = useState(false);

  const [xPlaying, setXPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const [name, setName] = useState({
    p1: "",
    p2: "",
  });
  const [step, setStep] = useState(1);
  const [scores, setScores] = useState({
    player1: 0,
    player2: 0,
    draw: 0,
  });
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModalGameOver = () => {
    setGameOverModal(false);
  };

  const openHistory = () => {
    setHistoryModal(true);
  };
  const closeHistory = () => {
    setHistoryModal(false);
  };
  const nextStep = () => {
    setStep(2);
    setIsOpen(false);
  };

  const winningConditions = [
    // Rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];
  const clicked = (boxIdx: number) => {
    const updatedBoard = board.map((value, index) => {
      if (index === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner === "X") {
      setScores((prev) => ({ ...scores, player1: prev.player1 + 1 }));
      setGameOverModal(true);
    } else if (winner === "O") {
      setScores((prev) => ({ ...scores, player2: prev.player2 + 1 }));
      setGameOverModal(true);
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board: any) => {
    for (const condtion of winningConditions) {
      const [a, b, c] = condtion;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setGameOver(true);
        return board[a];
      }
    }
    if (board.every((position: any) => position !== null)) {
      setGameOver(true);
      setScores((prevScores) => ({
        ...prevScores,
        draw: prevScores.draw + 1,
      }));
      setBoard(Array(9).fill(null));
      setGameOverModal(true);

      return "draw";
    }
  };

  const resetGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const stopGame = async () => {
    const data = {
      ...name,
      ...scores,
    };

    closeModalGameOver();

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You might need to include additional headers here
        },
        body: JSON.stringify(data),
      };
      const saveData = await fetch(
        "https://tictactoe-be.vercel.app/api/add-history",
        requestOptions
      );
      console.log(saveData);
    } catch (error) {
      console.log(error);
    }

    setStep(1);
    resetGame();
    setScores({
      player1: 0,
      player2: 0,
      draw: 0,
    });
  };
  return (
    <>
      {step === 1 ? (
        <>
          <div className=" h-screen space-y-4 flex flex-col justify-center items-center">
            <button
              data-testid="history"
              onClick={openHistory}
              type="button"
              className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              History
            </button>

            <button
              data-testid="new-game"
              type="button"
              onClick={openModal}
              className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Start New Game
            </button>
          </div>
        </>
      ) : (
        <div className=" h-screen flex flex-col justify-center items-center overflow-y-hidden">
          <ScoreBoard {...{ xPlaying, scores, name }} />
          <Board onClick={gameOver ? resetGame : clicked} board={board} />
          <button
            data-testid="reset-game"
            onClick={resetGame}
            className="text-xl p-4 bg-blue-200 w-[200px] rounded-md mt-4 transition hover:bg-blue-400 hover:scale-105"
          >
            Reset
          </button>
        </div>
      )}
      <History {...{ historyModal, closeHistory }} />
      <NewGame {...{ closeModal, isOpen, setName, nextStep, name }} />
      <GameOver
        {...{ gameOverModal, closeModalGameOver, resetGame, stopGame }}
      />
    </>
  );
}

export default App;
