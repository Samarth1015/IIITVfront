"use client";
import { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Announcement from "./Announcement";
import Hidden from "./Hidden";

export default function Animate() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500); // Adjust the duration (in milliseconds) as needed

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentIndex]); // Dependencies ensure the interval updates with the current index

  return (
    <div className="md:h-screen w-screen overflow-hidden mb-[20em] md:mb-0">
      <div>
        <div className="h-28 w-full z-20 absolute md:flex mt-[28rem] hidden justify-end">
          <div className="mr-56">
            <Announcement />
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 relative group">
        <div
          style={{ backgroundImage: `url(${photos[currentIndex]})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {photos.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="w-screen z-20 absolute md:hidden mt-4">
        <Hidden />
      </div>
    </div>
  );
}
