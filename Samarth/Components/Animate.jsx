"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Announcement from "./Announcement";
import Hidden from "./Hidden";

export default function Animate() {
  const photos = [
    "/photo/img1.jpg",
    "/photo/img2.jpg",
    "/photo/img3.jpg",
    "/photo/img4.jpg",
    "/photo/img5.jpg",
    "/photo/img6.jpg",
    "/photo/img7.jpg",
    "/photo/img8.jpg",
  ];

  const slideshowRef = useRef();

  useEffect(() => {
    const slides = slideshowRef.current.children;
    gsap.to(slides, {
      xPercent: -100 * (photos.length - 1),
      ease: "power1.inOut",
      duration: 60,
      repeat: -1,
      yoyo: true,
    });
  }, [photos.length]);

  return (
    <div className="md:h-screen w-screen  overflow-hidden mb-[20em] md:mb-0 ">
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
              className="object-cover h-full"
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
