"use client";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    // Create an intersection observer to detect when the footer section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.from(".footer-section", {
              y: 50, // Move up from 50px below
              opacity: 0, // Start with opacity 0
              duration: 1, // Animation duration
              ease: "power3.out",
              stagger: 0.3, // Delay between each section
            });
            // Stop observing after animation has triggered
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5, // Trigger animation when at least 50% of the footer is visible
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <footer
      className="bg-[#032b43] text-white py-8 mr-6 static bottom-0 w-full "
      ref={footerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-col">
        <div className="flex flex-col md:flex-row md:justify-between mb-8 footer-section">
          <div className="mb-8 md:mb-0 w-full md:flex flex-wrap justify-between">
            <div className="flex">
              <div>
                <img src="/logo.png" className="h-14" alt="Logo" />
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-serif mb-2">
                  IIIT <br /> VADODARA
                </h2>
              </div>
            </div>
            <div>
              <p className="text-sm md:text-center">
                <FaMapMarkerAlt className="inline mr-2 size-5" />
                C/O Block No. 9 Government Engineering College Sector-28,
                <br />
                Gandhinagar Gujarat - 382028
              </p>
            </div>
            <div>
              <p className="text-sm mt-2">
                <Link href=""> 📞 +91-79-29750281</Link> <br />
                <Link href=""> 📞 +91-8849303883</Link>
                <br />
                <Link href="">
                  <CiMail className="inline mr-2 text-red-500 size-5" />
                  administration@iiitvadodara.ac.in
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#325462] w-full h-[0.09px] footer-section"></div>

        <div className="flex justify-between space-x-2 md:space-x-6 mt-8 footer-section">
          <div className="min-w-28  ">
            <h1 className="font-semibold text-[10px] md:text-4xl  mb-1 text-[#7FD2EF]">
              Important Link
            </h1>
            <ul className="text-[10px] md:text-lg ">
              <Link href="">
                <li className="hover:text-blue-400">Tender</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">RTI</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Vigilance</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Placement</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Hostel</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Gallery</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">FAQs</li>
              </Link>
            </ul>
          </div>
          <div className="min-w-28">
            <h1 className="font-semibold text-[10px] md:text-4xl  mb-1 text-[#7FD2EF]">
              Quick Link
            </h1>
            <ul className="text-[10px] md:text-lg font-extralight">
              <Link href="">
                <li className="hover:text-blue-400">SWAYAM</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">SWAYAM Prabha</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">e-Yantra</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Virtual Labs</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">FOSSEE</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Spoken Tutorial</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">NDLI | e-SS</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">PDS | IRINS</li>
              </Link>
            </ul>
          </div>
          <div className="min-w-28">
            <h1 className="font-semibold text-[10px] md:text-4xl  mb-1 text-[#7FD2EF]">
              E-Resources
            </h1>
            <ul className="text-[8px] md:text-lg font-extralight ">
              <Link href="">
                <li className="hover:text-blue-400">Moodle</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">NPTEL@IIITV</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Matlab Online</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Library Catalogue </li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Shodhganga | NDL</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">World eBook Library</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Open Access Journals</li>
              </Link>
              <Link href="">
                <li className="hover:text-blue-400">Paramshavak</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="bg-[#325462] w-full h-[0.09px] mt-10 footer-section"></div>

        <div className="text-center mt-8 text-sm text-gray-400 footer-section">
          @ Made By Jenil and Samarth / Designed by Ankit Bhati
        </div>
      </div>
    </footer>
  );
}
