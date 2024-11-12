import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaClipboardList } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { GiThermometerCold } from "react-icons/gi";
import gsap from "gsap";

const Calender = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // Stagger animation for each card
    gsap.from(".p", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.7,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <h1 className="text-center self-center text-2xl py-5 md:text-4xl text-[#20385a] font-medium">
        Academic Calender
      </h1>
      <div className="p flex gap-2 flex-col md:flex-row w-10/12  py-1 md:py-10 justify-center md:justify-evenly self-center">
        <Link
          className="self-center"
          href={
            "https://drive.google.com/file/d/15kHDiwhTRf0zoyXPDl2SnztY2-GBxg55/view"
          }>
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className=" md:w-68 md:h-44 w-64 h-32 border-2 cursor-pointer border-[#20385a] rounded-md flex flex-col justify-center gap-3 text-[#20385a] hover:text-white hover:bg-[#20385a] transition-all duration-200 ease-out">
            <FaClipboardList className="md:text-4xl text-xl self-center" />
            <p className="self-center text-center text-[12px] md:text-xl font-medium">
              List Of Holidays <br /> 2024
            </p>
          </div>
        </Link>
        <Link
          className="self-center"
          href={
            "https://drive.google.com/file/d/1TxAwTDmvm9X0bOXiLDwa6uGWpaw4u34d/view"
          }>
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className=" md:w-68 md:h-44 w-64 h-32 border-2 cursor-pointer border-[#20385a] rounded-md flex flex-col justify-center gap-3 text-[#20385a] hover:text-white hover:bg-[#20385a] transition-all duration-200 ease-out">
            <FaCloudSun className="md:text-4xl text-xl self-center" />
            <p className="self-center text-center text-[12px] md:text-xl font-medium">
              Autumn Semester <br />
              2024-25
            </p>
          </div>
        </Link>
      </div>
      <div className="p flex gap-2 flex-col md:flex-row w-10/12  py-1 md:py-10 justify-center md:justify-evenly self-center">
        <Link
          className="self-center"
          href={
            "https://drive.google.com/file/d/1lMaNXlxK1ZpK29JNJFJHNO_ldmLEbDWk/view"
          }>
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className=" md:w-68 md:h-44 w-64 h-32 border-2 cursor-pointer border-[#20385a] rounded-md flex flex-col justify-center gap-3 text-[#20385a] hover:text-white hover:bg-[#20385a] transition-all duration-200 ease-out">
            <GiThermometerCold className="md:text-4xl text-xl self-center" />
            <p className="self-center text-center text-[12px] md:text-xl font-medium">
              Winter Semester <br /> 2024-25
            </p>
          </div>
        </Link>
        <Link
          className="self-center"
          href={
            "https://drive.google.com/file/d/17FwtaIOlFEjGCYCJxA9_6GNRZbQZNyFr/view"
          }>
          <div
            ref={(el) => (cardRefs.current[3] = el)}
            className=" md:w-68 md:h-44 w-64 h-32 border-2 cursor-pointer border-[#20385a] rounded-md flex flex-col justify-center gap-3 text-[#20385a] hover:text-white hover:bg-[#20385a] transition-all duration-200 ease-out">
            <FaCloudSun className="md:text-4xl text-xl self-center" />
            <p className="self-center text-center text-[12px] md:text-xl font-medium">
              Autumn Semester <br /> 2024-25
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Calender;
