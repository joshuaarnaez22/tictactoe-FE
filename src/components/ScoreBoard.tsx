const ScoreBoard = ({ scores, xPlaying, name }: any) => {
  const { player1, player2, draw } = scores;
  return (
    <div className="flex flex-row space-x-20 justify-center items-center p-4 shadow-md rounded-md bg-gray-200 mb-20">
      <span
        className={`${
          xPlaying ? "border-b-4 border-red-500" : ""
        } text-2xl text-red-500`}
      >
        {name.p1} - {player1}
      </span>
      <span
        className={`${
          !xPlaying ? "border-b-4 border-blue-500" : ""
        } text-2xl text-blue-500`}
      >
        {name.p2} - {player2}
      </span>

      <span className=" text-2xl text-yellow-500">Draw - {draw}</span>
    </div>
  );
};

export default ScoreBoard;
