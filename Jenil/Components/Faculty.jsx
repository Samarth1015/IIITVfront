// Faculty.jsx
import React from "react";
import { useRouter } from "next/navigation";

const Faculty = ({ name, degree, li1, li2, li3, imgurl , jb }) => {
  const router = useRouter();

  const handleSeeMoreClick = () => {
    if (name) {
      const url = `/FacultyIIITV?data=${encodeURIComponent(jb)}`;
      window.open(url, '_blank'); // '_blank' opens the URL in a new tab
    } else {
      console.error("Name is not defined!");
    }
  };

  return (
    <div className="h-80 self-center">
      <div className="card">
        <div className="first-content">
          <div
            className="card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: `url(${imgurl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="h-16 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-[15px] text-yellow-300 self-center text-center">
                {name}
              </p>
            </div>
          </div>
        </div>
        <div className="second-content flex flex-col justify-center p-2">
          <p className="text-white mb-5 text-[10px] text-center font-normal">
            {degree}
          </p>
          <p className="text-[15px] self-center text-yellow-300 font-normal">
            Research Of Interest
          </p>
          <ul className="text-[12px] text-white font-light list-disc px-4 py-5">
            {li1 && <li>{li1}</li>}
            {li2 && <li>{li2}</li>}
            {li3 && <li>{li3}</li>}
          </ul>
          <button
            onClick={handleSeeMoreClick} // Trigger the router.push when the button is clicked
            className="px-4 rounded-lg text-sm bg-yellow-300 active:scale-95 hover:scale-105 transition-all duration-200 hover:bg-[#192537] hover:text-white font-medium py-2"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
