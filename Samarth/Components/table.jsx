import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// components/EventsTable.js
export default function Sr() {
  const events = [
    {
      id: 1,
      title:
        'IIITV\'s Annual Tech Fest "Cerebro 2024-25", Date: 11-17 Nov. 2024',
    },
    { id: 2, title: "IIITV (Intra) Web Hackathon, Date: 4-24 Nov. 2024" },
    { id: 3, title: "Vigilance Awareness Week 2024 Time: Oct 28- Nov 3, 2024" },
    {
      id: 4,
      title:
        "Tender enquiry for 'Hiring of Commercial Vehicle of one no. SUV Innova Crysta on monthly hire basis for a period of two years which can be extended by one more year on same terms and conditions",
    },
    {
      id: 5,
      title:
        "Admissions to PhD (Full Time/ Part Time) programme, Winter 2024-25",
    },
    {
      id: 6,
      title:
        "One Day Workshop on Harnessing Artificial Intelligence for Academic Administration sponsored by Department of Technical Education - 5th October, 2024",
    },
    {
      id: 7,
      title:
        "NRI Admissions B. Tech (CSE) Program: Last date of receipt application (15 Sept 2024)",
    },
    {
      id: 10,
      title: "Anti-Ragging Compliance",
    },
    {
      id: 13,
      title:
        "IIITV is offering an AICTE Sponsored QIP PG Certification on Artificial Intelligence - 2024",
    },
    {
      id: 14,
      title:
        "Google form for PNB Pratibha Scheme | Education Loan without collateral | 20 Lakhs",
    },
    {
      id: 15,
      title:
        "PNB Pratibha Scheme | Education Loan without collateral | 20 Lakhs",
    },
    {
      id: 16,
      title: "SBI Scholar Loan (Upto 20 Lakhs without Collateral)",
    },
  ];

  useEffect(() => {
    // Register ScrollTrigger plugin for GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animate the whole div when it enters the screen
    gsap.fromTo(
      ".events-table-container", // Target the div by class
      {
        opacity: 0,
        y: 50, // Starting position (below the screen)
      },
      {
        opacity: 1,
        y: 0, // Final position (original position)
        duration: 1,
        scrollTrigger: {
          trigger: ".events-table-container", // The div that triggers the animation
          start: "top 80%", // Trigger when the element reaches 80% of the viewport
          once: true, // Only trigger once
        },
      }
    );
  }, []);

  return (
    <div className="overflow-x-auto px-4 py-8 max-h-96 mb-5 events-table-container">
      <table className="relative min-w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-800 text-white text-left font-semibold text-sm uppercase tracking-wider">
              Sr. No.
            </th>
            <th className=" text-center px-6 py-3 bg-gray-800 text-white  font-semibold text-sm uppercase tracking-wider">
              Title
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr
              key={event.id}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100`}
            >
              <td className="px-6 py-4 border-t text-gray-700">{event.id}</td>
              <td className="px-6 py-4 border-t text-gray-700">
                <Link href={"/"}>{event.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
