const ScoreBoard = ({ scores, xPlaying, name }: any) => {
  const { player1, player2, draw } = scores;
  return (
    <div className="flex flex-row space-x-20 justify-center items-center p-4 shadow-md rounded-md bg-gray-200 mb-20">
      <p
        data-testid="score-p1"
        className={`${
          xPlaying ? "border-b-4 border-red-500" : ""
        } text-2xl text-red-500`}
      >
        {name.p1} - <span data-testid="span-score-p1">{player1}</span>
      </p>
      <p
        data-testid="score-p2"
        className={`${
          !xPlaying ? "border-b-4 border-blue-500" : ""
        } text-2xl text-blue-500`}
      >
        {name.p2} - <span data-testid="span-score-p2">{player2}</span>
      </p>

      <p className="text-2xl text-yellow-500" data-testid="score-draw">
        Draw - <span data-testid="span-score-draw">{draw}</span>
      </p>
    </div>
  );
};

export default ScoreBoard;
