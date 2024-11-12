import React from "react";

const Box = ({ items }) => {
  return (
    <div className="flex flex-col hover:scale-105 justify-center border-2 border-[#2d4b76] p-2 hover:bg-[#2d4b76] hover:text-white transition-all duration-200 hover:rounded-lg w-48 h-48">
      <p className="self-center text-center text-wrap">{items}</p>{" "}
    </div>
  );
};

export default Box;
