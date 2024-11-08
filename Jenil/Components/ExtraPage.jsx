'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExtraPage = () => {
  useEffect(() => {
    // Ensure animations only run on the client side
    if (typeof window !== 'undefined') {
      gsap.from(".row", {
        x: -200,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".row",
          start: "top 80%", // Trigger animation when row enters viewport
          toggleActions: "play none none none", // Play once
        },
      });
    }
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
      <div className=" relative w-screen h-screen flex flex-col justify-center py-10 bg-[#003c5f]">
        <strong className="self-center text-white text-2xl font-sans py-12">Placements</strong>

        {/* Row 1 */}
        <div className="row ml-80 w-8/12 flex flex-row self-center gap-2 z-20">
          <div className="w-60 h-40 bg-yellow-300 flex flex-row-reverse">
            <p className="self-center text-4xl font-bold">THE <br /> TOP</p>
          </div>
          <div className="h-40 self-center flex flex-col justify-center">
            <span className="flex flex-row text-white font-medium text-2xl self-center">
              Highest Package (Off Campus): 
              <p className="text-yellow-300 ml-2">1.33 Cr</p>
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row ml-40 w-8/12 flex flex-row self-center gap-2 z-20">
          <div className="w-60 h-40 bg-[#db0fff] flex flex-row-reverse">
            <p className="self-center text-4xl font-bold text-right text-white">THE <br /> MOST</p>
          </div>
          <div className="h-40 self-center flex flex-col justify-center">
            <span className="flex flex-row text-white font-medium text-2xl self-center">
              Average Package: 
              <p className="text-[#db0fff] ml-2">11.34 LPA</p>
            </span>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row w-8/12 flex flex-row self-center gap-2 text-right z-20">
          <div className="w-60 h-40 bg-[#0f0fff] flex flex-row-reverse">
            <p className="self-center text-4xl font-bold">THE <br /> BEST</p>
          </div>
          <div className="h-40 self-center flex flex-col justify-center">
            <span className="flex flex-row text-white font-medium text-2xl self-center">
              Median Package: 
              <p className="text-[#0f0fff] ml-2">9 LPA</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraPage;
