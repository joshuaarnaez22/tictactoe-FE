import Modal from "./Modal";

const NewGame = ({ closeModal, isOpen, setName, nextStep, name }: any) => {
  return (
    <Modal {...{ closeModal, isOpen, title: "Start New Game" }}>
      <div className="mt-2">
        <input
          className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500 border-gray-300"
          type="text"
          data-testid="player-1"
          placeholder="Enter Player 1 Name"
          onChange={(e) =>
            setName((name: any) => ({ ...name, p1: e.target.value }))
          }
        />
      </div>
      <div className="mt-2">
        <input
          className="w-full border rounded px-4 py-2 focus:outline-none focus:border-blue-500 border-gray-300"
          type="text"
          data-testid="player-2"
          placeholder="Enter Player 2 Name"
          onChange={(e) =>
            setName((name: any) => ({ ...name, p2: e.target.value }))
          }
        />
      </div>
      <div className="mt-4">
        <button
          data-testid="start-game"
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          onClick={nextStep}
          disabled={name.p1 === "" || name.p2 === ""}
        >
          Start Game
        </button>
      </div>
    </Modal>
  );
};

export default NewGame;
