import React, { useEffect, useRef } from "react";
import { FaHandHoldingWater, FaFemale, FaAmbulance } from "react-icons/fa";
import { MdFastfood, MdDryCleaning } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { GiMusicalScore } from "react-icons/gi";
import { PiSecurityCamera } from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hostelpage2 = () => {
  const amenitiesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      amenitiesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: amenitiesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const amenities = [
    { icon: <FaHandHoldingWater className="text-2xl md:text-7xl" />, label: "RO Water" },
    { icon: <MdFastfood className="text-2xl md:text-7xl" />, label: "Dining Hall" },
    { icon: <CgGym className="text-2xl md:text-7xl" />, label: "Gymnasium" },
    { icon: <GiMusicalScore className="text-2xl md:text-7xl" />, label: "Musical instruments" },
    { icon: <PiSecurityCamera className="text-2xl md:text-7xl" />, label: "Round the Clock Security" },
    { icon: <MdDryCleaning className="text-2xl md:text-7xl" />, label: "House Keeping" },
    { icon: <FaAmbulance className="text-2xl md:text-7xl" />, label: "Emergency Vehicle" },
    { icon: <FaFemale className="text-2xl md:text-7xl" />, label: "Female Caretaker" },
  ];

  return (
    <div className="w-full py-20 h-fit bg-white flex flex-col justify-start">
      <h1 className="mt-10 text-4xl self-center text-[#20385a] font-bold">
        Hostel Amenities
      </h1>
      <div className="w-10/12 h-fit py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-10 self-center">
        {amenities.map((item, index) => (
          <div
            key={index}
            className="h-20 ml-7 md:ml-0 md:h-60 w-20 md:w-60  flex flex-col items-center justify-center md:gap-2 hover:border-2 text-[#20385a] transition-all  duration-150 hover:bg-[#20385a] hover:text-white border-[#20385a] text-center"
            ref={(el) => (amenitiesRef.current[index] = el)}
          >
            {item.icon}
            <p className="text-[10px] md:text-2xl py-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hostelpage2;
