// Import necessary packages
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HostelPage = () => {
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    
    // Animate the text and image when they enter the viewport
    gsap.fromTo(
      '.p',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <>
      <div
        className="w-full h-full -z-10 fixed top-0 hover:blur-0 blur-sm transition-all duration-200 ease-out"
        style={{
          backgroundImage: "url(/hostel.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="w-full h-80 mb-16"></div>
      <div className=" w-full h-screen flex flex-col justify-end">
        <p   className=" p self-center text-4xl font-bold text-white rounded-md w-10/12 py-5 -mb-2 text-center bg-[#20385a]">
          About Hostel
        </p>
        <div
          className="w-10/12 self-center h-fit py-10 px-5 gap-20 bg-[#20385a] flex flex-row justify-center"
          ref={contentRef}
        >
          <div ref={imageRef}>
            <Image
              src={'/jeetRoyal.jpg'}
              width={350}
              height={450}
              alt="IIITV Hostel"
            />
          </div>
          <p className="w-1/3 text-white self-center text-pretty p-2 text-xl">
            The Institute's empanelled hostel is located at Jeet Royal, Palaj,
            Gujarat 382355, approximately 9 km from the main campus. The hostel
            offers comfortable studio apartments, each accommodating four
            students and fully furnished with sliding windows, curtains, lights,
            and fans. Rooms come with an attached WC and bathroom, along with a
            fire-fighting sprinkler system for safety. Each student has a
            designated bed, study table, chair, and a lockable cupboard.
            Personal door locks provide added security, shared among roommates.
            For convenience, the building is equipped with a 24/7 elevator, and
            drinking water dispensers are available on each floor. The hostel
            includes a dining facility with ample seating, providing meals
            within the premises. To facilitate easy travel, a dedicated bus
            service regularly operates between the hostel and the Institute.
          </p>
        </div>
      </div>
    </>
  );
};

export default HostelPage;
