'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const DropDownCompo = ({ setMenu }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation on mount
    setIsVisible(true);
  }, []);

  return (
    <div className={`fixed w-full h-screen flex flex-row transform ${isVisible ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-500 ease-in-out`}>
      <div className='w-1/2 h-full bg-[#003c5f] flex flex-row justify-end'>
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
        <div className='self-center'>
          <div className="w-full flex flex-row justify-end cursor-pointer my-5">
            <p className='text-6xl font-bold text-end text-cyan-300 hover:text-yellow-300 hover:-translate-x-10 my-8 transition-transform'>
              Faculty
            </p>
          </div>
          <div className="w-full flex flex-row justify-end cursor-pointer my-5">
            <p className='text-6xl font-bold text-end text-cyan-300 hover:text-yellow-300 hover:-translate-x-10 my-8 transition-transform ease-in-out'>
              Placements
            </p>
          </div>
          <div className="w-full flex flex-row justify-end cursor-pointer my-5">
            <p className='text-6xl font-bold text-end text-cyan-300 hover:text-yellow-300 hover:-translate-x-10 my-8 transition-transform'>
              Hostels
            </p>
          </div>
          <div className="w-full flex flex-row justify-end cursor-pointer my-5">
            <p className='text-6xl font-bold text-end text-cyan-300 hover:text-yellow-300 hover:-translate-x-10 my-8 transition-transform ease-in-out'>
              Calendar
            </p>
          </div>
        </div>
      </div>
      <div className='w-1/2 h-full bg-white'> 
        <RxCross2
          onClick={() => setMenu(prev => !prev)}
          className='absolute right-0 top-0 text-3xl m-7 hover:scale-110 duration-200 transition-all hover:font-bold active:scale-95'
        />
      </div>
    </div>
  );
}

export default DropDownCompo;
