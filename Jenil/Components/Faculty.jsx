import React from "react";

const Faculty = () => {
  return (
    <div className="h-80 self-center">
      {" "}
      <div className="card ">
        <div className="first-content">
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}>
            <div className="h-fit w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-[12px] text-yellow-300">
                Dr. Jignesh Bhatt
              </p>
              <p className="text-white text-[10px]">
                PhD Information and Communication Technology, DA-IICT,
                Gandhinagar
              </p>
            </div>
          </div>
        </div>
        <div className="second-content flex flex-col justify-center p-2 ">
          <p className="text-[15px] self-center text-yellow-300 font-normal">Research Of Interest</p>
          <ul className="text-[12px] text-white font-light list-disc px-4 py-5">
            <li>Deep learning for Medical imaging/ Remote sensing/ Defense</li>
            <li>Interpretability of deep neural networks</li>
            <li>Computer vision</li>
          </ul>
          <button className="px-4 rounded-lg text-sm bg-yellow-300 active:scale-95 hover:scale-105 transition-all duration-200 hover:bg-[#192537] hover:text-white font-medium py-2">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
