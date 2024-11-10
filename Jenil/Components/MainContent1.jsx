"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Events from "./Events";

const MainContent1 = ({menu}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".w-screen",
          start: () => {
            // Define conditions based on screen width
            if (window.innerWidth >= 1024) {
              return "top 80%"; // Trigger when 80% of the element hits viewport for laptops
            } else {
              return "center 100%"; // Trigger when element center hits viewport for mobile
            }
          },
          toggleActions: "play none none none", // Only play once on scroll
        },
      });

      // Animate text elements
      tl.from(".s1-text", {
        x: 350,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Animate image element separately
      tl.from(
        ".s1-image",
        {
          x: 100,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=1.5" // Start image animation slightly before text completes
      );

      // Animate last div to expand width
      gsap.fromTo(
        ".expand-div",
        { width: "0%" }, // Initial width
        {
          width: "50%", // Target width
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".expand-div",
            start: "top 90%", // Trigger when element enters the viewport
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [menu]);

  return (
    <>
      <div className="bg-white w-screen self-center h-full flex fle flex-row-reverse justify-between md:px-40">
        <div className="w-[40em] h-fit py-10">
          <Image
            src={"/d2.jpg"}
            className="s1-image w-[45em] pr-2 rounded-2xl md:h-[25em] md:pl-5"
            objectPosition="20% 10%"
            width={450}
            height={100}
            alt="Freshers 2024"
          />
        </div>
        <div className="self-center pr-2 max-w-[10em] md:max-w-none">
          <p className="s1-text text-nowrap md:max-w-[8em] font-sans pl-2 text-[#003c5f] text-xl md:text-7xl font-bold">
            Start Your
          </p>
          <p className="s1-text text-nowrap md:max-w-[8em] font-sans self-center pl-2 text-[#003c5f] text-xl md:text-7xl font-bold">
            Future Today
          </p>
          <article className="s1-text text-blue-600 pl-3 md:px-4 py-2 md:max-w-[25em] text-[9px] md:text-lg rounded-lg">
            New students, New dreams – all driven by the same purpose: to shape
            a brighter future together
          </article>
        </div>
      </div>

      <Events />
    
      <div className="expand-div w-6/12 h-12 opacity-60 bg-yellow-300 -mb-16 z-20"></div>
    </>
  );
};

export default MainContent1;
