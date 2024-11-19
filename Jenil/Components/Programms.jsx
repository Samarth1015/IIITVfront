"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { MdOutlineLink } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";

const Programms = () => {
  useEffect(() => {
    // GSAP animation for the main heading
    gsap.from(".program-heading", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    // GSAP animation for the underline bar
    gsap.from(".underline-bar", {
      width: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    // GSAP staggered animation for program boxes to reveal them
    gsap.to(".program-box", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3, // Stagger animation for each box
      delay: 1,
    });
  }, []);

  return (
    <div className="w-full h-screen mb-[15em] md:mb-12">
      <div className="w-full h-fit py-10 bg-[#fff] relative z-10 flex flex-col justify-start">
        <p className="program-heading opacity-100 text-[#003c5f] font-bold self-center text-3xl md:text-5xl z-10">
          Programs
        </p>
        <div className="underline-bar w-6/12 md:w-60 rounded-xl h-1 md:h-1 bg-yellow-300  mt-2 md:mt-5 self-center"></div>
        <div className="w-full py-20 flex flex-col md:flex-row  justify-center md:justify-evenly self-center gap-10">
          <div
            className="program-box w-60 h-52  self-center md:w-80 md:h-60 rounded-xl  text-[#003c5f]   bg-white border-2 border-[#003c5f] flex flex-col opacity-0 justify-center hover:bg-[#003c5f] hover:text-white" // Initial opacity set to 0
          >
            <FaUserGraduate className="self-center text-4xl " />
            <p className="self-center text-2xl font-bold  ">B-Tech</p>
            <Link
              href="https://drive.google.com/file/d/1H2GJ8reZQayxYnfUVnUn3e8tllqCi8vw/view"
              target="_blank"
              rel="noopener noreferrer"
              className="self-center flex flex-row">
              <p className="self-center text-1xl font-bold  flex flex-row">
                Curriculum
              </p>
              <MdOutlineLink className="self-center ml-1 text-xl " />
            </Link>
          </div>
          <div
            className="program-box w-60 h-52  self-center md:w-80 md:h-60 rounded-xl  text-[#003c5f]   bg-white border-2 border-[#003c5f] flex flex-col opacity-0 justify-center hover:bg-[#003c5f] hover:text-white" // " // Initial opacity set to 0
          >

<FaUserGraduate className="self-center text-4xl " />

            <p className="self-center text-2xl font-bold ">M-Tech</p>
            <Link
              href="https://iiitvadodara.ac.in/assets/files/Annexure-XVI_MTech_CSE-_Curriculum2020.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="self-center flex flex-row">
              <p className="self-center text-1xl font-bold ">Curriculum</p>
              <MdOutlineLink className="self-center ml-1 text-xl" />
            </Link>
          </div>
        </div>
        <div
          className="program-box w-60 h-52  self-center md:w-80 md:h-60 rounded-xl  text-[#003c5f]   bg-white border-2 border-[#003c5f] flex flex-col opacity-0 justify-center hover:bg-[#003c5f] hover:text-white" // " // Initial opacity set to 0
        >
            <FaUserGraduate className="self-center text-4xl " />

          <p className="self-center text-2xl font-bold ">PhD</p>
          <Link
            href="https://pgadmissions.iiitvadodara.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center flex flex-row">
            <p className="self-center text-1xl font-bold">Visit Here</p>
            <MdOutlineLink className="self-center ml-1 text-xl " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Programms;
