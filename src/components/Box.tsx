const Box = ({ value }: any) => {
  return (
    <button
      className={`${
        value === "X" ? "text-red-500" : "text-blue-500"
      } bg-white rounded-lg w-[100px] h-[100px] shadow-lg font-bold text-6xl transition hover:shadow-2xl hover:scale-105`}
    >
      {value}
    </button>
  );
};

export default Box;
