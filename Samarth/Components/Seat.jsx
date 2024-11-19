import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { MdOutlineLink } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";

export default function Seat() {
  // Ref for card elements
  const cardRefs = useRef([]);
  // Ref for the container
  const containerRef = useRef(null);

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

    // GSAP staggered animation for cards
    gsap.to(cardRefs.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3, // Animation delay between cards
      delay: 1,
    });

    // Animation for container
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-fit py-10 relative z-10 flex flex-col justify-start mb-8 rounded-lg"
    >
      <p className="program-heading opacity-100 text-[#003c5f] font-bold self-center text-3xl md:text-5xl z-10">
        Admission
      </p>
      <div className="underline-bar w-6/12 md:w-60 rounded-xl h-1 md:h-1 bg-yellow-300 mt-2 md:mt-5 self-center"></div>
      <div className="w-full py-20 flex flex-col md:flex-row justify-center md:justify-evenly self-center gap-10">
        {[
          {
            title: "Jossa",
            link: "https://iiitvadodara.ac.in/admission_btech.php",
          },
          {
            title: "Dasa",
            link: "https://iiitvadodara.ac.in/btechdasa2024.php",
          },

          {
            title: "Mtech",
            link: "https://sites.google.com/a/iiitvadodara.ac.in/pg-admission-portal/m-tech-program?authuser=0",
          },
        ].map((program, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)} // Add references to the array
            className="program-box w-60 h-52 self-center md:w-80 md:h-60 rounded-xl text-[#003c5f] bg-white border-2 border-[#003c5f] flex flex-col opacity-0 justify-center hover:bg-[#003c5f] hover:text-white"
          >
            <FaUserGraduate className="self-center text-4xl" />
            <p className="self-center text-2xl font-bold">{program.title}</p>
            <Link
              href={program.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-center flex flex-row"
            >
              <p className="self-center text-1xl font-bold">View Seats </p>
              <MdOutlineLink className="self-center ml-1 text-xl" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
