import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MdOutlineLink } from "react-icons/md";
import Card from "./Card";

export default function Seat() {
  // Ref for the card elements
  const cardRefs = useRef([]);
  // Ref for the parent container of the cards
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the main heading (with opacity and movement from top to bottom)
    gsap.from(".program-heading", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    // GSAP animation for the underline bar (from 0 width to full width)
    gsap.from(".underline-bar", {
      width: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    // GSAP staggered animation for program boxes to reveal them with opacity and movement
    gsap.to(cardRefs.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3, // Stagger animation for each card
      delay: 1, // Delay before starting the card animations
    });

    // GSAP animation for the parent container (with opacity and movement)
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50, // Reduced from 100 for smoother animation
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={containerRef} // Attach the containerRef to the parent div
      className="w-full h-fit py-10 bg-[#003c5f] relative z-10 flex flex-col justify-start  rounded-lg"
    >
      <video
        className="absolute opacity-65 hover:opacity-40 -z-10 transition-all duration-150 inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Preload the video
      >
        <source src="/collegeVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="program-heading opacity-100 text-white font-bold self-center text-3xl md:text-8xl z-10">
        Admission
      </p>
      <div className="underline-bar w-6/12 md:w-4/12 rounded-xl h-1 md:h-2 bg-cyan-300 mt-2 md:mt-5 self-center"></div>
      <div className=" md:flex flex-col flex-wrap">
        {/* First Row */}
        <div className="w-full flex justify-center p-4">
          {/* Add other content for the first row if needed */}
        </div>

        {/* Second Row */}
        <div className="w-full flex justify-around p-4 flex-wrap gap-x-96 mb-16 gap-y-20">
          <Card
            ref={(el) => cardRefs.current.push(el)} // Add reference to each card
            source="/admission/jossa.png"
            title={"Jossa Seat"}
            linked={"https://iiitvadodara.ac.in/admission_btech.php"}
          />
          <Card
            ref={(el) => cardRefs.current.push(el)} // Add reference to each card
            source="/admission/dasa.png"
            title={"Dasa Seat"}
            linked={"https://iiitvadodara.ac.in/btechdasa2024.php"}
          />
        </div>

        {/* Third Row */}
        <div className="w-full flex justify-around p-4 flex-wrap gap-x-96 mb-16 gap-y-20">
          <Card
            ref={(el) => cardRefs.current.push(el)} // Add reference to each card
            source="/admission/india.webp"
            title={"Mtech"}
            linked={
              "https://sites.google.com/a/iiitvadodara.ac.in/pg-admission-portal/m-tech-program?authuser=0"
            }
          />
          <Card
            ref={(el) => cardRefs.current.push(el)} // Add reference to each card
            source="/admission/mtech.webp"
            title={"Mtech"}
            linked={""}
          />
        </div>

        {/* Fourth Row */}
        <div className="w-full flex justify-around p-4 flex-wrap gap-x-96">
          <Card
            ref={(el) => cardRefs.current.push(el)} // Add reference to each card
            source="/admission/phd.webp"
            title={"Phd"}
            linked={"https://iiitvadodara.ac.in/research_programme.php"}
          />
        </div>
      </div>
    </div>
  );
}
