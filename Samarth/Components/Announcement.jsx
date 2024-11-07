import gsap from "gsap";

import { TextPlugin } from "gsap/TextPlugin";
import Link from "next/link";
import { useEffect, useRef } from "react";
export default function Announcement() {
  gsap.registerPlugin(TextPlugin);
  const textRef = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    timeline
      .fromTo(
        textRef.current,
        { opacity: 0, scale: 0.8 },
        {
          duration: 2,
          text: "IIITV's Annual Tech Fest Cerebro 2024-25, Date: 11-17 Nov. 2024",
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          delay: 0,
        }
      )
      .to(textRef.current, {
        duration: 2,
        text: "IIITV (Intra) Web Hackathon, Date: 4-24 Nov. 2024",
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        delay: 3,
      })
      .to(textRef.current, {
        duration: 2,
        text: "Vigilance Awareness Week 2024 Time: Oct 28 - Nov 3, 2024",
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        delay: 3,
      })
      .to(textRef.current, {
        duration: 2,
        text: "Tender enquiry for 'Hiring of Commercial Vehicle of one no. SUV Innova Crysta on monthly hire basis for a period of two years, extendable for one more year.",
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        delay: 3,
      })
      .to(textRef.current, {
        duration: 2,
        text: "Vigilance Awareness Week 2024 Time: Oct 28 - Nov 3, 2024",
        opacity: 1,
        scale: 1,
        ease: "power2.out",
        delay: 3,
      })
      .to(textRef.current, {
        duration: 1,
        opacity: 0,
        scale: 0.8,
        ease: "power2.in",
      });
  }, []);

  return (
    <div className="bg-[#032b43] text-white p-8 rounded-2xl w-96 h-80  relative overflow-hidden shadow-lg">
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
      <div className="">
        <Link
          href={""}
          className="mx-auto text-yellow-500 hover:text-lg duration-200"
        >
          {" "}
          View all Announcement
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}
