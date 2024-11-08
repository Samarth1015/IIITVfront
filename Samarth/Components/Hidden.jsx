import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";

import { TextPlugin } from "gsap/TextPlugin";
import Link from "next/link";

import { useEffect, useRef } from "react";
export default function Hidden() {
  gsap.registerPlugin(TextPlugin);
  const textRef = useRef(null);
  const textArray = [
    "IIITV's Annual Tech Fest Cerebro 2024-25, Date: 11-17 Nov. 2024",
    "IIITV (Intra) Web Hackathon, Date: 4-24 Nov. 2024",
    "Vigilance Awareness Week 2024 Time: Oct 28 - Nov 3, 2024",
    "Tender enquiry for 'Hiring of Commercial Vehicle of one no. SUV Innova Crysta on monthly hire basis for a period of two years, extendable for one more year.",
  ];
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    textArray.forEach((text) => {
      timeline
        .to(textRef.current, {
          duration: 1.5, // Moderate fade-in duration
          text: text,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          delay: 1, // Moderate delay after fade-in
        })
        .to(textRef.current, {
          duration: 1, // Moderate fade-out duration
          opacity: 0,
          scale: 0.9,
          ease: "power2.in",
          delay: 1, // Delay before moving to the next text
        });
    });
  }, []);
  return (
    <div className="bg-[#032b43]  text-white p-8     overflow-hidden shadow-lg">
      <h2 className="text-3xl font-serif font-bold mb-4 mx-auto underline ">
        Announcement
      </h2>
      <div className="mb-5 flex-col  ">
        <div className="min-h-36">
          <p
            id="myText"
            ref={textRef}
            className="text-xl font-bold text-white"
          ></p>
        </div>
      </div>
      <div className="flex  items-center  ">
        <div>
          <Link
            href={""}
            className="mx-auto text-yellow-500 hover:text-lg duration-200"
          >
            {" "}
            View all Announcement
          </Link>
        </div>
        <div className="ml-3">
          <FaArrowRight className="text-yellow-500"></FaArrowRight>
        </div>
      </div>
    </div>
  );
}
