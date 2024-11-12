"use client";
import { useEffect, useState } from "react";
import Initialheader from "../../../Jenil/Components/Initialheader";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import FacultyProfile from "../../../Jenil/Components/FacultyIIITV/FacultyProfile";

function Page() {
  const [facultyData, setFacultyData] = useState(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setFacultyData(data));
  }, []);

  return (
    <>
      <div
        className={`flex flex-col overflow-x-hidden overflow-y-hidden ${
          menu ? "hidden" : ""
        }`}
      >
        <Initialheader setMenu={setMenu} />
        {facultyData && <FacultyProfile imgUrl={facultyData.image} name={facultyData.name}  position={facultyData.position} academicQualifications={facultyData.academicQualifications} contact={facultyData.contact}/>}
        {facultyData && (
          <div className="p-4">
            <h1 className="text-2xl font-bold">{facultyData.name}</h1>
            <p className="text-lg">{facultyData.position}</p>
            <p>Email: {facultyData.contact.email}</p>
            
            <h2 className="mt-4 text-xl font-semibold">Academic Qualifications</h2>
            <ul className="list-disc ml-5">
              {facultyData.academicQualifications.map((qual, index) => (
                <li key={index}>
                  {qual.degree} in {qual.field}, {qual.institution} ({qual.year})
                </li>
              ))}
            </ul>

            <h2 className="mt-4 text-xl font-semibold">Research Interests</h2>
            <ul className="list-disc ml-5">
              {facultyData.researchInterest.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>

            <h2 className="mt-4 text-xl font-semibold">Work Experience</h2>
            <ul className="list-disc ml-5">
              {facultyData.workExperience.map((experience, index) => (
                <li key={index}>
                  {experience.position} at {experience.institution} ({experience.year})
                </li>
              ))}
            </ul>

            <h2 className="mt-4 text-xl font-semibold">Courses Teaching</h2>
            <ul className="list-disc ml-5">
              {facultyData.coursesTeaching.map((course, index) => (
                <li key={index}>
                  ({course.level}) {course.course}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div
        className={`flex flex-col overflow-x-hidden overflow-y-hidden ${
          !menu ? "hidden" : ""
        }`}
      >
        {menu && <DropDownCompo setMenu={setMenu} />}
      </div>
    </>
  );
}

export default Page;
