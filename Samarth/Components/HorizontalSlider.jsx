import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const sliderItems = [
  {
    id: 1,
    link: "/company/1.jpg",
    text: "LifeAt",
  },
  {
    id: 2,
    link: "/company/2.jpg",
    text: "Convy",
  },
  {
    id: 3,
    link: "/company/3.jpg",
    text: "Morgen",
  },
  {
    id: 4,
    link: "/company/4.jpg",
    text: "Campsite",
  },
  {
    id: 5,
    link: "/company/5.jpg",
    text: "Rise",
  },
  {
    id: 6,
    link: "/company/6.jpg",
    text: "ClickUp",
  },
  {
    id: 7,
    link: "/company/7.jpg",
    text: "WorkZone",
  },
  {
    id: 8,
    link: "/company/8.jpg",
    text: "FocusHub",
  },
  {
    id: 9,
    link: "/company/9.jpg",
    text: "Taskify",
  },
  {
    id: 10,
    link: "/company/10.jpg",
    text: "MindMap",
  },
];
const sliderItems2 = [
  {
    id: 11,
    link: "/company/11.jpg",
    text: "LifeAt",
  },
  {
    id: 12,
    link: "/company/12.jpg",
    text: "Convy",
  },
  {
    id: 13,
    link: "/company/13.jpg",
    text: "Morgen",
  },
  {
    id: 14,
    link: "/company/14.jpg",
    text: "Campsite",
  },
  {
    id: 15,
    link: "/company/15.jpg",
    text: "Rise",
  },
  {
    id: 16,
    link: "/company/16.jpg",
    text: "ClickUp",
  },
  {
    id: 17,
    link: "/company/17.jpg",
    text: "WorkZone",
  },
  {
    id: 18,
    link: "/company/18.jpg",
    text: "FocusHub",
  },
  {
    id: 19,
    link: "/company/19.jpg",
    text: "Taskify",
  },
  {
    id: 20,
    link: "/company/20.jpg",
    text: "MindMap",
  },
];

export default function HorizontalSlider() {
  const sliderRef = useRef(null);
  const sliderRef1 = useRef(null);

  useEffect(() => {
    const slider1 = sliderRef.current;
    const slider2 = sliderRef1.current;

    if (slider1 && slider2) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(slider1, {
        xPercent: -10,
        ease: "none",
        duration: 8, // Set longer duration for smooth animation
      }).to(
        slider2,
        {
          xPercent: +10,
          ease: "none",
          duration: 8, // Same duration and direction for synchronization
        },
        0 // Set the delay to 0 for simultaneous start
      );
    }
  }, []);

  return (
    <div className="overflow-hidden w-full py-8">
      <div className="flex justify-center text-5xl">
        <h1 className="mb-2">Top companies</h1>
      </div>
      <div
        ref={sliderRef}
        className="flex gap-4 whitespace-nowrap"
        style={{ width: `${sliderItems.length * 200}px` }}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className={`hidden md:flex w-48 h-48 ${item.color} text-white font-bold text-center flex items-center justify-center rounded-lg shadow-lg`}
          >
            <img src={item.link} className="w-28"></img>
          </div>
        ))}
      </div>
      <div
        ref={sliderRef1}
        className=" gap-4 whitespace-nowrap mt-6  hidden md:flex md:flex-row"
        style={{ width: `${sliderItems2.length * 200}px` }}
      >
        {sliderItems2.map((item) => (
          <div
            key={item.id}
            className={`flex-shrink-0 w-48 h-48 ${item.color} text-white font-bold text-center flex items-center justify-center rounded-lg shadow-lg`}
          >
            <img src={item.link} className="w-28"></img>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href={
            "https://sites.google.com/iiitvadodara.ac.in/placement2021/placement-highlights/our-recruiters?authuser=0"
          }
        >
          <button className="mt-9 -mr-10  flex  bg-[#001a3f] text-white hover:text-black px-4 py-3 mt-2 w-fit self-center z-20 rounded-xl hover:bg-cyan-300 active:scale-95 hover:scale-105 font-medium transition-all duration-150 ">
            Our Recruiter
          </button>
        </Link>
      </div>++
    </div>
  );
}
