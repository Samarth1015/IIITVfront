// components/HorizontalSlider.js
import { useEffect, useRef } from "react";
import gsap from "gsap";

const sliderItems = [
  { id: 1, color: "bg-red-500", text: "LifeAt" },
  { id: 2, color: "bg-green-500", text: "Convy" },
  { id: 3, color: "bg-blue-500", text: "Morgen" },
  { id: 4, color: "bg-yellow-500", text: "Campsite" },
  { id: 5, color: "bg-purple-500", text: "Rise" },
  { id: 6, color: "bg-orange-500", text: "ClickUp" },
  // Add more items as needed
];

export default function HorizontalSlider() {
  const sliderRef = useRef(null);
  const sliderRef1 = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      gsap.to(slider, {
        xPercent: -100,
        ease: "none",
        duration: 30,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);
  useEffect(() => {
    const slider = sliderRef1.current;
    if (slider) {
      gsap.to(slider, {
        xPercent: +100,
        ease: "none",
        duration: 30,
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="overflow-hidden w-full py-8">
      <div
        ref={sliderRef}
        className="flex gap-4 whitespace-nowrap"
        style={{ width: `${sliderItems.length * 200}px` }}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className={`flex-shrink-0 w-48 h-48 ${item.color} text-white font-bold text-center flex items-center justify-center rounded-lg shadow-lg`}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div
        ref={sliderRef1}
        className="flex gap-4 whitespace-nowrap mt-6"
        style={{ width: `${sliderItems.length * 200}px` }}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className={`flex-shrink-0 w-48 h-48 ${item.color} text-white font-bold text-center flex items-center justify-center rounded-lg shadow-lg`}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
