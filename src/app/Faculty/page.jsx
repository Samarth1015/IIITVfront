"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faculty from "../../../Jenil/Components/Faculty";
import Footer from "../../../Samarth/Components/Footer";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  useEffect(() => {
    // Select all card elements with the 'faculty-card' class
    const cards = document.querySelectorAll(".faculty-card");

    // GSAP animation setup for scroll reveal
    gsap.from(cards, {
      opacity: 0, // Start with cards invisible
      y: 100, // Start position 100px lower
      duration: 3, // Duration of the animation
      stagger: 0.4, // Stagger the animations (delay each card's animation)
      scrollTrigger: {
        trigger: cards, // Trigger animation when card enters viewport
        start: "top 80%", // When the top of the card hits 80% of the viewport
        end: "top 30%", // End the animation when the top of the card reaches 30% of the viewport
        scrub: true, // Enable smooth animation syncing with scroll
        once: true, // Trigger the animation once (only once during the scroll)
      },
    });
  }, []);

  return (
    <div className="flex  bg-gradient-to-b from-[#001a3f] to-[#2c207a] w-full flex-col overflow-x-hidden overflow-y-hidden">
      <div className="w-full h-32 flex flex-col justify-center ">
        <h1 className="self-center font-bold text-4xl text-white">
          Our Faculty
        </h1>
        <div className="w-48 rounded-2xl mt-2 bg-yellow-300 h-1 self-center"></div>
      </div>
      <div className="w-full h-fit py-10 flex flex-col justify-start">
        <div className="flex flex-col md:flex-row py-5 justify-evenly">
          <Faculty />
          <Faculty />
          <Faculty />
        </div>
        <div className="flex flex-col md:flex-row py-5 justify-evenly">
          <Faculty />
          <Faculty />
          <Faculty />
        </div>
        <div className="flex flex-col md:flex-row py-5 justify-evenly">
          <Faculty />
          <Faculty />
          <Faculty />
        </div>{" "}
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
