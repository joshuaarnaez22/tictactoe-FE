import Box from "./Box";

const Board = ({ board, onClick }: any) => {
  return (
    <>
      <div className="w-[300px] grid grid-cols-3 gap-2" data-testid="board">
        {board.map((value: string, index: number) => (
          <div key={index} onClick={() => value === null && onClick(index)}>
            <Box value={value} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
