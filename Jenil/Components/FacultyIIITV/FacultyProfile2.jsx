import React, { useState } from "react";
import Box from "./Box";

const FacultyProfile2 = ({
  researchInterest,
  workExperience,
  coursesTeaching,
}) => {
  const [activeSection, setActiveSection] = useState("Research Interest");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Research Interest":
        return (
          <ul className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-5 w-10/12 justify-items-center">
            {researchInterest.map((interest, index) => (
              <Box key={index} items={interest} />
            ))}
          </ul>
        );
      case "Work Experience":
        return (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 justify-items-center">
            {workExperience.map((experience, index) => (
              <Box
                key={index}
                items={`${experience.position} at ${experience.institution} (${experience.year})`}
              />
            ))}
          </ul>
        );
      case "Additional Information":
        return (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 justify-items-center">
            {coursesTeaching.length > 0 ? (
              coursesTeaching.map((course, index) => (
                <Box key={index} items={`${course.level}: ${course.course}`} />
              ))
            ) : (
              <p>No additional information available.</p>
            )}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-fit  flex flex-col">
      <div className="w-6/12 h-fit py-2 bg-[#2d4b76] text-white rounded-xl self-center mt-2 flex flex-row justify-evenly">
        {["Research Interest", "Work Experience", "Additional Information"].map(
          (section) => (
            <p
              key={section}
              onClick={() => setActiveSection(section)}
              className={`hover:text-[#2d4b76] text-center text-sm  hover:bg-white px-2 py-1 cursor-pointer rounded-xl hover:scale-105 self-center transition-all duration-150 ${
                activeSection === section ? "bg-white text-[#2d4b76]" : ""
              }`}>
              {section}
            </p>
          )
        )}
      </div>

<div className="mt-4 p-4 flex flex-row justify-evenly ">{renderSectionContent()}</div>
   </div>
  );
};

export default FacultyProfile2;
