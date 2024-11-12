"use client";
import { useEffect, useState } from "react";
import Initialheader from "../../../Jenil/Components/Initialheader";
import DropDownCompo from "../../../Jenil/Components/DropDownCompo";
import FacultyProfile from "../../../Jenil/Components/FacultyIIITV/FacultyProfile";
import FacultyProfile2 from "../../../Jenil/Components/FacultyIIITV/FacultyProfile2";

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
        {facultyData && (
          <>
            <FacultyProfile
              imgUrl={facultyData.image}
              name={facultyData.name}
              position={facultyData.position}
              academicQualifications={facultyData.academicQualifications}
              contact={facultyData.contact}
            />
            <FacultyProfile2
              researchInterest={facultyData.researchInterest}
              workExperience={facultyData.workExperience}
              coursesTeaching={facultyData.coursesTeaching}
            />
          </>
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
