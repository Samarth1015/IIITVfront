import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const Events = () => {
  const eventsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              entry.target,
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.3 } // Trigger when 10% of the element is in view
    );

    eventsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <center>
    <h1 className="bg-white md:text-5xl text-2xl font-bold text-[#003c5f] py-2 pb-6 ">Events</h1>
  </center>{" "}
    <div className="bg-white w-screen px-2 md:px-0 flex flex-row text-white justify-evenly gap-2 pb-2">
      <div
        ref={(el) => (eventsRef.current[0] = el)}
        className="w-60 max-w-60 h-36 md:h-72 flex flex-col-reverse"
        style={{
          backgroundImage: "url(/crb.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 0%",
        }}
      >
        <div className="bg-[#5c1b6e] h-20  md:h-24 rounded-t-xl flex flex-col justify-start ">
          <p className="font-medium text-[12px] md:text-xl text-center px-2 py-2 self-center">Cerebro 2024-25</p>
                   <button className="self-center text-xs md:text-xl hover:bg-[#381342] active:scale-95 px-2 py-1 rounded-lg duration-100 transition-colors"><Link href={"https://cerebro.iiitvadodara.ac.in/"}>Know More</Link></button>
        </div>
      </div>
      <div
        ref={(el) => (eventsRef.current[1] = el)}
        className="w-60 max-w-60 h-36 md:h-72 bg-[#292c5d] flex flex-col-reverse"
        style={{
          backgroundImage: "url(/hackethon.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 0%",
        }}
      >
        <div className="bg-yellow-600 h-20  md:h-24 rounded-t-xl flex flex-col justify-start ">
          <p className="font-medium text-[10px] text-center px-2 py-2 ">IIITV (Intra) Web Hackathon</p>
          <button className="self-center text-xs md:text-xl hover:bg-yellow-700 active:scale-95 px-2 py-1 rounded-lg duration-100 transition-colors -mt-2 md:mt-0">Know More</button>
      
        </div>
      </div>
      <div
        ref={(el) => (eventsRef.current[2] = el)}
        className="w-60 max-w-60 h-36 md:h-72 bg-[#292c5d] flex flex-col-reverse"
        style={{
          backgroundImage: "url(/tedX.jpeg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0 0%",
        }}
      >
        <div className="bg-[#ad3939] h-20  md:h-24 rounded-t-xl flex flex-col justify-start ">
          <p className="font-medium text-[12px]  md:text-xl text-center px-2 py-2">TEDxIIITV 2023</p>
                   <button className="self-center text-xs md:text-xl hover:bg-[#8d2f2f] active:scale-95 px-2 py-1 rounded-lg duration-100 transition-colors">Know More</button>
        
        </div>
      </div>
    </div>
    </>
  );
};

export default Events;
