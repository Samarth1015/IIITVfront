'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const DropDownCompo = ({ setMenu }) => {
  let bgIMages = {
    1: { 
      image: "/faculty.jpeg",
      gradient: 'from-[#001a3f] to-[#cde422]' 
    },
    2: { 
      image: "/placement.webp", 
      gradient: 'from-[#060802] to-[#2d91c4]' 
    },
    3: { 
      image: "/hostel.jpg", 
      gradient: 'from-[#5f6366] to-[#2e2e2e]' 
    },
    4: { 
      image: "/calender.jpg", 
      gradient: 'from-[#060802] to-[#4e9186]' 
    }
  };
  
  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState(bgIMages[1].image); // Default background image
  const [gradient, setGradient] = useState(bgIMages[1].gradient); // Default gradient
  const [fadeInOut, setFadeInOut] = useState(true); // State to control fade effect

  useEffect(() => {
    // Trigger the animation on mount
    setIsVisible(true);
  }, []);

  const handleImageChange = (newImage) => {
    setFadeInOut(false); // Trigger fade-out
    setTimeout(() => {
      setImage(newImage.image);
      setGradient(newImage.gradient);
      setFadeInOut(true); // Trigger fade-in after a brief delay
    }, 300); // Match this delay with the fade-out duration
  };

  return (
    <div className={`fixed w-full h-screen flex flex-col-reverse md:flex-row transform ${isVisible ? 'translate-y-0' : '-translate-y-full'} md:transition-transform duration-500 ease-in-out`}>
      <div className={`py-10 w-full md:w-5/12 h-full bg-gradient-to-br  flex flex-row justify-center ${gradient} md:justify-end`}>
        <Link href="/">
          <div className="flex flex-row items-center absolute top-0 left-0">
            <div className="flex-shrink-0">
              <Image
                src="/asset 42.png"
                alt="IIIT Vadodara Logo"
                width={90}
                height={90}
                className="h-8 w-8 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain"
              />
            </div>

            <div className="ml-2 md:ml-4 max-w-[230px] sm:max-w-xs md:max-w-md lg:max-w-full whitespace-normal">
              <p className="text-[9px] text-white md:text-lg lg:text-2xl font-medium">
                Indian Institute of Information Technology Vadodara
              </p>
              <p className="text-[8px] text-white md:text-base lg:text-lg font-medium">
                भारतीय सूचना प्रौद्योगिकी संस्थान वडोदरा
              </p>
            </div>
          </div>
        </Link>
        <div className='self-center flex flex-col justify-center'>
          <div className="w-full flex flex-row justify-center md:justify-end cursor-pointer my-5">
            <p onClick={() => handleImageChange(bgIMages[1])} className=' text-2xl md:text-6xl font-bold text-end text-cyan-300 hover:text-yellow-300 hover:md:-translate-x-10 my-4 md:my-8 md:transition-transform'>
              Faculty
            </p>
          </div>
          <div className="w-full flex flex-row justify-center md:justify-end cursor-pointer my-5">
            <p onClick={() => handleImageChange(bgIMages[2])} className=' text-2xl md:text-6xl font-bold text-end text-cyan-300 hover:text-yellow-300 hover:md:-translate-x-10 my-4 md:my-8 md:transition-transform ease-in-out'>
              Placements
            </p>
          </div>
          <div onClick={() => handleImageChange(bgIMages[3])} className="w-full flex flex-row justify-center md:justify-end cursor-pointer my-5">
            <p className=' text-2xl md:text-6xl font-bold text-end text-cyan-300 hover:text-yellow-300 hover:md:-translate-x-10 my-4 md:my-8 md:transition-transform'>
              Hostels
            </p>
          </div>
          <div onClick={() => handleImageChange(bgIMages[4])} className="w-full flex flex-row justify-center md:justify-end cursor-pointer my-5">
            <p className=' text-2xl md:text-6xl font-bold text-end text-cyan-300 hover:text-yellow-300 hover:md:-translate-x-10 my-4 md:my-8 md:transition-transform ease-in-out'>
              Calendar
            </p>
          </div>
        </div>
      </div>
      <div className={`w-full mt-10 bg-cover md:bg-contain md:w-7/12 h-full transition-opacity duration-500`} style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover", // Make sure image covers the area
        background: `linear-gradient(${gradient})` // Apply dynamic gradient
      }}>
        <RxCross2
          onClick={() => setMenu(prev => !prev)}
          className='hover:rotate-180  absolute right-0 top-0 text-3xl m-2 md:m-7 hover:scale-110 duration-200 transition-all hover:font-bold active:scale-95'
        />
      </div>
    </div>
  );
}

export default DropDownCompo;
