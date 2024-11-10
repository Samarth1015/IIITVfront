import * as React from "react";
import { useEffect, useRef } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import gsap from "gsap";

export default function Graph() {
  const detailRef = useRef(null);

  useEffect(() => {
    // Slide the detail div from the left
    gsap.from(detailRef.current, {
      x: -200, // Start position on the x-axis (to the left)
      opacity: 0, // Start with zero opacity
      duration: 1, // Duration of the animation
      ease: "power2.out", // Easing for smooth animation
    });
  }, []);

  return (
    <div>
      <div className="w-full flex-col  md:flex md:flex-row justify-between px-20">
        <div ref={detailRef} className="detail w-full flex flex-col gap-4 ">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl text-black underline">
              2023-2024
            </h1>
          </div>
          <div className="highest_off w-full">
            <LabelImportantIcon className="text-yellow-600 size-28"></LabelImportantIcon>
            <span className="text-2xl">
              {" "}
              Highest package (off campus) : 1.33 CR
            </span>
          </div>
          <div className="highest_on">
            <LabelImportantIcon className="text-yellow-600 size-28"></LabelImportantIcon>{" "}
            <span className="text-2xl">
              {" "}
              Highest package (on campus) : 40 LPA
            </span>
          </div>
          <div className="avg">
            <LabelImportantIcon className="text-yellow-600 size-28"></LabelImportantIcon>{" "}
            <span className="text-2xl"> Average package : 11.34 LPA</span>
          </div>
          <div className="median">
            <LabelImportantIcon className="text-yellow-600 size-28"></LabelImportantIcon>{" "}
            <span className="text-2xl"> Median package : 9 LPA</span>
          </div>
          <div className="min">
            <LabelImportantIcon className="text-yellow-600 size-28"></LabelImportantIcon>{" "}
            <span className="text-2xl"> Minimum package : 5 LPA</span>
          </div>
        </div>
        <div className="graph w-full mt-28">
          <BarChart
            className="w-full"
            series={[
              { data: [5.34, 6.4, 13, 11.53, 14.08, 15.43, 11.34] },
              { data: [4.8, 6, 7.2, 9, 13, 13.5, 9] },
              { data: [3.5, 3.36, 4.5, 3.5, 4.2, 6, 5] },
            ]}
            height={290}
            xAxis={[
              {
                data: [
                  "2017-2018",
                  "2018-2019",
                  "2019-2020",
                  "2020-2021",
                  "2021-2022",
                  "2022-2023",
                  "2023-2024",
                ],
                scaleType: "band",
              },
            ]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </div>
      </div>
    </div>
  );
}
