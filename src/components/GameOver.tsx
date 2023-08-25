import React from "react";
import Modal from "./Modal";

const GameOver = ({
  gameOverModal,
  closeModalGameOver,
  resetGame,
  stopGame,
}: any) => {
  return (
    <Modal
      {...{ closeModal: closeModalGameOver, isOpen: gameOverModal, title: "" }}
    >
      <div className="flex flex-row space-x-4 justify-center items-center">
        <button
          onClick={() => stopGame()}
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Stop
        </button>
        <button
          onClick={() => (resetGame(), closeModalGameOver())}
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          Continue
        </button>
      </div>
    </Modal>
  );
};

export default GameOver;
