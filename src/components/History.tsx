import { useEffect, useState } from "react";
import Modal from "./Modal";

const History = ({ historyModal, closeHistory }: any) => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    (async () => {
      const allhistory = await fetch(
        "https://tictactoe-be.vercel.app/api/get-history"
      );
      const parsedHistory = await allhistory.json();
      setHistories(parsedHistory);
    })();
  }, [historyModal]);

  return (
    <>
      <Modal
        {...{
          closeModal: closeHistory,
          isOpen: historyModal,
          title: "History",
        }}
      >
        <div className="my-12">
          {histories.map((history: any) => (
            <div
              className="flex flex-row justify-between items-center"
              key={history._id}
            >
              <div className="text-red-500 text-xl">
                {history.p1}: {history.score1}
              </div>
              <div className="text-blue-500 text-xl">
                {history.p2}: {history.score2}
              </div>
              <div className="text-yellow-500 text-xl">Draw {history.draw}</div>
            </div>
          ))}
        </div>
        <button
          onClick={closeHistory}
          className="bg-gray-400 p-4 rounded-md transition hover:scale-105"
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default History;
