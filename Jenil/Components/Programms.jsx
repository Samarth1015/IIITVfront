"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { MdOutlineLink } from "react-icons/md";

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
    <div className="w-full h-screen mb-[7em] md:mb-12">
      <div className="w-full h-fit py-10 bg-[#003c5f] relative z-10 flex flex-col justify-start">
        <video
          className="absolute opacity-65 hover:opacity-40 -z-10 transition-all duration-150 inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline>
          <source src="/collegeVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="program-heading opacity-100 text-white font-bold self-center text-3xl md:text-8xl z-10">
          Programs
        </p>
        <div className="underline-bar w-6/12 md:w-4/12 rounded-xl h-1 md:h-2 bg-cyan-300  mt-2 md:mt-5 self-center"></div>
        <div className="w-full py-20 flex flex-col md:flex-row  justify-center md:justify-evenly self-center gap-10">
          <div
            className="program-box w-60 h-52  self-center md:w-80 md:h-60 rounded-xl border-t-4 border-white bg-white flex flex-col-reverse opacity-0" // Initial opacity set to 0
            style={{
              backgroundImage: "url(/btech.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="w-full h-20 bg-[#003c5f] rounded-t-3xl hover:h-24 transition-all duration-150 flex flex-col justify-center">
              <p className="self-center text-2xl font-bold text-cyan-300 bg-[#003c5f]">
                B-Tech
              </p>
              <Link
                href="https://drive.google.com/file/d/1H2GJ8reZQayxYnfUVnUn3e8tllqCi8vw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="self-center flex flex-row">
                <p className="self-center text-1xl font-bold text-white bg-[#003c5f] flex flex-row">
                  Curriculum
                </p>
                <MdOutlineLink className="self-center ml-1 text-xl text-white" />
              </Link>
            </div>
          </div>
          <div
            className="program-box w-60 h-52  self-center md:w-80 md:h-60 rounded-xl border-t-4 border-white bg-white flex flex-col-reverse opacity-0" // Initial opacity set to 0
            style={{
              backgroundImage: "url(/Mtech.webp)",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}>
            <div className="w-full h-20 bg-[#003c5f] rounded-t-3xl hover:h-24 transition-all duration-150 flex flex-col justify-center">
              <p className="self-center text-2xl font-bold text-cyan-300 bg-[#003c5f]">
                M-Tech
              </p>
              <Link
                href="https://iiitvadodara.ac.in/assets/files/Annexure-XVI_MTech_CSE-_Curriculum2020.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="self-center flex flex-row">
                <p className="self-center text-1xl font-bold text-white bg-[#003c5f]">
                  Curriculum
                </p>
                <MdOutlineLink className="self-center ml-1 text-xl text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="program-box -mt-10 md:mt-0 w-60 h-52 md:w-80 md:h-60 rounded-xl border-t-4 border-white bg-white flex flex-col-reverse self-center opacity-0" // Initial opacity set to 0
          style={{
            backgroundImage: "url(/phd.webp)",
            backgroundSize: "contain",
            backgroundPosition: "50% 20%",
          }}>
          <div className="w-full h-20 bg-[#003c5f] rounded-t-3xl hover:h-24 transition-all duration-150 flex flex-col justify-center">
            <p className="self-center text-2xl font-bold text-cyan-300 bg-[#003c5f]">
              PhD
            </p>
            <Link
              href="https://pgadmissions.iiitvadodara.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="self-center flex flex-row">
              <p className="self-center text-1xl font-bold text-white bg-[#003c5f]">
                Visit Here
              </p>
              <MdOutlineLink className="self-center ml-1 text-xl text-white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programms;
