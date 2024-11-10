"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About_Director = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%", // Adjust this for laptop view
            end: "top 25%", // Adjust this for exit animation
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-fit mt-12 md:mt-16 pb-20 flex flex-row justify-center">
      <div className="w-1/2 self-center  md:h-auto h-full p-2 md:p-8 flex flex-col justify-center">
        <Image
          src={"/director.png"}
          className="self-center  md:w-80 rounded-xl shadow-md shadow-black"
          width={450}
          height={550}
          alt="Director of IIITV"
        />
      </div>
      <div className="w-1/2  px-2 md:w-1/2 h-full md:p-10 flex flex-col   justify-start md:justify-center">
        <p className="text-[10px] md:text-2xl md:-ml-10">
          "Welcome to IIIT Vadodara, where innovation meets excellence. Our
          institution is dedicated to inspiring personal growth and driving
          societal advancement through high-quality education. At IIIT Vadodara,
          we aim to harness the potential of our students, guiding them to
          become leaders and lifelong learners who contribute to national
          growth. We emphasize people-centric leadership, rooted in diversity,
          equality, and inclusion, with ethical standards at the core of our
          mission. Join us in a journey rich with learning and discovery, and
          become part of a community committed to excellence and impact.
          Together, let’s build a brighter future."
        </p>
        <p className="font-bold mt-2 md:mt-10 md:-ml-10 text-[12px] md:text-xl text-gray-700">
          Prof Dharmendra Singh <br /> Director
        </p>
      </div>
    </div>
  );
};

export default About_Director;
