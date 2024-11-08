import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiBuildingsFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

const Initialheader = () => {
  const buttonStyle =
    "bg-sky-400 text-xs p-1 md:p-2 rounded-lg hover:rounded-2xl  cursor-pointer transition-all duration-150 active:bg-sky-500 font-medium md:font-bold flex flex-row items-center";
  return (
    <div className="bg-white w-full h-16 md:h-28 flex flex-row justify-between items-center px-2 md:px-5">
      <Link href="/">
        <div className="flex flex-row items-center">
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="IIIT Vadodara Logo"
              width={90}
              height={90}
              className="h-8 w-8 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
            />
          </div>

          <div className="ml-2 md:ml-4 max-w-[230px] sm:max-w-xs md:max-w-md lg:max-w-full whitespace-normal">
            <p className="text-[9px] md:text-lg lg:text-2xl font-medium">
              Indian Institute of Information Technology Vadodara
            </p>
            <p className="text-[8px] md:text-base lg:text-lg font-medium">
              भारतीय सूचना प्रौद्योगिकी संस्थान वडोदरा
            </p>
          </div>
        </div>
      </Link>

      <div className="flex flex-row gap-2">
        <Link href={"https://diu.iiitvadodara.ac.in/"}>
          <div className={buttonStyle}>
            <span className="hidden md:inline">Diu Campus</span>
            <PiBuildingsFill className="self-center text-2xl p-1 md:p-0 md:ml-2" />
          </div>
        </Link>
        <Link href={"https://sites.google.com/iiitvadodara.ac.in/copyofiiitv2web/home?authuser=2&pli=1"}>
        <div className={buttonStyle}>
          <span className="hidden md:inline">Convocation</span>
          <FaGraduationCap className="self-center text-2xl p-1 md:p-0 md:ml-2" />
        </div>
        </Link>
        <div className="bg-sky-400 text-xs p-1 md:p-2 rounded-lg hover:rounded-2xl  cursor-pointer transition-all duration-150 active:bg-sky-500 font-medium md:font-bold flex flex-row items-center hover:bg-[#003c5f] hover:text-white">
          <span className="hidden md:inline">Menu</span>
          <CiMenuKebab className="self-center text-xl md:text-2xl p-1 md:p-0 md:ml-2" />
        </div>
      </div>
    </div>
  );
};

export default Initialheader;
