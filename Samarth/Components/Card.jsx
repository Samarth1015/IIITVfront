import Link from "next/link";
import { MdOutlineLink } from "react-icons/md";

export default function Card({ source, title, linked }) {
  return (
    <div
      className="w-80 h-64 bg-cover bg-center relative rounded-md"
      style={{
        backgroundImage: `url(${source})`, // Correct syntax
        backgroundSize: "cover", // Fills the container
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div className=" absolute bottom-0 w-full h-20 bg-[#003c5f] rounded-t-3xl hover:h-24 transition-all duration-150 flex flex-col justify-center">
        <p className="self-center text-2xl font-bold text-cyan-300 bg-[#003c5f]">
          {title}
        </p>
        <Link
          href={linked}
          target="_blank"
          rel="noopener noreferrer"
          className="self-center flex flex-row"
        >
          <p className="self-center text-1xl font-bold text-white bg-[#003c5f]">
            view Seat
          </p>
          <MdOutlineLink className="self-center ml-1 text-xl text-white" />
        </Link>
      </div>
    </div>
  );
}
