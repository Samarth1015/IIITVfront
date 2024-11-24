"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const ExtraPage = () => {
  useEffect(() => {
    // Dynamically import gsap and ScrollTrigger on client side
    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default;
      import("gsap/ScrollTrigger").then((scrollTriggerModule) => {
        const ScrollTrigger = scrollTriggerModule.default;

        // Register ScrollTrigger with GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Add animations using gsap.fromTo
        gsap.fromTo(
          ".row",
          {
            // Initial state
            x: -200,
            opacity: 0,
          },
          {
            // Final state
            x: 0,
            opacity: 1,
            duration: 0.5,
            
            scrollTrigger: {
              trigger: ".row",
              start: "top 50%", // Trigger animation when row enters viewport
              toggleActions: "play none none none", // Play once
            },
          }
        );
      });
    });
  }, []);

  return (
    <div className="relative w-full h-screen mt-10">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: "url(/college.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.6,
        }}
      ></div>

      {/* Content Layer */}
      <div className=" relative w-screen h-screen flex flex-col justify-start gap-4 pr-10 md:pr-0 md:justify-center py-10 bg-[#003c5f]">
        <strong className="self-center text-white text-2xl font-sans py-9">
          Placements
        </strong>

        {/* Row 1 */}
        <div className="row md:ml-20 w-8/12 flex flex-row md:self-center  gap-2 z-20">
          <div className="pl-16 ml-4 h-32 md:px-0 md:w-64 md:h-36 bg-gradient-to-br from-[#68b2eb] to-[#001a3f]  rounded-tl-lg  rounded-br-lg  flex flex-row-reverse">
            <p className="self-center text-white text-xl md:text-4xl font-bold pr-6">
              THE <br /> TOP
            </p>
          </div>
          <div className="h-40 self-center flex flex-col justify-center">
            <span className="text-sm flex flex-col text-nowrap text-white font-medium md:text-2xl self-center">
              Highest Package
              <p className="text-white text-xl md:text-4xl font-extrabold">1.33 Cr</p>
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row md:ml-80 w-8/12 flex flex-row md:self-center  gap-2 z-20">
          <div className="pl-20 ml-4 h-32 md:px-0 md:w-64 md:h-36  bg-gradient-to-br from-[#68b2eb] to-[#001a3f] rounded-tl-lg  rounded-br-lg  flex flex-row-reverse">
            <p className="self-center text-xl md:text-4xl font-bold pr-6 text-right text-white">
              THE <br /> MOST
            </p>
          </div>
          <div className="h-40 self-center flex flex-col justify-center">
            <span className="text-sm flex flex-col text-nowrap text-white font-medium md:text-2xl self-center">
              Average Package
              <p className="text-white text-xl md:text-4xl font-extrabold">11.34 LPA</p>
            </span>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row md:ml-[40em] w-8/12 flex flex-row md:self-center  gap-2 text-right z-20">
          <div className="pl-[120px] ml-4 h-32 md:px-0 md:w-64 md:h-36   bg-gradient-to-br from-[#68b2eb] to-[#001a3f]  rounded-tl-lg  rounded-br-lg  flex flex-row-reverse">
            <p className="self-center text-white  text-xl md:text-4xl font-bold pr-6">
              THE <br /> BEST
            </p>
          </div>
          <div className="h-40 self-center flex flex-col justify-center">
            <span className="text-sm flex flex-col text-nowrap text-white font-medium md:text-2xl self-center justify-start">
              Median Package
              <p className="text-white text-xl md:text-4xl font-extrabold self-start">9 LPA</p>
            </span>
          </div>
        </div>
       <Link className="self-center z-20 mt-2" target="#" href={"/stats"}><button className="-mr-10  bg-[#001a3f] text-white hover:text-black px-4 py-3 mt-2 w-fit self-center z-20 rounded-xl hover:bg-cyan-300 active:scale-95 hover:scale-105 font-medium transition-all duration-150">Placements Report</button></Link> 
      </div>
    </div>
  );
};

export default ExtraPage;
