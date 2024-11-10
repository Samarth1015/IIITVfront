'use client'
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    // Select all card elements with the 'faculty-card' class
    const cards = document.querySelectorAll(".faculty-card");

    // GSAP animation setup for scroll reveal
    gsap.from(cards, {
      opacity: 0,            // Start with cards invisible
      y: 100,                // Start position 100px lower
      duration: 3,           // Duration of the animation
      stagger: 0.4,          // Stagger the animations (delay each card's animation)
      scrollTrigger: {
        trigger: cards,      // Trigger animation when card enters viewport
        start: "top 80%",     // When the top of the card hits 80% of the viewport
        end: "top 30%",       // End the animation when the top of the card reaches 30% of the viewport
        scrub: true,         // Enable smooth animation syncing with scroll
        once: true           // Trigger the animation once (only once during the scroll)
      },
    });
  }, []);

  return (
    <div className="flex mb-10 bg-gradient-to-b from-[#001a3f] to-[#2c207a] w-full flex-col overflow-x-hidden overflow-y-hidden">
      <div className="w-full h-32 bg-white flex flex-col justify-center bg-gradient-to-b from-[#9ca841] to-[#001a3f]">
        <h1 className="self-center font-bold text-4xl text-white">Our Faculty</h1>
      </div>
      <div className="w-full h-fit py-10 flex flex-col justify-start">
        <div className="flex flex-row self-center w-11/12 justify-evenly">
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all hover:shadow-lg shadow-yellow-300 duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-10 flex flex-col justify-start">
        <div className="flex flex-row self-center w-11/12 justify-evenly">
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all hover:shadow-lg shadow-yellow-300 duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-10 flex flex-col justify-start">
        <div className="flex flex-row self-center w-11/12 justify-evenly">
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all hover:shadow-lg shadow-yellow-300 duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit py-10 flex flex-col justify-start">
        <div className="flex flex-row self-center w-11/12 justify-evenly">
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all hover:shadow-lg shadow-yellow-300 duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
          <div
            className="faculty-card card w-80 h-96 hover:scale-110 transition-all duration-300 hover:rounded-lg bg-[#2d4b76] flex flex-col-reverse self-center"
            style={{
              backgroundImage: "url(jb.jpg)",
              backgroundSize: "contain",
              backgroundPosition: "0% -10%",
            }}
          >
            <div className="h-36 w-full bg-[#2d4b76] rounded-t-xl p-2 font-medium">
              <p className="my-4 text-xl text-yellow-300">Dr. Jignesh Bhatt</p>
              <p className="text-white">PhD Information and Communication Technology, DA-IICT, Gandhinagar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
