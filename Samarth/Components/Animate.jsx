"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Announcement from "./Announcement";
import Hidden from "./hidden";

export default function Animate() {
  const photos = [
    "/photo/WhatsApp Image 2024-11-07 at 14.36.57_84955099.jpg",
    "/photo/WhatsApp Image 2024-11-07 at 15.01.13_b3b41958.jpg",
    "/photo/WhatsApp Image 2024-11-07 at 15.01.16_e84395b4.jpg",
  ];

  const slideshowRef = useRef();

  useEffect(() => {
    const slides = slideshowRef.current.children;
    gsap.to(slides, {
      xPercent: -100 * (photos.length - 1),
      ease: "power1.inOut",
      duration: 10,
      repeat: -1,
      yoyo: true,
    });
  }, [photos.length]);

  return (
    <div className="h-screen w-screen  overflow-hidden ">
      <div className="">
        <div className=" h-28 w-full z-20 absolute  md:flex   mt-60  hidden justify-end ">
          <div className="mr-56">
            <Announcement></Announcement>
          </div>
        </div>
      </div>
      <div className="flex" ref={slideshowRef}>
        {photos.map((photo, idx) => (
          <div key={idx} className="w-screen flex-shrink-0 mr-5">
            <img
              src={photo}
              alt={`Slideshow Image ${idx + 1}`}
              layout="responsive"
              className="object-cover "
            />
          </div>
        ))}
      </div>
      <div className=" w-screen z-20 absolute md:hidden mt-4     ">
        <Hidden></Hidden>
      </div>
    </div>
  );
}
