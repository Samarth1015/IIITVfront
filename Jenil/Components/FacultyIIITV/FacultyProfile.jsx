import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
const FacultyProfile = ({
  imgUrl,
  name,
  position,
  academicQualifications,
  contact,
}) => {
  return (
    <div className="w-full h-72 bg-[#2d4b76] justify-between px-10 flex flex-row py-5">
      <div className="flex flex-row">
        <Image
          src={imgUrl}
          className="pl-10 rounded-lg"
          width={350}
          height={200}
          alt="Faculty"
        />
        <div className="flex flex-col justify-start gap-2">
          <p className="text-5xl text-white  font-medium  ml-4">{name}</p>
          <p className="text-xl ml-4 text-gray-400">{position}</p>
          <p className="text-xl ml-4  text-gray-400">
            Academic Qualifications:
          </p>
          <ul className="list-disc ml-16 text-sm text-gray-400">
            {academicQualifications.map((qual, index) => (
              <li key={index}>
                {qual.degree} in {qual.field}, {qual.institution} ({qual.year})
              </li>
            ))}
          </ul>
          <p className=" text-gray-400 ml-4 flex flow-row">
            {" "}
            E-mail: {contact.email}
          </p>
        </div>
      </div>
      <div className="flex flex-col  justify-center text-xl gap-10">
        <Link href={"#"}>
          <p className="flex flex-row justify-start hover:scale-110 font-medium transition-all duration-200">
            <FaLinkedin className="self-center  text-white   hover:text-blue-700  text-4xl" />
          </p>
        </Link>
        <Link href={"#"}>
          <p className="flex flex-row justify-start text-left hover:scale-110 font-medium transition-all duration-200">
            <FaUserGraduate className="self-center  text-white hover:text-yellow-700   text-4xl" />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FacultyProfile;